import { forwardRef, type InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = '', id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
    return (
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-pearl-700 dark:text-pearl-300"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={`
            w-full rounded-xl border px-4 py-3
            text-base text-pearl-900 dark:text-dark-text
            bg-pearl-0 dark:bg-dark-surface
            border-pearl-200 dark:border-dark-border
            placeholder:text-pearl-400 dark:placeholder:text-dark-muted
            transition-all duration-[120ms]
            hover:border-pearl-300 dark:hover:border-dark-muted
            focus:border-teal-400 focus:ring-3 focus:ring-teal-400/20
            focus:outline-none
            min-h-[44px]
            ${error ? 'border-danger-border bg-danger-bg/30' : ''}
            ${className}
          `}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="text-sm text-danger-text" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${inputId}-helper`} className="text-sm text-pearl-500 dark:text-dark-muted">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
