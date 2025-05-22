const express = require("express");
const router = express.Router();
const { getUserProfile, updateUserProfile } = require("../controllers/profile");
const { auth } = require("../middleware/auth");

router.get("/get", auth, getUserProfile);
router.put("/update", auth, updateUserProfile);

module.exports = router;
