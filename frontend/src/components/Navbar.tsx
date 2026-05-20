import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-sm px-8 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600 fonr-medium">
                DevHire
            </Link>
            <div className="flex gap-6 item-ceter">
                <Link to="/jobs" className="text-gray-600 hover:text-indigo-600 font-medium" >
                    Jobs
                </Link>
                <Link to="/login" className="text-gray-600 hover:text-indigo-600 font-medium">
                    Login
                </Link>
                <Link to="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                    sign-up
                </Link>

            </div>

        </nav>
    )
}
export default Navbar;