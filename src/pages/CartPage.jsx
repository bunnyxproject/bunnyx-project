import { useCart } from "../context/CartContext";

function CartPage() {
  const { cartItems } = useCart();

  return (
    <div className="text-white p-8">
      <h1 className="text-3xl font-semibold mb-4">Keranjang Belanja</h1>
      {cartItems.length === 0 ? (
        <p>Keranjangmu kosong 🛒</p>
      ) : (
        <ul className="space-y-2">
          {cartItems.map((item, index) => (
            <li key={index} className="bg-white/10 px-4 py-2 rounded">
              {item.title} — Rp {item.price.toLocaleString("id-ID")}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default CartPage;
