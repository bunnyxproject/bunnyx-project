import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import daruma from '../assets/daruma-white1.jpg';
import retri from '../assets/retri-black1.jpg';
import starry from '../assets/starry-black1.jpg';

function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dummyProducts = [
      { id: 1, title: 'Daruma T-shirt', price: 99000, image: daruma },
      { id: 2, title: 'Retribution T-shirt', price: 99000, image: retri },
      { id: 3, title: 'Starry T-shirt', price: 99000, image: starry },
    ];

    setTimeout(() => {
      setProducts(dummyProducts);
    }, 1000);
  }, []);

  return (
<div
  id="products"
  style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    padding: 0,
    margin: 0,
  }}>
    
  {products.map((p) => (
    <ProductCard key={p.id} {...p} />
  ))}
</div>


  );
}

export default ProductGrid;
