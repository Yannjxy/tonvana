import BrandLabel from "./BrandLabel";

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  description,
  center = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`
        ${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
      `}
    >
      <BrandLabel>{label}</BrandLabel>

      <h2
        className={`
          mt-5
          font-serif
          text-4xl
          font-semibold
          leading-tight
          md:text-5xl
          ${
            light
              ? "text-white"
              : "text-[var(--text-primary)]"
          }
        `}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`
            mt-8
            text-lg
            leading-8
            ${
              light
                ? "text-stone-300"
                : "text-[var(--text-secondary)]"
            }
          `}
        >
          {description}
        </p>
      )}
    </div>
  );
}