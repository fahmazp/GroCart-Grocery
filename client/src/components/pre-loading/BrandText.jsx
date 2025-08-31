import React from 'react';

const BrandText = ({ isVisible = true }) => {
  return (
    <div className={`text-center mb-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Main brand name */}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-wide">
        Gro<span className="text-green-200">Cart</span>
      </h1>
      
      {/* Tagline */}
      <p className="text-green-100 text-lg md:text-xl font-medium ">
        Fresh Groceries, Delivered Fast
      </p>
      
      {/* Decorative line */}
      <div className="w-24 h-1 bg-white rounded-full mx-auto mt-4 opacity-60"></div>
    </div>
  );
};

export default BrandText;