interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "light" | "dark";
}

export default function Section({
  children,
  className = "",
  id,
  background = "white",
}: SectionProps) {
  const backgroundClass =
    background === "white"
      ? "bg-white"
      : background === "light"
        ? "bg-[var(--background)]"
        : "bg-[var(--brand-green)] text-white";

  return (
    <section
      id={id}
      className={`
        py-24
        md:py-32
        ${backgroundClass}
        ${className}
      `}
    >
      {children}
    </section>
  );
}