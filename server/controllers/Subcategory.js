const SubCategory = require("../models/Subcategory");
const Category = require("../models/Category");

exports.createSubCategory = async (req, res) => {
  try {
    const { name, description, category_name } = req.body;
    
    if (!name || !category_name) {
      return res.status(400).json({ 
        success: false, 
        message: "Name and category name are required" 
      });
    }

    // Use findAll and filter by name instead
    const categories = await Category.findAll();
    const category = categories.find(cat => cat.name === category_name);
    
    if (!category) {
      return res.status(404).json({ 
        success: false, 
        message: "Category not found" 
      });
    }

    const subCategory = await SubCategory.create({ name, description, category_name });
    res.status(201).json({ 
      success: true, 
      message: "SubCategory created successfully",
      subCategory 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to create subcategory" 
    });
  }
};

exports.getAllSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.findAll();
    res.status(200).json({ 
      success: true, 
      subCategories 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to fetch subcategories" 
    });
  }
};

exports.getSubCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const subCategory = await SubCategory.findById(id);
    
    if (!subCategory) {
      return res.status(404).json({ 
        success: false, 
        message: "SubCategory not found" 
      });
    }

    res.status(200).json({ 
      success: true, 
      subCategory 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to fetch subcategory" 
    });
  }
};

exports.getSubCategoriesByCategory = async (req, res) => {
  try {
    const { category_name } = req.params;
    const subCategories = await SubCategory.findByCategory(category_name);
    
    res.status(200).json({ 
      success: true, 
      subCategories 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to fetch subcategories for the category" 
    });
  }
};

exports.updateSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, category_name } = req.body;
    
    if (!name || !category_name) {
      return res.status(400).json({ 
        success: false, 
        message: "Name and category name are required" 
      });
    }

    // Use findAll and filter by name instead
    const categories = await Category.findAll();
    const category = categories.find(cat => cat.name === category_name);
    
    if (!category) {
      return res.status(404).json({ 
        success: false, 
        message: "Category not found" 
      });
    }

    const subCategory = await SubCategory.update(id, { name, description, category_name });
    if (!subCategory) {
      return res.status(404).json({ 
        success: false, 
        message: "SubCategory not found" 
      });
    }

    res.status(200).json({ 
      success: true, 
      message: "SubCategory updated successfully",
      subCategory 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to update subcategory" 
    });
  }
};

exports.deleteSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const subCategory = await SubCategory.delete(id);
    
    if (!subCategory) {
      return res.status(404).json({ 
        success: false, 
        message: "SubCategory not found" 
      });
    }

    res.status(200).json({ 
      success: true, 
      message: "SubCategory deleted successfully" 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to delete subcategory" 
    });
  }
};