const Cart = require("../models/Cart");

// POST /cart -> add item
const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({
        userId,
        items: [{ productId, quantity: quantity || 1 }]
      });
    } else {
      const existingItem = cart.items.find(
        (item) => item.productId.toString() === productId
      );

      if (existingItem) {
        existingItem.quantity += quantity || 1;
      } else {
        cart.items.push({ productId, quantity: quantity || 1 });
      }
    }

    await cart.save();

    res.status(200).json({
      message: "Item added to cart",
      cart
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add to cart",
      error: error.message
    });
  }
};

// PUT /cart -> update quantity
const updateCartQuantity = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const item = cart.items.find(
      (item) => item.productId.toString() === productId
    );

    if (!item) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    item.quantity = quantity;
    await cart.save();

    res.status(200).json({
      message: "Cart updated",
      cart
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update cart",
      error: error.message
    });
  }
};

// DELETE /cart -> remove item
const removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== productId
    );

    await cart.save();

    res.status(200).json({
      message: "Item removed from cart",
      cart
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to remove item",
      error: error.message
    });
  }
};

module.exports = {
  addToCart,
  updateCartQuantity,
  removeFromCart
};