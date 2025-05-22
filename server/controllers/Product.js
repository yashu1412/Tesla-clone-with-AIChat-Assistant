const Product = require("../models/Product");

// Create new product
exports.createProduct = async (req, res) => {
  try {
    const { name, price, description, includes, category, subcategory, image } = req.body;
    if (!name || !price || !category || !subcategory) {
      return res.status(400).json({ message: "Required fields are missing" });
    }

    const product = await Product.create({ name, price, description, includes, category, subcategory, image });
    res.status(201).json(product);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get product by name
exports.getProductByName = async (req, res) => {
  try {
    const product = await Product.findByName(req.params.name);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    console.error("Error fetching product by name:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get products by subcategory
exports.getProductsBySubcategory = async (req, res) => {
  try {
       const subcategoryName = req.params.subcategory;
    const products = await Product.findBySubcategory(subcategoryName);
    
    res.json({
      success: true,
      count: products.length,
      products: products
    });
  } catch (error) {
    console.error("Error fetching products by subcategory:", error);
    res.status(500).json({ 
      success: false,
      message: "Internal Server Error" 
    });
  }
};

// Get products by category
exports.getProductsByCategory = async (req, res) => {
  try {
    const categoryName = req.params.category;
    const products = await Product.findByCategory(categoryName);
    
    res.json({
      success: true,
      count: products.length,
      products: products
    });
  } catch (error) {
    console.error("Error fetching products by category:", error);
    res.status(500).json({ 
      success: false,
      message: "Internal Server Error" 
    });
  }
};

// Update product
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.update(req.params.id, req.body);
    if (!product) return res.status(404).json({ message: "Product not found or update failed" });
    res.json(product);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.delete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found or already deleted" });
    res.json({ message: "Product deleted successfully", product });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
