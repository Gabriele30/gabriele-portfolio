import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { fieldErrorClass, fieldLabelClass, inputControlClass } from "@/components/ui/Input";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  error?: string;
  label: string;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { children, className, error, id, label, ...props },
  ref
) {
  const fieldId = id ?? props.name;
  const errorId = error && fieldId ? `${fieldId}-error` : undefined;

  return (
    <label className={fieldLabelClass} htmlFor={fieldId}>
      {label}
      <select
        ref={ref}
        id={fieldId}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        className={cn(inputControlClass, "cursor-pointer", error && "border-[#ff6b6b]/70 focus:border-[#ff8f8f]", className)}
        {...props}
      >
        {children}
      </select>
      <span id={errorId} className={fieldErrorClass} aria-live="polite">
        {error}
      </span>
    </label>
  );
});
