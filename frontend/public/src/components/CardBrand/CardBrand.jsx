import React from 'react';

const CardBrand = ({ 
  logoSrc, 
  logoAlt = "Brand logo", 
  className = "",
  onClick = () => {}
}) => {
  return (
    <div 
      className={`
        w-20 h-20
        bg-white 
        rounded-xl 
        shadow-md 
        hover:shadow-lg 
        transition-all 
        duration-300 
        cursor-pointer 
        flex 
        items-center 
        justify-center 
        border 
        border-gray-100
        hover:scale-105
        ${className}
      `}
      onClick={onClick}
    >
      {logoSrc ? (
        <img 
          src={logoSrc} 
          alt={logoAlt}
          className="w-8 h-8 object-contain"
        />
      ) : (
        <div className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center">
          <span className="text-gray-400 text-xs">Logo</span>
        </div>
      )}
    </div>
  );
};

export default CardBrand;