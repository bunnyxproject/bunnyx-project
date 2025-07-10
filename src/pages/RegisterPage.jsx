import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function RegisterPage() {
  const { signUp } = useAuth()
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    signUp({ firstName, lastName, email, password })
    navigate('/account/login')
  }

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      <div className="max-w-md mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Create account</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            className="w-full px-4 py-3 bg-white text-black placeholder-gray-500"
            required
          />
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            className="w-full px-4 py-3 bg-white text-black placeholder-gray-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-white text-black placeholder-gray-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-white text-black placeholder-gray-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-white text-black py-3 uppercase font-medium"
          >
            Create
          </button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-gray-500">Already have an account? </span>
          <Link to="/account/login" className="text-white hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}
