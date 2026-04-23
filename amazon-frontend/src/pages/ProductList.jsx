import React from 'react';
import { Link } from 'react-router-dom';

const dummyProducts = [
  { id: 1, title: "Premium Wireless Over-Ear Headphones, Noise Canceling, 40h Battery", price: 299.99, image: "/headphones.png" },
  { id: 2, title: "Smartwatch Series Pro - Health Tracker, GPS, Water Resistant", price: 199.99, image: "/smartwatch.png" },
  { id: 3, title: "CloudStride Men's Running Shoes - Lightweight & Breathable", price: 89.50, image: "/sneakers.png" },
  { id: 4, title: "ZenBook 14 Ultra-Slim Laptop, 14\" FHD, Intel Core i7, 16GB RAM, 512GB SSD", price: 1049.00, image: "/laptop.png" },
  { id: 5, title: "Lumina Alpha 7R Mirrorless Camera - 42.4MP Full-Frame Sensor", price: 2499.00, image: "/camera.png" },
];

const ProductList = () => {
  return (
    <div className="product-grid">
      {dummyProducts.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-info">
              <h3>{product.title}</h3>
              <div className="product-price">
                <span>$</span>{product.price}
              </div>
            </div>
          </Link>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
