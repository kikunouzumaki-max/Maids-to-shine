import { type ReactNode } from 'react';

type BadgeVariant = 'teal' | 'cobalt' | 'neutral' | 'success' | 'warning' | 'danger';

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  teal: 'bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
  cobalt: 'bg-cobalt-50 text-cobalt-700 dark:bg-cobalt-900/30 dark:text-cobalt-300',
  neutral: 'bg-pearl-100 text-pearl-700 dark:bg-dark-elevated dark:text-dark-muted',
  success: 'bg-success-bg text-success-text',
  warning: 'bg-warning-bg text-warning-text',
  danger: 'bg-danger-bg text-danger-text',
};

export function Badge({ variant = 'teal', children, className = '' }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1
        px-2.5 py-1 rounded-full
        text-xs font-medium tracking-wide
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
