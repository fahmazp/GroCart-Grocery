import { Cart } from "../models/cartModel.js";
import { Product } from "../models/productModel.js";

export const addItemToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId, quantity } = req.body;

    if (!productId || !quantity || quantity <= 0) {
      return res.status(400).json({ message: "Product and valid quantity required" });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Get the product price (could be dynamic later)
    const price = product.price;

    // Check if user already has a cart
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      //If no cart, create new
      cart = new Cart({ userId,products: [{ productId, quantity, price }], });
    } else {
      // if cart exists → check if product already in cart
      const existingProduct = cart.products.find((p) => p.productId.toString() === productId);

      if (existingProduct) {
        // Update quantity
        existingProduct.quantity += quantity;
        // Optionally update price if it changes (depends on your rules)
        existingProduct.price = price;
      } else {
        // Push new product into cart
        cart.products.push({ productId, quantity, price });
      }
    }

    // Recalculate total price
    cart.calculateTotalPrice();

    // Save the cart
    await cart.save();

    return res.status(200).json({ data:cart, message: "Product added to cart!" });
  } catch (error) {
    console.error("Add to cart error: ", error);
    return res.status(500).json({ message: "Something went wrong", error });
  }
};

export const getCart = async (req, res) => {
  try {
    const userId = req.user.id;

    const cart = await Cart.findOne({ userId })
      .populate("products.productId", "title price image category") // Add more fields if needed
      .exec();

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json({ data:cart, message:"Cart fetched" });
  } catch (error) {
    console.error("getCart error:", error);
    res.status(500).json({ message: "Failed to fetch cart", error });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.params;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const updatedProducts = cart.products.filter((item) => item.productId.toString() !== productId);

    if (updatedProducts.length === cart.products.length) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    // Remove the item from cart
    cart.products = updatedProducts;
    cart.calculateTotalPrice();
    await cart.save();

    res.status(200).json({ message: "Item removed from cart", data: cart });
  } catch (error) {
    console.error("removeFromCart error:", error);
    res.status(500).json({ message: "Failed to remove item from cart", error });
  }
};

export const clearCart = async (req, res) => {
  try {
    const userId = req.user.id;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Empty the cart
    cart.products = [];
    cart.totalPrice = 0;

    await cart.save();

    return res.status(200).json({ message: "Cart cleared successfully!" });
  } catch (error) {
    console.error("Error clearing cart:", error.message);
    res.status(500).json({ message: "Something went wrong while clearing cart", error });
  }
};
