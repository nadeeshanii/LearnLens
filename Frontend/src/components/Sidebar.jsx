import { Link, NavLink } from "react-router-dom";

const links = [
	{ to: "/dashboard", label: "Dashboard" },
	{ to: "/students", label: "Students" },
];

const Sidebar = () => {
	return (
		<aside className="hidden min-h-screen w-60 border-r border-white/70 bg-slate-950 px-4 py-6 text-white lg:flex lg:flex-col">
			<Link to="/dashboard" className="mb-8 flex items-center gap-3 rounded-3xl bg-white/5 px-4 py-4 transition hover:bg-white/10">
				<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-lg font-bold text-white shadow-lg shadow-indigo-900/30">

				</div>
				<div>
					<p className="text-lg font-semibold">Learn Lens</p>
					<p className="text-sm text-slate-300">Teacher dashboard</p>
				</div>
			</Link>

			<nav className="space-y-2">
				{links.map((link) => (
					<NavLink
						key={link.to}
						to={link.to}
						className={({ isActive }) =>
							`flex items-center rounded-2xl px-4 py-3 text-sm font-medium transition ${isActive ? "bg-indigo-500 text-white shadow-lg shadow-indigo-900/30" : "text-slate-300 hover:bg-white/8 hover:text-white"
							}`}
					>
						{link.label}
					</NavLink>
				))}
			</nav>

			<div className="mt-auto rounded-3xl bg-gradient-to-br from-indigo-500 to-cyan-500 p-4 text-white shadow-xl shadow-indigo-900/30">
				<p className="text-sm font-medium uppercase tracking-[0.25em] text-white/80">Live insights</p>
				<p className="mt-2 text-lg font-semibold leading-snug">Track students, predict outcomes, and act earlier.</p>
			</div>
		</aside>
	);
};

export default Sidebar;

