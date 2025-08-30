'use client';

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  brandName?: string;
  minDuration?: number;
  onComplete?: () => void;
}

export default function Loader({
  brandName = "Rajeev Kumar",
  minDuration = 2000,
  onComplete,
}: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 text-3xl font-light tracking-wider"
          >
            {brandName}
          </motion.div>

          {/* Scroll wave loader */}
          <div className="flex space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-6 rounded-full bg-primary-medium"
                animate={{
                  scaleY: [0.6, 1.4, 0.6],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Subtext */}
          <motion.p
            className="mt-6 text-base font-light tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Full Stack Developer...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}