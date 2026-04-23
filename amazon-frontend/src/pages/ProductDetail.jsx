import React from 'react';
import { useParams, Link } from 'react-router-dom';

const dummyProducts = [
  { id: 1, title: "Premium Wireless Over-Ear Headphones, Noise Canceling, 40h Battery", price: 299.99, image: "/headphones.png", description: "Experience world-class noise cancellation and high-fidelity audio with these premium wireless headphones. Includes 40 hours of battery life and quick charging." },
  { id: 2, title: "Smartwatch Series Pro - Health Tracker, GPS, Water Resistant", price: 199.99, image: "/smartwatch.png", description: "Stay connected and track your health goals with the Smartwatch Series Pro. Features built-in GPS, heart rate monitoring, and water resistance up to 50 meters." },
  { id: 3, title: "CloudStride Men's Running Shoes - Lightweight & Breathable", price: 89.50, image: "/sneakers.png", description: "Engineered for comfort and performance, these running shoes feature a breathable mesh upper and responsive cushioning for every mile." },
  { id: 4, title: "ZenBook 14 Ultra-Slim Laptop, 14\" FHD, Intel Core i7, 16GB RAM, 512GB SSD", price: 1049.00, image: "/laptop.png", description: "Powerful performance meets portablity. The ZenBook 14 features a stunning FHD display and the latest Intel Core i7 processor for seamless multitasking." },
  { id: 5, title: "Lumina Alpha 7R Mirrorless Camera - 42.4MP Full-Frame Sensor", price: 2499.00, image: "/camera.png", description: "Capture stunning detail with the Lumina Alpha 7R. The 42.4MP full-frame sensor and high-speed autofocus make it perfect for professionals and enthusiasts alike." },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = dummyProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link to="/">Back to products</Link>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <div className="detail-image-sec">
        <img src={product.image} alt={product.title} />
      </div>
      
      <div className="detail-info-sec">
        <h1>{product.title}</h1>
        <hr style={{ margin: '15px 0', border: 'none', borderTop: '1px solid #e7e7e7' }} />
        
        <div className="detail-price">
          <span style={{ fontSize: '14px', verticalAlign: 'top' }}>$</span>
          {product.price}
        </div>
        
        <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#111' }}>
          <strong>About this item:</strong><br />
          {product.description}
        </p>

        <div style={{ marginTop: '30px' }}>
          <button className="add-to-cart-btn" style={{ padding: '12px 30px', width: '200px', fontSize: '15px' }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
