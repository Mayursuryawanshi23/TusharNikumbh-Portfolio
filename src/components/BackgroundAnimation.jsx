const BackgroundAnimation = () => {
  // Simplified static background - no animations for better performance
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-slate-50">
      {/* Static Gradient Background - No Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-slate-50" />
      
      {/* Optional: Subtle fixed gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50/20 to-transparent" />
    </div>
  );
};

export default BackgroundAnimation;

