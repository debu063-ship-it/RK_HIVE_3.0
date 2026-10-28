import React from 'react';
import { motion } from 'framer-motion';

/**
 * IosCard: Frosted squircle glass container with specular rim lighting
 * and authentic Apple iOS spring dynamics on hover/tap.
 */
export default function IosCard({
  children,
  className = '',
  onClick,
  hoverable = true,
  glowColor = 'white', // 'white', 'rose', or 'cerulean'
  ...props
}) {
  const isInteractive = Boolean(onClick) || hoverable;

  return (
    <motion.div
      onClick={onClick}
      whileHover={isInteractive ? { scale: 1.015, y: -2 } : undefined}
      whileTap={isInteractive ? { scale: 0.97 } : undefined}
      transition={{ type: 'spring', stiffness: 400, damping: 26 }}
      className={`ios-squircle relative group ${onClick ? 'cursor-pointer' : ''} ${className}`}
      {...props}
    >
      {/* Top ambient diffusion glow */}
      <div
        className={`absolute -top-7 left-1/2 -translate-x-1/2 w-3/4 h-14 blur-2xl pointer-events-none rounded-full transition-opacity duration-300 z-10 ${
          glowColor === 'rose'
            ? 'bg-[#FF1376]/25 group-hover:bg-[#FF1376]/35'
            : glowColor === 'cerulean'
            ? 'bg-cerulean-400/25 group-hover:bg-cerulean-400/35'
            : 'bg-white/20 group-hover:bg-white/30'
        }`}
      />

      {/* Surface content wrapper */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}
