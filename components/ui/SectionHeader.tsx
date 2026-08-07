import BrandLabel from "./BrandLabel";

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignment =
    align === "left"
      ? "text-left"
      : "text-center";

  return (
    <div
      className={`
        ${alignment}
        ${className}
      `}
    >
      {eyebrow && (
        <BrandLabel
          className={
            align === "center"
              ? "justify-center"
              : ""
          }
        >
          {eyebrow}
        </BrandLabel>
      )}

      <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">
          {description}
        </p>
      )}
    </div>
  );
}