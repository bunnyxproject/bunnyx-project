import { useEffect, useRef, useState } from 'react';
import { CartProvider } from './context/CartContext';
import Background from './components/Background';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  const heroRef = useRef(null);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNavbar(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <CartProvider>
      <Background />
      {showNavbar && <Navbar />}
      <div className="main-content">
        <div ref={heroRef}>
          <HeroSection />
        </div>
        <ProductGrid />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
