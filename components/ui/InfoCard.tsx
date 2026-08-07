import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon?: LucideIcon;
  title: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function InfoCard({
  icon: Icon,
  title,
  children,
  className = "",
  dark = false,
}: InfoCardProps) {
  return (
    <div
      className={`
        group
        h-full
        rounded-[var(--radius-md)]
        p-8
        transition-all
        duration-300
        ${
          dark
            ? `
              bg-[var(--brand-green)]
              text-white
              shadow-xl
            `
            : `
              border
              border-stone-200
              bg-[var(--surface)]
              shadow-sm
              hover:-translate-y-1
              hover:border-[var(--brand-gold)]
              hover:shadow-xl
            `
        }
        ${className}
      `}
    >
      {Icon && (
        <div
          className={`
            mb-6
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            transition-all
            duration-300
            ${
              dark
                ? `
                  bg-white/10
                  text-[var(--brand-gold)]
                `
                : `
                  bg-[var(--background)]
                  text-[var(--brand-gold)]
                  group-hover:bg-[var(--brand-gold)]
                  group-hover:text-white
                `
            }
          `}
        >
          <Icon size={26} />
        </div>
      )}

      <h3
        className={`
          text-2xl
          font-semibold
          ${
            dark
              ? "text-white"
              : "text-[var(--text-primary)]"
          }
        `}
      >
        {title}
      </h3>

      <div
        className={`
          mt-5
          text-base
          leading-8
          ${
            dark
              ? "text-stone-300"
              : "text-[var(--text-secondary)]"
          }
        `}
      >
        {children}
      </div>
    </div>
  );
}