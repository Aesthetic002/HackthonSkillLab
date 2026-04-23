import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-box">
        <h1>Shopping Cart</h1>
        <div className="cart-empty">
          <h2>Your Amazon Cart is empty</h2>
          <p style={{ marginTop: '8px' }}>
            <Link to="/">Continue shopping</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
