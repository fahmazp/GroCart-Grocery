import express from 'express'
import { createCategory, getCategories, getCategoryProducts } from '../controllers/categoryController.js';
import { authAdmin } from '../middlewares/authAdmin.js';

const router = express.Router();

router.post("/add-category", authAdmin, createCategory);

router.get("/all-categories", getCategories);

router.get("/:slug/products", getCategoryProducts);

// router.put("/update-product/:id", authAdmin, upload.single("image"), updateProduct);
// router.delete("/delete-product/:id", authAdmin, deleteProduct);

export { router as categoryRouter };
