import { useCart } from '../context/CartContext';
import Card from './Card';
import { Link } from 'react-router-dom';

function ProductCard({ id, title, price, image }) {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const isAdded = cartItems.some((item) => item.id === id);

  const handleClick = () => {
    if (isAdded) {
      removeFromCart(id);
    } else {
      addToCart({ id, title, price });
    }
  };

  return (
    <Card>
      <div className="relative w-full h-full">
        
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-cover block"
          />
          <div className="absolute top-2 left-2 bg-black/60 text-white px-2 py-1 rounded text-xs font-bold">
            {title}
          </div>
        </Link>

        <div className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 rounded text-xs flex flex-col gap-1">
          <span>Rp {price.toLocaleString('id-ID')}</span>
          <button
            onClick={handleClick}
            className={`px-2 py-1 rounded text-xs ${
              isAdded ? 'bg-white text-black' : 'bg-black text-white'
            }`}
          >
            {isAdded ? '✅ Added' : '🛒 Add to Cart'}
          </button>
        </div>
      </div>
    </Card>
  );
}

export default ProductCard;
