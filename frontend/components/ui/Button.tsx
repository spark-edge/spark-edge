interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "neon" | "glass" | "gradient";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
}: ButtonProps) {
  const baseClasses =
    "font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 animate-glow";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 hover:shadow-lg",
    secondary:
      "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 hover:shadow-lg",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500",
    neon: "bg-transparent text-cyan-400 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black hover:shadow-cyan-400/50 neon-border-cyan hover:neon-glow-cyan",
    glass:
      "glass text-white border-slate-400/30 hover:border-slate-300/50 hover:bg-slate-800/40 backdrop-blur-xl",
    gradient:
      "bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 hover:shadow-xl hover:shadow-purple-500/25",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
