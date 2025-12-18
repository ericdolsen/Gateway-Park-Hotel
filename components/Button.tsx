import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-none transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brand-800 text-white hover:bg-brand-900 focus:ring-brand-700",
    secondary: "bg-stone-200 text-stone-900 hover:bg-stone-300 focus:ring-stone-400",
    outline: "border-2 border-brand-800 text-brand-800 hover:bg-brand-50 focus:ring-brand-700"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;