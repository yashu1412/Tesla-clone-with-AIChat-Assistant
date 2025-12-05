// Importing necessary modules and packages
const express = require("express");
const app = express();
const userRoutes = require("./routes/user");
const CategoryRoutes = require("./routes/Category");
const SubcategoryRoutes = require("./routes/Subcategory");
const ProductRoutes = require("./routes/Product")
const ProfileRoutes = require("./routes/profile")
const PaymentRoutes = require("./routes/Payments")
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

// Setting up port number
const PORT = process.env.PORT || 4000;

// Loading environment variables from .env file
dotenv.config();

// Connecting to database
database.connect();
 
// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "/tmp/",
	})
);

// Connecting to cloudinary
cloudinaryConnect();

// Setting up routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/category", CategoryRoutes);
app.use("/api/v1/profile" , ProfileRoutes);
app.use("/api/v1/Subcategory", SubcategoryRoutes);
app.use("/api/v1/product" , ProductRoutes)
app.use("/api/v1/payments", PaymentRoutes)
// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

// Listening to the server
app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});

