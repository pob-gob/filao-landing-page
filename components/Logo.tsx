import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-filao-marine';
  const dotColor = variant === 'light' ? 'text-filao-light' : 'text-filao-marine';
  
  return (
    <div className={`flex items-center gap-2 font-bold text-3xl tracking-tight select-none ${className}`}>
      {/* Abstract F representation based on the branding */}
      <div className="relative flex items-center">
        <span className={`${textColor} text-4xl`}>F</span>
        <span className={`absolute top-1/2 -right-1 w-2 h-2 rounded-full ${dotColor} transform -translate-y-1/2 translate-x-1`}></span>
      </div>
      <span className={textColor}>ilao</span>
    </div>
  );
};