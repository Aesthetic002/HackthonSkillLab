const express = require("express");
const router = express.Router();

const {
  addToCart,
  updateCartQuantity,
  removeFromCart
} = require("../controllers/cartController");

router.post("/", addToCart);
router.put("/", updateCartQuantity);
router.delete("/", removeFromCart);

module.exports = router;