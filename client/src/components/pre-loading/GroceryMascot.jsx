import React from 'react';

const GroceryMascot = ({ isAnimating = true }) => {
  return (
    <div className={`relative w-28 h-28 mx-auto mb-6 ${isAnimating ? 'mascot-bounce' : ''}`}>
      {/* Circular frame with green gradient */}
      <div className="w-full h-full rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-brand-lg flex items-center justify-center">
        {/* Inner circle for mascot */}
        <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-inner">
          {/* Apple mascot character */}
          <div className="relative">
            {/* Apple body */}
            <div className="w-16 h-16 bg-red-500 rounded-full relative">
              {/* Apple highlight */}
              <div className="absolute top-2 left-2 w-4 h-4 bg-red-300 rounded-full opacity-60"></div>
              
              {/* Apple stem */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-amber-700 rounded-full"></div>
              
              {/* Apple leaf */}
              <div className="absolute -top-1 left-1/2 transform translate-x-1 w-3 h-2 bg-green-500 rounded-full rotate-12"></div>
              
              {/* Happy face */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Eyes */}
                  <div className="flex space-x-2 mb-1">
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                  </div>
                  {/* Smile */}
                  <div className="w-4 h-2 border-b-2 border-gray-800 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating particles around mascot */}
      <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-300 rounded-full opacity-60 animate-pulse"></div>
      {/* <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-green-400 rounded-full opacity-40 animate-pulse delay-300"></div> */}
      <div className="absolute top-1/2 -right-4 w-2 h-2 bg-green-200 rounded-full opacity-50 animate-pulse delay-300"></div>
      <div className="absolute -bottom-4 left-2 w-3 h-3 bg-green-200 rounded-full opacity-40 animate-pulse delay-700"></div>
    </div>
  );
};

export default GroceryMascot;