import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import Link from 'next/link';

type Variant = 'primary' | 'secondary' | 'whatsapp' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
  external?: never;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  external?: boolean;
  onClick?: () => void;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<Variant, string> = {
  primary:
    'brand-gradient text-white shadow-brand hover:shadow-lg hover:-translate-y-[1px]',
  secondary:
    'bg-pearl-0 dark:bg-dark-surface text-pearl-800 dark:text-dark-text border border-pearl-200 dark:border-dark-border hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 hover:-translate-y-[1px]',
  whatsapp:
    'bg-whatsapp text-white shadow-md hover:shadow-lg hover:-translate-y-[1px]',
  ghost:
    'bg-transparent text-pearl-700 dark:text-pearl-300 hover:bg-pearl-100 dark:hover:bg-dark-elevated',
  outline:
    'bg-transparent border-2 border-teal-400 text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/20',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg gap-1.5',
  md: 'px-6 py-3 text-base rounded-xl gap-2',
  lg: 'px-8 py-4 text-[1.05rem] rounded-xl gap-2.5',
};

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    ...rest
  } = props;

  const classes = `
    inline-flex items-center justify-center font-medium
    transition-all duration-[220ms]
    cursor-pointer select-none
    min-h-[44px]
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `.trim();

  if ('href' in props && props.href) {
    const { href, external, onClick, ...linkRest } = rest as ButtonAsLink;
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          onClick={onClick}
          {...(linkRest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
