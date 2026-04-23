import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API}/api/products`)
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="loading">Loading products...</div>;

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product._id} className="product-card">
          <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-info">
              <h3>{product.title}</h3>
              <div className="product-price">
                <span className="price-symbol">$</span>{product.price}
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
