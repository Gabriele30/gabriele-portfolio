import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="mb-3 text-sm font-semibold text-terminal">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-snug text-white sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-white/68 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
