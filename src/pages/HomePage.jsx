import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/ProductGrid';

function HomePage({ heroRef }) {
  return (
    <>
      <HeroSection ref={heroRef} />
      <div id="products">
        <ProductGrid />
      </div>
    </>
  );
}

export default HomePage;
