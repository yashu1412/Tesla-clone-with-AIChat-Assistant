const pool = require("../config/database");

// Create OTPs Table if not exists
const createOTPsTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS otps (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email VARCHAR(100) NOT NULL,
      otp VARCHAR(6) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      expires_at TIMESTAMP DEFAULT (NOW() + INTERVAL '10 minutes')
    );
  `;
  await pool.query(query);
  console.log("✅ OTPs table created");
};

// Run once when the file is loaded
createOTPsTable();

const OTP = {
  create: async (email, otp) => {
    const query = `
      INSERT INTO otps (email, otp)
      VALUES ($1, $2)
      RETURNING *;
    `;
    const result = await pool.query(query, [email, otp]);
    return result.rows[0];
  },

  findByEmail: async (email) => {
    const query = `
      SELECT * FROM otps 
      WHERE email = $1 AND expires_at > NOW()
      ORDER BY created_at DESC 
      LIMIT 1;
    `;
    const result = await pool.query(query, [email]);
    return result.rows[0];
  },

  verify: async (email, otp) => {
    const query = `
      SELECT * FROM otps 
      WHERE email = $1 AND otp = $2 AND expires_at > NOW()
      ORDER BY created_at DESC 
      LIMIT 1;
    `;
    const result = await pool.query(query, [email, otp]);
    return result.rows[0];
  }
};

module.exports = OTP;
