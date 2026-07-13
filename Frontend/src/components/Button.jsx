import { Link } from "react-router-dom";

const baseClasses = "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition duration-300 shadow-lg";

const Button = ({ text, to, onClick, className = "", variant = "primary", type = "button" }) => {
  const classes =
    variant === "secondary"
      ? `${baseClasses} bg-white text-slate-900 ring-1 ring-slate-200 shadow-slate-200 hover:bg-slate-50`
      : variant === "danger"
        ? `${baseClasses} bg-rose-600 text-white shadow-rose-200 hover:-translate-y-0.5 hover:bg-rose-700`
        : `${baseClasses} bg-indigo-600 text-white shadow-indigo-200 hover:-translate-y-0.5 hover:bg-indigo-700`;

  if (to) {
    return (
      <Link to={to} className={`${classes} ${className}`.trim()}>
        {text}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${classes} ${className}`.trim()}>
      {text}
    </button>
  );
};

export default Button;