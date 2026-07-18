import { Outlet, Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import FooterBar from "./FooterBar";

const AppShell = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.12),_transparent_26%),linear-gradient(180deg,_#eff6ff_0%,_#f8fafc_100%)] text-slate-900 lg:flex">
      {!isHomePage && <Sidebar />}

      <div className="flex min-h-screen flex-1 flex-col">
        <header className="border-b border-white/70 bg-white/70 px-5 py-4 backdrop-blur-xl sm:px-8">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">Learn Lens</p>
              <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">Student intelligence workspace</h1>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Link
                to="/"
                className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
              >
                Home
              </Link>
              {isHomePage ? (
                <Link
                  to="/login"
                  className="rounded-full border border-indigo-600 bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-indigo-700"
                >
                  Login
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="rounded-full border border-indigo-200 bg-white px-5 py-2.5 text-sm font-semibold text-indigo-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-indigo-50"
                >
                  Sign out
                </Link>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 px-5 py-6 sm:px-8 sm:py-8">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>

        <FooterBar />
      </div>
    </div>
  );
};

export default AppShell;