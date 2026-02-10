interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-14 text-center lg:mb-16">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        <span className="font-mono text-xs tracking-widest text-primary uppercase">
          {label}
        </span>
      </div>
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
