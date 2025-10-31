
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Variation } from '../types';
import { CloseIcon } from './Icons';

// A simple syntax highlighter for demonstration purposes.
// It highlights common marketing power words.
const highlightSyntax = (text: string) => {
  const keywords = [
    'guarantee', 'amazing', 'limited', 'unlock', 'discover', 'instantly',
    'exclusive', 'revolutionary', 'bestselling', 'proven', 'secret',
    'effortlessly', 'imagine', 'transform', 'ultimate', 'finally'
  ];
  const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');

  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        keywords.some(keyword => new RegExp(`^${keyword}$`, 'i').test(part)) ? (
          <span key={i} className="text-purple-600 font-semibold">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};

interface PreviewModalProps {
  variation: Variation | null;
  onClose: () => void;
}

export const PreviewModal: React.FC<PreviewModalProps> = ({ variation, onClose }) => {
  return (
    <AnimatePresence>
      {variation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-2xl w-full max-w-2xl shadow-2xl relative max-h-[90vh] flex flex-col"
          >
            <div className="flex justify-between items-start p-6 border-b border-slate-200 flex-shrink-0">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">{variation.title}</h3>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium mt-1 inline-block">{variation.framework}</span>
              </div>
              <div className="font-mono font-bold text-3xl ml-4" style={{color: variation.score > 70 ? '#10B981' : variation.score > 40 ? '#F59E0B' : '#EF4444'}}>
                  {variation.score}
              </div>
              <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 transition-colors">
                  <CloseIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <div className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                {highlightSyntax(variation.description)}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};