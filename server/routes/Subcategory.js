const express = require("express");
const router = express.Router();
const subcategoryController = require("../controllers/Subcategory");
const { auth , isAdmin } = require("../middleware/auth");

// Public routes
router.get("/AllSubcategories", subcategoryController.getAllSubCategories);
router.get("/single/:id", subcategoryController.getSubCategoryById);
router.get("/category/:category_id", subcategoryController.getSubCategoriesByCategory);

// Protected routes
router.post("/CreateSubcategory", auth, isAdmin, subcategoryController.createSubCategory);
router.put("/Update/:id", auth, isAdmin , subcategoryController.updateSubCategory);
router.delete("/Delete/:id", auth, isAdmin , subcategoryController.deleteSubCategory);

module.exports = router;