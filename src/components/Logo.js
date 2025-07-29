import React from 'react';

const Logo = ({ size = 'default', showTagline = true, className = '' }) => {
  const sizeClasses = {
    small: 'h-8',
    default: 'h-12',
    large: 'h-16',
    xl: 'h-24'
  };

  const taglineSizeClasses = {
    small: 'text-xs',
    default: 'text-sm',
    large: 'text-base',
    xl: 'text-lg'
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Main Logo Image */}
      <div className="flex items-center">
        <img 
          src="/logo.png" 
          alt="Trippcard Logo" 
          className={`${sizeClasses[size]} w-auto object-contain`}
        />
      </div>
      
      {/* Tagline with subtle texture effect */}
      {showTagline && (
        <div className={`text-accent font-tagline font-light italic ${taglineSizeClasses[size]} mt-2 tracking-wider opacity-90`}>
          EXPLORE. EXPERIENCE. ENJOY.
        </div>
      )}
    </div>
  );
};

export default Logo; 