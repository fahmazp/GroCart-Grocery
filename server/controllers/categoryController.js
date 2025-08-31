import { Category } from "../models/categoryModel.js";
import { Product } from "../models/productModel.js";

export const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json({ data: category, message: "Category created!" });
  } catch (err) {
    res.status(400).json({ message: "Failed to create category", error: err.message });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ order: 1, name: 1 });
    res.json({ data: categories, message: "Categories listed!" });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch categories", error: err.message });
  }
};

// Get products of a category
export const getCategoryProducts = async (req, res) => {
  try {
    const { slug } = req.params;
    const category = await Category.findOne({ slug });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const products = await Product.find({ category: category._id })
      .select("-description -isActive -admin -stock")
      .sort({ createdAt: -1 });

    res.json({ data: { category, products }, message: "Category Products fetched!" });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch category products", error: err.message });
  }
};
