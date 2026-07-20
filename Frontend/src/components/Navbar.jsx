import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">

          <div className="bg-indigo-600 p-3 rounded-xl text-white text-2xl">
            <FaGraduationCap />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Learn <span className="text-indigo-600">Lens</span>
            </h1>

            <p className="text-sm text-gray-500">
              AI-Powered Education
            </p>
          </div>

        </Link>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-slate-700">

          <li>
            <Link
              to="/"
              className="hover:text-indigo-600 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/students"
              className="hover:text-indigo-600 transition"
            >
              Students
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard"
              className="hover:text-indigo-600 transition"
            >
              Dashboard
            </Link>
          </li>

        </ul>

        {/* Button */}
        <Link
          to="/login"
          className="bg-indigo-200 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Login
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;