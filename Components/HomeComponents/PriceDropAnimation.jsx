import React, { useState, useEffect } from 'react';


const PriceDropAnimation = ({ originalPrice, salePrice, discount }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <span className={`text-4xl font-bold text-emerald-400 transition-all duration-1000 ${isAnimating ? 'transform scale-110' : ''}`}>
          {salePrice} MAD
        </span>
        {isAnimating && (
          <div className="absolute -top-2 -right-2 text-green-400 animate-bounce text-sm">
            💰
          </div>
        )}
      </div>
      
      <div className="relative">
        <span className={`text-xl text-gray-400 transition-all duration-1000 ${isAnimating ? 'line-through transform rotate-12 opacity-50' : ''}`}>
          {originalPrice} MAD
        </span>
        {isAnimating && (
          <div className="absolute inset-0 bg-red-500/20 rounded transform rotate-12 animate-pulse"></div>
        )}
      </div>
      
      <span className={`bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full font-bold transition-all duration-1000 ${isAnimating ? 'transform scale-110 animate-pulse' : ''}`}>
        -{discount}%
      </span>
    </div>
  );
};
export default PriceDropAnimation;
