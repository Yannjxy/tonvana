import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`
        group
        flex
        h-full
        flex-col
        rounded-[var(--radius-md)]
        border
        border-stone-200
        bg-[var(--surface)]
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[var(--brand-gold)]
        hover:shadow-xl
        ${className}
      `}
    >
      {/* Icon */}

      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-[var(--background)]
          text-[var(--brand-gold)]
          transition-all
          duration-300
          group-hover:bg-[var(--brand-gold)]
          group-hover:text-white
        "
      >
        <Icon size={30} />
      </div>

      {/* Title */}

      <h3 className="mt-8 text-2xl font-semibold text-[var(--text-primary)]">
        {title}
      </h3>

      {/* Description */}

      <p className="mt-5 flex-1 text-base leading-8 text-[var(--text-secondary)]">
        {description}
      </p>
    </div>
  );
}