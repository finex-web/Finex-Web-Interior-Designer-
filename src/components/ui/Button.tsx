import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

export type ButtonVariant = 'primary' | 'secondary' | 'gold' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  disabled,
  children,
  ...props
}) => {
  // Base styling: Strict Flexbox centering, accessible touch targets, rounded-full
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium tracking-wide rounded-full select-none transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A880] disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  // Variant styling tokens
  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      'bg-[#1C1917] hover:bg-[#2C241E] text-white shadow-md hover:shadow-xl border border-transparent shine-effect active:bg-[#141210]',
    secondary:
      'bg-white hover:bg-[#FAF8F5] text-[#1C1917] border border-[#D7CBB5] hover:border-[#C5A880] shadow-2xs hover:shadow-sm active:bg-[#F5F1E9]',
    gold:
      'bg-[#C5A880] hover:bg-[#B8986D] text-[#1C1917] font-semibold shadow-md hover:shadow-xl border border-transparent shine-effect active:bg-[#A9875C]',
    outline:
      'bg-transparent hover:bg-[#FAF8F5] text-[#1C1917] border border-[#C5A880] hover:border-[#A8875C] active:bg-[#F5F1E9]',
    ghost:
      'bg-transparent hover:bg-[#FAF8F5] text-[#57534E] hover:text-[#1C1917] active:bg-[#F5F1E9]',
  };

  // Size styling tokens with guaranteed touch target heights
  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'min-h-[42px] px-4 py-2 text-xs gap-1.5',
    md: 'min-h-[46px] sm:min-h-[48px] px-6 py-2.5 text-xs sm:text-sm gap-2',
    lg: 'min-h-[50px] sm:min-h-[54px] px-7 sm:px-8 py-3.5 text-sm sm:text-base gap-2.5',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <motion.button
      whileHover={disabled ? undefined : { scale: 1.02, y: -1 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="shrink-0 flex items-center justify-center transition-transform group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span className="truncate leading-none">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="shrink-0 flex items-center justify-center transition-transform group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </motion.button>
  );
};
