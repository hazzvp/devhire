// Register page — name, email, password, and role
// Role is either "candidate" (job seeker) or "company" (job poster)

import { useState } from "react"
import { Link } from "react-router-dom"

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("candidate")

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Registering:", { name, email, password, role })
    alert("Register coming soon — backend not connected yet!")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 w-full max-w-md">

        <h1 className="text-2xl font-bold text-gray-800 mb-1">Create account</h1>
        <p className="text-gray-500 mb-6">Join DevHire today</p>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">

          <div>
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Hasandi Peiris"
              required
              className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-400"
            />
          </div>

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

          {/* Role selector — are you looking for a job or posting one? */}
          <div>
            <label className="text-sm font-medium text-gray-700">I am a...</label>
            <div className="flex gap-4 mt-2">
              <button
                type="button"
                onClick={() => setRole("candidate")}
                className={`flex-1 py-2 rounded-lg border font-medium text-sm transition ${
                  role === "candidate"
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-gray-600 border-gray-300 hover:border-indigo-400"
                }`}>
                Job Seeker
              </button>
              <button
                type="button"
                onClick={() => setRole("company")}
                className={`flex-1 py-2 rounded-lg border font-medium text-sm transition ${
                  role === "company"
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-gray-600 border-gray-300 hover:border-indigo-400"
                }`}>
                Company
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 mt-2">
            Create Account
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 font-medium hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Register