import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  label: string;
};

export const inputControlClass =
  "min-h-12 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm text-white outline-none transition placeholder:text-white/34 focus:border-electric/70 focus:bg-black/40 focus:ring-2 focus:ring-electric/25";

export const fieldLabelClass = "grid gap-2 text-sm font-medium text-white/76";
export const fieldErrorClass = "min-h-5 text-xs font-medium text-[#ff8f8f]";

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, error, id, label, ...props },
  ref
) {
  const fieldId = id ?? props.name;
  const errorId = error && fieldId ? `${fieldId}-error` : undefined;

  return (
    <label className={fieldLabelClass} htmlFor={fieldId}>
      {label}
      <input
        ref={ref}
        id={fieldId}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        className={cn(inputControlClass, error && "border-[#ff6b6b]/70 focus:border-[#ff8f8f]", className)}
        {...props}
      />
      <span id={errorId} className={fieldErrorClass} aria-live="polite">
        {error}
      </span>
    </label>
  );
});
