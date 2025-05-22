const User = require("../models/User");
const OTP = require("../models/OTP");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const mailSender = require("../utils/mailSender");
const pool = require("../config/database");
require("dotenv").config();

// SEND OTP
exports.sendOTP = async (req, res) => {
  try {
    const { email } = req.body;

    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already registered" });
    }

    const otp = otpGenerator.generate(6, {
      digits: true,
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    await OTP.create(email, otp);
    await mailSender(email, "Your OTP Code", `Your OTP is: ${otp}`);
    
    res.status(200).json({ success: true, message: "OTP sent successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error sending OTP" });
  }
};

// In signup method, replace OTP verification:
exports.signup = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      confirmPassword,
      otp,
      region,
      language,
      role = "customer"
    } = req.body;

    if (!first_name || !last_name || !email || !password || !confirmPassword || !otp)
      return res.status(400).json({ success: false, message: "All fields are required" });

    if (password !== confirmPassword)
      return res.status(400).json({ success: false, message: "Passwords do not match" });

    const otpRecord = await OTP.verify(email, otp);
    if (!otpRecord) {
      return res.status(400).json({ success: false, message: "Invalid or expired OTP" });
    }

    const newUser = await User.create({
      first_name,
      last_name,
      email,
      password,
      region,
      language,
      role
    });

    res.status(201).json({ success: true, message: "Signup successful", user: newUser });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Signup failed" });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ success: false, message: "Email and password required" });

    const user = await User.findByEmail(email);
    if (!user) return res.status(401).json({ success: false, message: "User not found" });

    const isMatch = await User.validatePassword(password, user.password);
    if (!isMatch) return res.status(401).json({ success: false, message: "Incorrect password" });

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(200).json({
      success: true,
      token,
      user: {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        region: user.region,
        language: user.language,
        role: user.role,
        created_at: user.created_at,
      }
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Login failed" });
  }
};

// CHANGE PASSWORD
exports.changePassword = async (req, res) => {
  try {
    const userId = req.user.id;
    const { oldPassword, newPassword } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    const match = await User.validatePassword(oldPassword, user.password);
    if (!match)
      return res.status(401).json({ success: false, message: "Old password is incorrect" });

    await User.update(userId, {
      ...user,
      password: newPassword
    });

    await mailSender(
      user.email,
      "Password Changed",
      `Hi ${user.first_name}, your password was changed successfully.`
    );

    res.status(200).json({ success: true, message: "Password updated successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Could not update password" });
  }
};

// Admin: Change User Role
exports.changeUserRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;

    const updatedUser = await User.changeRole(id, role);
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found or role not changed." });
    }

    res.status(200).json({
      message: "✅ User role updated successfully.",
      user: updatedUser
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers(); // Optionally pass true to include deleted
    res.status(200).json({ success: true, users });
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};