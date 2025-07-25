import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', light = false }) => {
  return (
    <a href="/" className={`flex items-center ${className}`} aria-label="Go to homepage">
      <img
        src="/favicon.png"
        alt="The Student Spot logo"
        className="h-10 w-10 object-contain"
      />
      <div className={`ml-2 flex flex-col ${light ? 'text-white' : 'text-gray-900'}`}>
        <span className="font-bold text-lg leading-tight">The Student Spot</span>
        <span className="text-xs">Your One Stop Shop For All Things Tech</span>
      </div>
    </a>
  );
};

export default Logo;
