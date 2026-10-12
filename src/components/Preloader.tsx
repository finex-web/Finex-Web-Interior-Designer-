import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Quick, elegant reveal without frustrating the visitor
    const timer = setTimeout(() => {
      setIsLoading(false);
      onComplete?.();
    }, 1100);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF8F5] pointer-events-none"
        >
          {/* Subtle Ambient Background Light */}
          <div className="absolute w-72 h-72 rounded-full bg-[#C5A880]/15 blur-3xl pointer-events-none" />

          {/* Luxury Monogram & Brand reveal */}
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.05, opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center text-center relative z-10"
          >
            {/* Architectural Icon Box */}
            <div className="w-16 h-16 rounded-2xl border border-[#C5A880]/50 bg-white shadow-xl flex items-center justify-center mb-4 relative overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C5A880]/20 to-transparent"
              />
              <svg
                className="w-8 h-8 text-[#1C1917]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <path d="M9 22V12h6v10" />
                <path d="M12 2v7" />
              </svg>
            </div>

            <motion.h1
              initial={{ opacity: 0, letterSpacing: '0.2em' }}
              animate={{ opacity: 1, letterSpacing: '0.3em' }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-serif text-2xl font-bold tracking-[0.3em] text-[#1C1917]"
            >
              FINEX
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[10px] uppercase tracking-[0.35em] text-[#A8875C] font-semibold mt-1"
            >
              Interior Designer
            </motion.p>

            {/* Fine loading progress line */}
            <div className="w-32 h-[2px] bg-[#EAE3D2] rounded-full mt-6 overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full h-full bg-gradient-to-r from-[#C5A880] to-[#A8875C]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
