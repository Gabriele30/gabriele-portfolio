import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { fieldErrorClass, fieldLabelClass, inputControlClass } from "@/components/ui/Input";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string;
  label: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, error, id, label, ...props },
  ref
) {
  const fieldId = id ?? props.name;
  const errorId = error && fieldId ? `${fieldId}-error` : undefined;

  return (
    <label className={fieldLabelClass} htmlFor={fieldId}>
      {label}
      <textarea
        ref={ref}
        id={fieldId}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        className={cn(
          inputControlClass,
          "min-h-40 resize-y py-3 leading-6",
          error && "border-[#ff6b6b]/70 focus:border-[#ff8f8f]",
          className
        )}
        {...props}
      />
      <span id={errorId} className={fieldErrorClass} aria-live="polite">
        {error}
      </span>
    </label>
  );
});
