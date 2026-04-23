import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API}/api/products/${id}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="loading">Loading product...</div>;

  if (!product) {
    return (
      <div className="cart-empty">
        <h2>Product not found</h2>
        <Link to="/">Continue shopping</Link>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <div className="detail-image-box">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="detail-info">
        <h1>{product.title}</h1>
        <hr style={{ border: 'none', borderTop: '1px solid #e7e7e7', margin: '10px 0' }} />
        <div className="detail-price">
          <span className="price-symbol">$</span>{product.price}
        </div>
        <p className="detail-desc">
          <strong>About this item</strong><br />
          {product.description}
        </p>
      </div>

      <div className="detail-buy-box">
        <p className="buy-price">
          <span className="price-symbol">$</span><strong>{product.price}</strong>
        </p>
        <p className="buy-stock">In Stock</p>
        <button className="buy-btn">Add to Cart</button>
        <button className="buy-now-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetail;
