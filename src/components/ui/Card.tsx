interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <div
      className={`bg-white border border-[#D1D5DB] rounded-xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.08)] ${
        hover
          ? "hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-200"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

interface CardIconProps {
  icon: string;
}

export function CardIcon({ icon }: CardIconProps) {
  return (
    <div className="w-12 h-12 bg-[#F0FDFA] rounded-lg flex items-center justify-center text-[#005c55]">
      <span className="material-symbols-outlined">{icon}</span>
    </div>
  );
}
