import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logolight.svg'

export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const [lastY, setLastY]   = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setVisible(y < lastY || y < 100)
      setLastY(y)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])

  return (
    <nav
      className={`
        fixed inset-x-0 top-0 z-50
        bg-black bg-opacity-80 backdrop-blur-sm
        transition-transform duration-300
        ${visible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div
        className="
          w-full max-w-7xl mx-auto
          grid grid-cols-[auto_1fr_auto]
          items-center
          px-6 py-3
        "
      >

        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </Link>

        <div className="flex justify-center space-x-8">
          <Link to="/all-items" className="text-white hover:text-gray-300">
            ALL ITEMS ᕦ(ò_óˇ)ᕤ
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300">
            CONTACT
          </Link>
        </div>

        <div className="flex justify-end items-center space-x-4 text-white">
          <div className="hidden lg:flex items-center space-x-1 hover:text-gray-300">
            <span>IDR Rp</span><span className="text-xs">▼</span>
          </div>
          <div className="hidden md:flex items-center space-x-1 hover:text-gray-300">
            <span>EN</span><span className="text-xs">▼</span>
          </div>
          <Link to="/search" className="text-lg hover:text-gray-300">🔍</Link>
          <Link to="/account" className="text-lg hover:text-gray-300">👤</Link>
          <Link to="/cart" className="text-lg hover:text-gray-300">🛒</Link>
        </div>
      </div>
    </nav>
  )
}
