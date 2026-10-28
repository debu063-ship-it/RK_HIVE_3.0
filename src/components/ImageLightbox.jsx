import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

export default function ImageLightbox({ imageSrc, caption, onClose }) {
  if (!imageSrc) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-[#050507]/95 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close image viewer"
        >
          <X className="w-6 h-6" />
        </motion.button>

        <motion.div
          initial={{ scale: 0.88, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 15 }}
          transition={{ type: 'spring', damping: 28, stiffness: 380 }}
          className="relative z-10 max-w-5xl max-h-[85vh] flex flex-col items-center ios-squircle p-4 sm:p-6"
        >
          <img
            src={imageSrc}
            alt={caption || 'RK HIVE Exhibition Visual'}
            className="w-full h-auto max-h-[70vh] object-contain rounded-2xl"
          />
          {caption && (
            <p className="mt-4 text-center font-editorial text-base sm:text-lg font-bold tracking-wide text-white">
              {caption}
            </p>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
