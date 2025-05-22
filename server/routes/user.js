const express = require("express");
const router = express.Router();

const {
  login,
  signup,
  sendOTP,
  changePassword,
  changeUserRole,
  getAllUsers
} = require("../controllers/Auth");


const { auth, isAdmin } = require("../middleware/auth");

// Auth routes
router.post("/login", login);
router.post("/signup", signup);
router.post("/sendotp", sendOTP);
router.post("/changepassword", auth, changePassword);

// Admin-only actions
router.put("/:id/role", auth, isAdmin, changeUserRole);
router.get("/users", auth, isAdmin, getAllUsers); 

module.exports = router;
