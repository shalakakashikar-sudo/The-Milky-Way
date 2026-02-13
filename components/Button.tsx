
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  disabled = false
}) => {
  const baseStyles = "px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:active:scale-100 uppercase tracking-wider";
  const variants = {
    primary: "bg-[#2D1B0E] text-[#FFFAF3] hover:bg-[#3D2B1F] shadow-lg",
    secondary: "bg-[#FFFAF3] text-[#2D1B0E] border-2 border-[#2D1B0E] hover:bg-pink-50",
    accent: "bg-[#FF1493] text-white hover:bg-[#FF85A1] hover:text-[#2D1B0E] shadow-strawberry"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
