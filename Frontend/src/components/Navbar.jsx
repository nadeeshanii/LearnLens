import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-white/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">

        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-lg font-bold text-white shadow-lg shadow-indigo-200">
            LL
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-900">
              Learn <span className="text-indigo-600">Lens</span>
            </p>
            <p className="text-xs text-slate-500">Student performance intelligence</p>
          </div>
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive ? "bg-indigo-600 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive ? "bg-indigo-600 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/students"
            className={({ isActive }) =>
              `rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive ? "bg-indigo-600 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`
            }
          >
            Students
          </NavLink>
          <NavLink
            to="/prediction"
            className={({ isActive }) =>
              `rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive ? "bg-indigo-600 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`
            }
          >
            Prediction
          </NavLink>
          <Link
            to="/login"
            className="ml-2 rounded-full border border-indigo-200 bg-white px-5 py-2 text-sm font-semibold text-indigo-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-indigo-50"
          >
            Login
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;