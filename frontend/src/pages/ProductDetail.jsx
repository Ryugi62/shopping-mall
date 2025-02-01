import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { productId } = useParams();

  return (
    <section>
      <h1>상품 상세</h1>
      <p>선택된 상품 ID: {productId}</p>
    </section>
  );
}

export default ProductDetail;
