// Login page — takes email & password
// Later we'll connect this to the backend API

import { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // We'll replace this with real API call later
    console.log("Logging in with:", email, password)
    alert("Login coming soon — backend not connected yet!")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 w-full max-w-md">

        <h1 className="text-2xl font-bold text-gray-800 mb-1">Welcome back</h1>
        <p className="text-gray-500 mb-6">Login to your DevHire account</p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">

          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@email.com"
              required
              className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-400"
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 mt-2">
            Login
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-600 font-medium hover:underline">
            Sign up
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Login