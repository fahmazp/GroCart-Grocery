import React, { useState, useEffect } from "react";

const AnimatedNumbers = ({ startNumber = 0, targetNumber = 100, duration = 2000, label = "Items" }) => {
  const [currentNumber, setCurrentNumber] = useState(startNumber);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const startTime = Date.now();

    const animateNumber = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing for smoothness
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startNumber + (targetNumber - startNumber) * easeOutCubic);

      setCurrentNumber(current);

      if (progress < 1) {
        requestAnimationFrame(animateNumber);
      } else {
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animateNumber);
  }, [startNumber, targetNumber, duration]);

  return (
    <div className="text-center mb-6">
      <div
        className={`relative inline-block transition-transform duration-300 ${
          isAnimating ? "scale-110" : "scale-100"
        }`}
      >
        {/* Outlined number */}
        <span
          className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text 
                     bg-gradient-to-b from-white to-green-100"
          style={{
            WebkitTextStroke: "2px rgba(255, 255, 255, 0.7)",
            textShadow: "0 0 15px rgba(34, 197, 94, 0.4)",
          }}
        >
          {currentNumber}
        </span>

        {/* Glow behind */}
        <div className="absolute inset-0 text-5xl md:text-6xl font-extrabold text-white opacity-20 blur-sm">
          {currentNumber}
        </div>
      </div>

      <div className="mt-2 text-sm md:text-base font-medium tracking-wide text-white/80">
        {label}
      </div>
    </div>
  );
};

export default AnimatedNumbers;
