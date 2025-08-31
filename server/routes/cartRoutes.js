import express from 'express'
import { authUser } from '../middlewares/authUser.js';
import { addItemToCart, clearCart, getCart, removeFromCart } from '../controllers/cartController.js';


const router = express.Router()

//add to cart
router.post("/add-to-cart",authUser,addItemToCart);

// get details of cart
router.get("/get-cart",authUser,getCart);

//remove item from cart
router.delete("/remove-from-cart/:productId",authUser,removeFromCart);

//update cart
// router.get("/update-cart",authUser);

//clear cart
router.delete("/clear-cart",authUser,clearCart);

export { router as cartRouter };
