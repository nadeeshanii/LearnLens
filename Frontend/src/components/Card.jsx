const Card = ({ children, className = "" }) => {
  return (
    <div className={`rounded-3xl border border-white/70 bg-white/90 p-6 shadow-xl shadow-slate-200/60 backdrop-blur ${className}`.trim()}>
      {children}
    </div>
  );
};

export default Card;