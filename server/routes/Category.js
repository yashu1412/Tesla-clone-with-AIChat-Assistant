const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/Category");
const { auth, isAdmin} = require("../middleware/auth");

// Public routes
router.get("/AllCategory", categoryController.getAllCategories);
router.get("/:id", categoryController.getCategoryById);

// Protected routes (admin only)
router.post("/CreateCategory", auth, isAdmin, categoryController.createCategory);
router.put("/Update/:id", auth, isAdmin , categoryController.updateCategory);
router.delete("/Delete/:id", auth, isAdmin , categoryController.deleteCategory);

module.exports = router;
