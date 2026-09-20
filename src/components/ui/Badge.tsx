interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "white" | "success";
  icon?: string;
  className?: string;
}

export default function Badge({
  children,
  variant = "accent",
  icon,
  className = "",
}: BadgeProps) {
  const variants = {
    accent:
      "bg-[#99F6E4] text-[#003732] font-bold",
    white:
      "bg-white/15 text-white font-semibold border border-white/25",
    success:
      "bg-emerald-50 text-emerald-900 border border-emerald-300 font-semibold",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full ${variants[variant]} ${className}`}
    >
      {icon && (
        <span className="material-symbols-outlined text-[14px]">{icon}</span>
      )}
      {children}
    </span>
  );
}
