const Card = ({ children, className = "" }) => {
  return (
    <div className={`rounded-3xl border border-sky-100 bg-sky-50/90 p-6 shadow-xl shadow-sky-100/60 backdrop-blur ${className}`.trim()}>
      {children}
    </div>
  );
};

export default Card;