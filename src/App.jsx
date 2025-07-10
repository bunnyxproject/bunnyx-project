// src/App.jsx
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'

import Background from './components/Background'
import Navbar     from './components/Navbar'
import Footer     from './components/Footer'

import HomePage          from './pages/HomePage'
import AllItemsPage      from './pages/AllItemsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ContactPage       from './pages/ContactPage'
import AccountPage       from './pages/AccountPage'
import RegisterPage      from './pages/RegisterPage'

function App() {
  const location  = useLocation()
  const heroRef   = useRef(null)
  const [showNav, setShowNav] = useState(true)

  // hide/show navbar on scroll, but only on homepage
  useEffect(() => {
    if (location.pathname === '/') {
      const obs = new IntersectionObserver(
        ([entry]) => setShowNav(entry.isIntersecting),
        { threshold: 0.5 }
      )
      heroRef.current && obs.observe(heroRef.current)
      return () => obs.disconnect()
    } else {
      setShowNav(true)
    }
  }, [location.pathname])

  return (
    <AuthProvider>
      <CartProvider>
        {/* Video background hanya di homepage */}
        {location.pathname === '/' && <Background />}
        {/* Navbar muncul di semua halaman, dan hide/show di homepage */}
        {showNav && <Navbar />}

        <Routes>
          <Route
            path="/"
            element={<HomePage heroRef={heroRef} />}
          />
          <Route path="/all-items" element={<AllItemsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>

        <Footer />
      </CartProvider>
    </AuthProvider>
  )
}

export default App
