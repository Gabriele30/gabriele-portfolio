import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
};

export function GlassCard({ as: Component = "div", className, ...props }: GlassCardProps) {
  return (
    <Component
      className={cn(
        "rounded-lg border border-white/10 bg-white/[0.045] shadow-soft backdrop-blur-md",
        className
      )}
      {...props}
    />
  );
}
