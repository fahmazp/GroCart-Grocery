import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';

import { useInView } from 'motion/react';
import { SlidingNumber } from '../ui/sliding-number';

export function SlidingNumberInView({ target = 100, suffix = '', speed = 50 }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView || value >= target) return;

    const interval = setInterval(() => {
      setValue((prev) => {
        if (prev >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + 1;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [isInView, value, target, speed]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 0, fontSize: '24px' }}
      animate={{ y: 0, fontSize: '24px' }}
      transition={{
        ease: [1, 0, 0.35, 0.95],
        duration: 1.5,
        delay: .3,
      }}
      className="leading-none text-center"
    >
      <div className="inline-flex items-center gap-1 font-mono font-bold text-xl lg:text-2xl">
        <SlidingNumber value={value} />
        {suffix}
      </div>
    </motion.div>
  );
}
