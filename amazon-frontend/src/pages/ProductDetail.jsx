import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Product Detail (Student 2)</h2>
      <p>Product ID: {id}</p>
      <p>Working on it...</p>
    </div>
  );
};

export default ProductDetail;
