import { useState } from 'react'
import { useSearchParams, useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function AccountPage() {
  const { user, signIn, signUp, signOut } = useAuth()
  const [searchParams] = useSearchParams()
  const mode            = searchParams.get('mode') === 'register' ? 'register' : 'login'
  const navigate        = useNavigate()

  const [firstName, setFirstName] = useState('')
  const [lastName,  setLastName]  = useState('')
  const [email,     setEmail]     = useState('')
  const [password,  setPassword]  = useState('')

  const handleLogin = async e => {
    e.preventDefault()
    await signIn({ email, password })
    navigate('/account')
  }

  const handleRegister = async e => {
    e.preventDefault()
    await signUp({ firstName, lastName, email, password })
    navigate('/account?mode=login')
  }

  if (user) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold mb-4">Hi, {user.name}!</h1>
        <p className="mb-8">Email: {user.email}</p>
        <button
          onClick={() => { signOut(); navigate('/') }}
          className="px-6 py-3 bg-white text-black font-medium"
        >
          SIGN OUT
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative z-10 mt-5">
        <div
          className="py-12 pb-3 text-center"
          data-type="text-center-two-lines"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h2 className="text-4xl font-semibold mb-3">
                <span className="block">
                  {mode === 'login' ? 'Login' : 'Create account'}
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="flex flex-col items-center justify-center px-4 pb-12">
        {mode === 'login' ? (
          <form
            onSubmit={handleLogin}
            className="w-full max-w-md space-y-6 mt-4"
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full p-3 bg-white text-black"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full p-3 bg-white text-black"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-white text-black font-medium"
            >
              SIGN IN
            </button>
            <p className="text-center text-gray-500">
              Don&apos;t have an account?{' '}
              <Link
                to="/account?mode=register"
                className="underline text-white"
              >
                Create account
              </Link>
            </p>
          </form>
        ) : (
          <form
            onSubmit={handleRegister}
            className="w-full max-w-md space-y-6 mt-4"
          >
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              className="w-full p-3 bg-white text-black"
              required
            />
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              className="w-full p-3 bg-white text-black"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full p-3 bg-white text-black"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full p-3 bg-white text-black"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-white text-black font-medium"
            >
              CREATE
            </button>
            <p className="text-center text-gray-500">
              Already have an account?{' '}
              <Link
                to="/account?mode=login"
                className="underline text-white"
              >
                Sign in
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
