import React, { useState, useEffect } from 'react';

const LoadingTips = ({ isVisible = true }) => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('opacity-100');

  const groceryTips = [
    "🥬 Fresh organic vegetables delivered to your door",
    "🍎 Seasonal fruits picked at peak ripeness",
    "🥛 Farm-fresh dairy products available daily",
    "🧄 Premium spices and herbs for your recipes"
  ];

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setFadeClass('opacity-0');
      
      setTimeout(() => {
        setCurrentTipIndex((prev) => (prev + 1) % groceryTips?.length);
        setFadeClass('opacity-100');
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible, groceryTips?.length]);

  if (!isVisible) return null;

  return (
    <div className="text-center mb-8 px-4">
      <div className={`transition-opacity duration-300 ${fadeClass}`}>
        <p className="text-green-100 text-sm md:text-base font-medium max-w-md mx-auto leading-relaxed">
          {groceryTips?.[currentTipIndex]}
        </p>
      </div>
      {/* Tip indicator dots */}
      <div className="flex justify-center space-x-1 mt-4">
        {groceryTips?.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentTipIndex 
                ? 'bg-white scale-125' :'bg-green-300 opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingTips;