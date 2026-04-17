interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "glass" | "neon" | "gradient";
}

export function Card({
  children,
  className = "",
  variant = "default",
}: CardProps) {
  const variants = {
    default: "bg-white dark:bg-slate-800 shadow-md hover:shadow-lg",
    glass: "glass rounded-xl hover:bg-slate-800/50 hover:border-slate-400/40",
    neon: "bg-slate-900/50 border border-cyan-400/30 hover:border-cyan-400/60 hover:shadow-cyan-400/20 hover:shadow-xl",
    gradient:
      "bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-800/80 border border-slate-600/30 hover:border-slate-500/50",
  };

  return (
    <div
      className={`
        rounded-lg p-6 transition-all duration-300 animate-glow
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
