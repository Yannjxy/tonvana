interface BrandLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function BrandLabel({
  children,
  className = "",
}: BrandLabelProps) {
  return (
    <p
      className={`
        text-sm
        font-medium
        uppercase
        tracking-[0.45em]
        text-[var(--brand-gold)]
        ${className}
      `}
    >
      {children}
    </p>
  );
}