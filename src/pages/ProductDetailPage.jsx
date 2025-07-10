import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const { id } = useParams();

  const product = {
    id,
    title: `Product ${id}`,
    description: `Ini detail untuk produk dengan ID ${id}.`,
    price: 250000
  };

  return (
    <div className="min-h-screen p-8 text-white">
      <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
      <p className="mb-2">{product.description}</p>
      <p className="font-semibold">Harga: Rp {product.price.toLocaleString('id-ID')}</p>
    </div>
  );
}

export default ProductDetailPage;
