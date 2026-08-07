import Link from "next/link";

interface SecondaryButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function SecondaryButton({
  href,
  children,
  className = "",
}: SecondaryButtonProps) {
  return (
    <Link
      href={href}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        border
        border-current
        px-8
        py-4
        text-base
        font-medium
        transition-all
        duration-300
        hover:bg-white
        hover:text-stone-900
        ${className}
      `}
    >
      {children}
    </Link>
  );
}