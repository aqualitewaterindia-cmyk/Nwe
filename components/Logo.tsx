
import React from 'react';

export const BharatLogo: React.FC<{ size?: number; className?: string }> = ({ size = 40, className = "" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Circle - Navy Blue for trust and government feel */}
      <circle cx="50" cy="50" r="48" fill="#1A237E" />
      
      {/* Shield Shape */}
      <path 
        d="M50 15C50 15 25 25 25 45C25 65 50 85 50 85C50 85 75 65 75 45C75 25 50 15 50 15Z" 
        fill="white" 
      />
      
      {/* Tricolor Accents inside the shield */}
      <path d="M25 40H75V45C75 47.5 73.5 50.5 71.5 53H28.5C26.5 50.5 25 47.5 25 45V40Z" fill="#F4C430" opacity="0.2" />
      
      {/* Phone Icon */}
      <path 
        d="M40 35H44C45.1 35 46 35.9 46 37V42C46 43.1 45.1 44 44 44H41.5C41.5 44 41.5 51 48.5 51V48.5C48.5 47.4 49.4 46.5 50.5 46.5H55.5C56.6 46.5 57.5 47.4 57.5 48.5V52.5C57.5 53.6 56.6 54.5 55.5 54.5H52C42.5 54.5 35 47 35 37.5V37C35 35.9 35.9 35 37 35H40Z" 
        fill="#FF6D00" 
        transform="translate(4, 5) scale(1.1)"
      />
      
      {/* 112 Text - Critical number identification */}
      <text 
        x="50" 
        y="72" 
        textAnchor="middle" 
        fill="#1A237E" 
        style={{ fontSize: '14px', fontWeight: 'bold', fontFamily: 'Arial' }}
      >
        112
      </text>
    </svg>
  );
};
