import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'forest' | 'ghost' | 'ghost-light' | 'paper' | 'lime' | 'red' | 'navy';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
}

export default function Button({
  children,
  href,
  variant = 'forest',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-body rounded-pill transition-all duration-250 cursor-pointer select-none no-underline font-medium';

  const sizeStyles = {
    sm: 'text-13 px-4 py-2 gap-2 min-h-[36px]',
    md: 'text-15 px-6 py-3 gap-2.5 min-h-[44px]',
    lg: 'text-17 px-8 py-4 gap-3 min-h-[52px]',
  };

  const variantStyles = {
    forest:
      'bg-[#062B70] text-white hover:bg-[#164A9C] active:bg-[#DCE8F7] shadow-sm',
    ghost:
      'bg-transparent text-[#101828] border border-[#D9E2EF] hover:border-[#164A9C] hover:text-[#101828] hover:bg-[#164A9C]',
    'ghost-light':
      'bg-transparent text-paper border border-paper/30 hover:border-paper hover:bg-paper/10',
    paper:
      'bg-paper text-[#101828] border border-paper hover:bg-paper-secondary hover:border-paper-secondary',
    lime:
      'bg-[#062B70] text-[#101828] hover:bg-[#164A9C] active:bg-[#DCE8F7] shadow-sm',
    red:
      'bg-[#062B70] text-[#101828] hover:bg-[#164A9C] active:bg-[#DCE8F7] shadow-sm',
    navy:
      'bg-[#062B70] text-paper hover:bg-[#062B70] active:bg-[#062B70] shadow-sm',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
    disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
  } ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClasses}
          aria-label={ariaLabel}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
