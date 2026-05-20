import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="bg-indigo-600 text-white py-24 px-8 text-center">
        <h1 className="text-5xl font-bold mb-4">Find Your Dream Dev Job</h1>
        <p className="text-xl text-indigo-200 mb-8">
          Connecting Sri Lankan developers with top companies
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/jobs"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50">
            Browse Jobs
          </Link>
          <Link to="/register"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700">
            Post a Job
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <p className="text-4xl font-bold text-indigo-600">500+</p>
            <p className="text-gray-500 mt-2">Jobs Posted</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <p className="text-4xl font-bold text-indigo-600">200+</p>
            <p className="text-gray-500 mt-2">Companies</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <p className="text-4xl font-bold text-indigo-600">1000+</p>
            <p className="text-gray-500 mt-2">Developers</p>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-8 px-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Frontend", "Backend", "Full Stack", "Mobile", "DevOps", "UI/UX", "Data Science", "ML/AI"].map(cat => (
            <div key={cat}
              className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-indigo-400 hover:shadow-md cursor-pointer transition">
              <p className="font-medium text-gray-700">{cat}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Home