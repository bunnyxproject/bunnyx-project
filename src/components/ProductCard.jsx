import { useCart } from '../context/CartContext';
import Card from './Card';

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
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            objectFit: 'cover',
          }}
        />

        {/* Nama Produk */}
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            backgroundColor: 'rgba(0,0,0,0.6)',
            color: '#fff',
            padding: '0.4rem 0.8rem',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '0.9rem',
          }}
        >
          {title}
        </div>

        {/* Harga dan Tombol */}
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            backgroundColor: 'rgba(0,0,0,0.6)',
            color: '#fff',
            padding: '0.5rem 0.8rem',
            borderRadius: '6px',
            fontSize: '0.8rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            alignItems: 'flex-start',
          }}
        >
          <span>Rp {price.toLocaleString('id-ID')}</span>
          <button
            onClick={handleClick}
            style={{
              backgroundColor: isAdded ? '#fff' : '#000',
              color: isAdded ? '#000' : '#fff',
              border: 'none',
              padding: '0.3rem 0.6rem',
              borderRadius: '4px',
              fontSize: '0.75rem',
              cursor: 'pointer',
            }}
          >
            {isAdded ? '✅ Added' : '🛒 Add to Cart'}
          </button>
        </div>
      </div>
    </Card>
  );
}

export default ProductCard;
