function SearchPage() {
  return (
    <div className="text-white p-8">
      <h1 className="text-3xl font-semibold mb-4">Cari Produk</h1>
      <input
        type="text"
        placeholder="Ketik nama produk..."
        className="w-full max-w-md px-4 py-2 rounded bg-white text-black"
      />
    </div>
  );
}
export default SearchPage;
