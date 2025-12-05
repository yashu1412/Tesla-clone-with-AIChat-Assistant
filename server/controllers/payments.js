const crypto = require("crypto");
const { instance } = require("../config/razorpay");
const pool = require("../config/database");
const Product = require("../models/Product");
const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const { paymentSuccessEmail } = require("../mail/templates/paymentSuccessEmail");

const ensureOrdersTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS orders (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id UUID NOT NULL,
      items JSONB NOT NULL,
      amount INTEGER NOT NULL,
      currency VARCHAR(5) NOT NULL,
      status VARCHAR(20) NOT NULL DEFAULT 'created',
      razorpay_order_id VARCHAR(100) UNIQUE NOT NULL,
      razorpay_payment_id VARCHAR(100),
      razorpay_signature VARCHAR(256),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  await pool.query(query);
  console.log("✅ Orders table ensured");
};

ensureOrdersTable().catch((error) =>
  console.error("❌ Failed to ensure orders table:", error)
);

const formatItemsPayload = (items) =>
  items.map(({ productId, name, quantity, price }) => ({
    productId,
    name,
    quantity,
    price,
  }));

exports.capturePayment = async (req, res) => {
  try {
    const userId = req.user.id;
    const { items } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "No products supplied for payment" });
    }

    const normalizedItems = [];
    let totalAmount = 0;

    for (const item of items) {
      const { productId, quantity = 1 } = item || {};
      if (!productId || quantity <= 0) {
        return res.status(400).json({
          success: false,
          message: "Each item must include a valid productId and quantity",
        });
      }

      const product = await Product.findById(productId);
      if (!product) {
        return res
          .status(404)
          .json({ success: false, message: "Product not found" });
      }

      const price = Number(product.price);
      totalAmount += price * quantity;
      normalizedItems.push({
        productId,
        name: product.name,
        quantity,
        price,
      });
    }

    if (totalAmount <= 0) {
      return res
        .status(400)
        .json({ success: false, message: "Unable to calculate order total" });
    }

    const orderOptions = {
      amount: Math.round(totalAmount * 100), // Razorpay expects paise
      currency: "INR",
      receipt: `order_${Date.now()}`,
    };

    const razorpayOrder = await instance.orders.create(orderOptions);

    await pool.query(
      `
        INSERT INTO orders (user_id, items, amount, currency, status, razorpay_order_id)
        VALUES ($1, $2, $3, $4, $5, $6);
      `,
      [
        userId,
        JSON.stringify(formatItemsPayload(normalizedItems)),
        orderOptions.amount,
        orderOptions.currency,
        razorpayOrder.status || "created",
        razorpayOrder.id,
      ]
    );

    return res.status(200).json({
      success: true,
      data: razorpayOrder,
      amount: orderOptions.amount,
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return res
      .status(500)
      .json({ success: false, message: "Could not initiate payment" });
  }
};

exports.verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res
        .status(400)
        .json({ success: false, message: "Incomplete Razorpay payload" });
    }

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return res
        .status(400)
        .json({ success: false, message: "Payment signature mismatch" });
    }

    const updateResult = await pool.query(
      `
        UPDATE orders
        SET status = 'paid',
            razorpay_payment_id = $2,
            razorpay_signature = $3,
            updated_at = CURRENT_TIMESTAMP
        WHERE razorpay_order_id = $1
        RETURNING *;
      `,
      [razorpay_order_id, razorpay_payment_id, razorpay_signature]
    );

    if (!updateResult.rows[0]) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Payment verified", order: updateResult.rows[0] });
  } catch (error) {
    console.error("Error verifying Razorpay payment:", error);
    return res
      .status(500)
      .json({ success: false, message: "Could not verify payment" });
  }
};

exports.sendPaymentSuccessEmail = async (req, res) => {
  try {
    const userId = req.user.id;
    const { orderId, paymentId, amount } = req.body;

    if (!orderId || !paymentId || !amount) {
      return res
        .status(400)
        .json({ success: false, message: "Missing email payload data" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    await mailSender(
      user.email,
      "Payment Received",
      paymentSuccessEmail(
        `${user.first_name} ${user.last_name}`.trim(),
        Number(amount) / 100,
        orderId,
        paymentId
      )
    );

    return res
      .status(200)
      .json({ success: true, message: "Payment email sent successfully" });
  } catch (error) {
    console.error("Error sending payment email:", error);
    return res
      .status(500)
      .json({ success: false, message: "Could not send payment email" });
  }
};