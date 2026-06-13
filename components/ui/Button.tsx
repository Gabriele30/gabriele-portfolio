import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "border-electric/70 bg-electric text-black shadow-glow hover:border-terminal/70 hover:bg-terminal",
  secondary:
    "border-white/12 bg-white/[0.055] text-white hover:border-electric/60 hover:bg-electric/10",
  ghost: "border-transparent bg-transparent text-white/76 hover:bg-white/[0.06] hover:text-white"
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-electric/70 focus:ring-offset-2 focus:ring-offset-background";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
};

export function ButtonLink({ className, variant = "primary", ...props }: ButtonLinkProps) {
  return <a className={cn(base, variants[variant], className)} {...props} />;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return <button className={cn(base, variants[variant], className)} {...props} />;
}

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  children: ReactNode;
};

export function IconButton({ label, children, className, ...props }: IconButtonProps) {
  return (
    <button
      aria-label={label}
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-md border border-white/10 bg-white/[0.055] text-white transition duration-200 hover:border-electric/60 hover:bg-electric/10 focus:outline-none focus:ring-2 focus:ring-electric/70 focus:ring-offset-2 focus:ring-offset-background",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
