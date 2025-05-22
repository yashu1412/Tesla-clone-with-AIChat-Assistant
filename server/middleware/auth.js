const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../models/User"); // Ensure this is the path to your User model
dotenv.config();

// This function is used as middleware to authenticate user requests
exports.auth = async (req, res, next) => {
	try {
		// Extracting JWT from request cookies, body, or header
		const token =
			req.cookies.token ||
			req.body.token ||
			req.header("Authorization").replace("Bearer ", "");

		// If JWT is missing, return 401 Unauthorized response
		if (!token) {
			return res.status(401).json({ success: false, message: "Token Missing" });
		}

		// Verifying the JWT using the secret key stored in environment variables
		const decoded = await jwt.verify(token, process.env.JWT_SECRET);
		console.log(decoded); // You can log the decoded token for debugging
		// Storing the decoded JWT payload in the request object for further use
		req.user = decoded;
		// Proceed to next middleware or route handler
		next();
	} catch (error) {
		// If JWT verification fails, return 401 Unauthorized response
		return res.status(401).json({
			success: false,
			message: "Token is invalid or expired",
		});
	}
};
// Middleware to check if the user is a Customer
exports.isCustomer = async (req, res, next) => {
	try {
	  const userDetails = await User.findByEmail(req.user.email);
	  if (!userDetails) {
		return res.status(404).json({
		  success: false,
		  message: "User not found",
		});
	  }
	  if (userDetails.role !== "customer") {
		return res.status(403).json({
		  success: false,
		  message: "This route is restricted to Customers only",
		});
	  }
	  next();
	} catch (error) {
	  return res.status(500).json({
		success: false,
		message: "Unable to verify user role",
	  });
	}
  };
  
  // Middleware to check if the user is an Employee
  exports.isEmployee = async (req, res, next) => {
	try {
	  const userDetails = await User.findByEmail(req.user.email);
	  if (!userDetails) {
		return res.status(404).json({
		  success: false,
		  message: "User not found",
		});
	  }
	  if (userDetails.role !== "employee") {
		return res.status(403).json({
		  success: false,
		  message: "This route is restricted to Employees only",
		});
	  }
	  next();
	} catch (error) {
	  return res.status(500).json({
		success: false,
		message: "Unable to verify user role",
	  });
	}
  };
  
// Middleware to check if the user is an Admin
exports.isAdmin = async (req, res, next) => {
	try {
	  const userDetails = await User.findByEmail(req.user.email);
	  if (!userDetails) {
		return res.status(404).json({ success: false, message: "User not found" });
	  }
	  if (userDetails.role !== "admin") {
		return res.status(403).json({
		  success: false,
		  message: "This route is restricted to Admins only",
		});
	  }
	  next();
	} catch (error) {
	  return res.status(500).json({
		success: false,
		message: "Unable to verify user role",
	  });
	}
  };
  

// Middleware to check if the user is either Admin or Employee
exports.isAdminOrEmployee = async (req, res, next) => {
	try {
		const userDetails = await User.findByEmail({ email: req.user.email });
		if (userDetails.role !== "admin" && userDetails.role !== "employee") {
			return res.status(403).json({
				success: false,
				message: "This route is restricted to Admins and Employees only",
			});
		}
		next();
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Unable to verify user role",
		});
	}
};
