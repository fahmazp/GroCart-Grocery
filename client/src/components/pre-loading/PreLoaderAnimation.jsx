import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GroceryMascot from "./GroceryMascot";
import BrandText from "./BrandText";
import AnimatedNumbers from "./AnimatedNumbers";
import LoadingTips from "./LoadingTips";
import ProgressIndicator from "./ProgressIndicator";


const PreLoaderAnimation = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fake loading progress simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Call parent handler after 300ms delay for smooth transition
          setTimeout(() => onLoadingComplete?.(), 300);
          return 100;
        }
        return prev + 1; // increase speed
      });
    }, 60); // adjust interval speed

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
<AnimatePresence>
      <motion.div
        key="preloader"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 flex flex-col items-center justify-center 
                   bg-gradient-to-br from-green-500 via-green-600 to-green-700 text-white z-50"
      >

        <div className="absolute top-4 left-4 w-10 h-10 md:w-16 md:h-16 border-l-2 border-t-2 border-white opacity-40 rounded-tl-lg" />
        <div className="absolute top-4 right-4 w-10 h-10 md:w-16 md:h-16 border-r-2 border-t-2 border-white opacity-40 rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-10 h-10 md:w-16 md:h-16 border-l-2 border-b-2 border-white opacity-40 rounded-bl-lg" />
        <div className="absolute bottom-4 right-4 w-10 h-10 md:w-16 md:h-16 border-r-2 border-b-2 border-white opacity-40 rounded-br-lg" />

        <GroceryMascot />
        <BrandText />
        <AnimatedNumbers targetNumber={365} label="Days of Freshness" duration={2000} />
        <LoadingTips />
        <ProgressIndicator progress={progress} />
        
      </motion.div>
    </AnimatePresence>
  );
};

export default PreLoaderAnimation;
