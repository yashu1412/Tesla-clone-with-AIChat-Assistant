const express = require("express");
const router = express.Router();
const productController = require("../controllers/Product");
const { auth, isAdmin } = require("../middleware/auth");

// POST: Create a new product
router.post("/CreateProduct", auth, isAdmin, productController.createProduct);

// GET: Get all products
router.get("/getAll", productController.getAllProducts);

// GET: Get products by category
router.get("/category/:category", productController.getProductsByCategory);

// GET: Get products by subcategory
router.get("/subcategory/:subcategory", productController.getProductsBySubcategory);

// GET: Get a product by name (case-insensitive)
router.get("/name/:name", productController.getProductByName);

// GET: Get a product by ID
router.get("/:id", productController.getProductById);

// PUT: Update a product
router.put("/:id", auth, isAdmin, productController.updateProduct);

// DELETE: Delete a product
router.delete("/:id", auth, isAdmin, productController.deleteProduct);

module.exports = router;