import type React from 'react';
import type { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  className = ''
}) => {
  const baseClasses = 'font-medium py-2 px-8 rounded-md transition-all duration-300 inline-block text-center text-sm uppercase tracking-wider';

  const variantClasses = {
    primary: 'bg-white hover:bg-neutral-200 text-black',
    secondary: 'bg-black hover:bg-neutral-800 text-white border border-neutral-700',
    outline: 'bg-black/20 backdrop-blur-sm hover:bg-white/10 text-white border border-white/40',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
