import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  arrow?: boolean;
}

export default function PrimaryButton({
  href,
  children,
  className = "",
  arrow = false,
}: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className={`
        group
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-full
        bg-[var(--brand-gold)]
        px-8
        py-4
        text-base
        font-medium
        text-white
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:bg-[var(--brand-gold-dark)]
        hover:shadow-lg
        active:translate-y-0
        focus:outline-none
        focus:ring-2
        focus:ring-[var(--brand-gold)]
        focus:ring-offset-2
        ${className}
      `}
    >
      <span>{children}</span>

      {arrow && (
        <ArrowRight
          size={18}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      )}
    </Link>
  );
}