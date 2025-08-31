import express from 'express'
import { createProducts, getallProducts, groupProductsHome, productDetails } from '../controllers/productController.js';
import { authAdmin } from '../middlewares/authAdmin.js';
import { upload } from '../middlewares/multer.js';


const router = express.Router()

//list products
router.get("/allProducts",getallProducts);

//create products(admin only)
router.post("/add-product",authAdmin,upload.single('image'),createProducts)

// details of a product
router.get("/productDetails/:productId",productDetails);

//list home products
router.get("/group-home-products",groupProductsHome);

// edit products
// router.put("/update-product/:productId")

//delete (admin only)
// router.delete("/delete-product/:productId")

//fetch products based on category
// router.get("/product-category", getCategoryPrdt)

export { router as productRouter };
