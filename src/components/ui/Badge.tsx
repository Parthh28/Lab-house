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
      "bg-[#99F6E4] text-[#005c55] font-semibold",
    white:
      "bg-[#99F6E4]/20 text-[#99F6E4] font-medium",
    success:
      "bg-green-50 text-green-800 border border-green-200",
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
