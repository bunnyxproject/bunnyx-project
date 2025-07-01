import { useEffect, useState } from 'react';
import logoLight from '../assets/logolight.svg';
import logoDark from '../assets/logodark.svg';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Deteksi mode tema (dark/light)
  useEffect(() => {
    const matchDark = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(matchDark.matches);

    const handleChange = (e) => setIsDarkMode(e.matches);
    matchDark.addEventListener('change', handleChange);
    return () => matchDark.removeEventListener('change', handleChange);
  }, []);

  // Deteksi arah scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 80) {
        // Scroll ke bawah
        setShowNavbar(false);
      } else {
        // Scroll ke atas
        setShowNavbar(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      style={{
        width: '100%',
        position: 'fixed',
        top: showNavbar ? 0 : '-100px',
        transition: 'top 0.3s ease',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        //backdropFilter: 'blur(8px)',
        color: '#fff',
      }}
    >
      <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <img
          src={isDarkMode ? logoDark : logoLight}
          alt="Bunny x Project"
          style={{
            height: '70px',
            marginLeft: '100px',
          }}
        />
      </div>

      <div style={{ flex: 1, textAlign: 'center', fontSize: '0.9rem' }}>
        <span style={{ margin: '0 1rem', cursor: 'pointer' }}>ALL ITEMS (☉.☉)⊃</span>
        <span style={{ margin: '0 1rem', cursor: 'pointer' }}>CONTACT</span>
      </div>

      <div style={{ flex: 1, textAlign: 'right', fontSize: '0.9rem', paddingRight: '100px' }}>
        <span style={{ margin: '0 0.5rem' }}>Indonesia (IDR Rp)</span>
        <span style={{ margin: '0 0.5rem' }}>EN</span>
        <span style={{ margin: '0 0.5rem' }}>🔍</span>
        <span style={{ margin: '0 0.5rem' }}>👤</span>
        <span style={{ margin: '0 0.5rem' }}>🛒</span>
      </div>
    </nav>
  );
}

export default Navbar;
