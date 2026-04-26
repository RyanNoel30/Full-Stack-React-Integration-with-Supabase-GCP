import React from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const products = [
    { id: 1, name: 'Product A', description: 'Description for product A', price: 29.99 },
    { id: 2, name: 'Product B', description: 'Description for product B', price: 49.99 },
  ];

  return (
    <div>
      <h1>Home</h1>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
