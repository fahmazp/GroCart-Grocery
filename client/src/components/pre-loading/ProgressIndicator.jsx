import React, { useState, useEffect } from 'react';

const ProgressIndicator = ({ duration = 4000, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        setIsComplete(true);
        if (onComplete) {
          setTimeout(onComplete, 500);
        }
      } else {
        requestAnimationFrame(updateProgress);
      }
    };
    
    requestAnimationFrame(updateProgress);
  }, [duration, onComplete]);

  return (
    <div className="w-full max-w-xs mx-auto">
      {/* Progress bar container */}
      <div className="relative w-full h-2 bg-green-800 bg-opacity-30 rounded-full overflow-hidden">
        {/* Progress bar fill */}
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-white to-green-100 rounded-full transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
        </div>
        
        {/* Glowing effect */}
        <div 
          className="absolute top-0 left-0 h-full bg-white opacity-20 rounded-full blur-sm transition-all duration-100"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {/* Progress percentage */}
      <div className="text-center mt-3">
        <span className="text-green-100 text-sm font-medium">
          {Math.round(progress)}%
        </span>
        {isComplete && (
          <span className="ml-2 text-white text-sm animate-pulse">
            Ready!
          </span>
        )}
      </div>
    </div>
  );
};

export default ProgressIndicator;