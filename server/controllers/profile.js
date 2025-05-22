const Profile = require("../models/Profile"); // adjust path if needed

// Get user profile
const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id; // assumes auth middleware sets req.user
    const userProfile = await Profile.getById(userId);

    if (!userProfile) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    return res.status(200).json({ success: true, data: userProfile });
  } catch (error) {
    console.error("Error fetching profile:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// Update user profile
const updateUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { first_name, last_name, region, language } = req.body;

    const updatedProfile = await Profile.update(userId, {
      first_name,
      last_name,
      region,
      language,
    });

    if (!updatedProfile) {
      return res.status(404).json({ success: false, message: "User not found or not updated" });
    }

    return res.status(200).json({ success: true, message: "Profile updated", data: updatedProfile });
  } catch (error) {
    console.error("Error updating profile:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = {
  getUserProfile,
  updateUserProfile,
};
