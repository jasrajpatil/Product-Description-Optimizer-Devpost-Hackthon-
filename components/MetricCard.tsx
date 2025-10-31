
import React, { useEffect, useRef } from 'react';
// Fix: Replaced `window.FramerMotion` with a direct import from `framer-motion`.
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface MetricCardProps {
  title: string;
  value: string;
  prefix?: string;
  suffix?: string;
  children: React.ReactNode;
  trend?: string;
}

const AnimatedValue = ({ value }: { value: string }) => {
    const numericValue = parseFloat(value.replace(/,/g, ''));
    if (isNaN(numericValue)) {
        return <span>{value}</span>;
    }

    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => {
        return new Intl.NumberFormat('en-US').format(parseFloat(latest.toFixed(0)));
    });

    useEffect(() => {
        const animation = animate(count, numericValue, { duration: 1.5, ease: "easeOut" });
        return animation.stop;
    }, [numericValue, count]);

    return <motion.span>{rounded}</motion.span>;
};


export const MetricCard: React.FC<MetricCardProps> = ({ title, value, prefix, suffix, children, trend }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-lg relative overflow-hidden flex flex-col"
      style={{
        background: 'radial-gradient(circle at top left, rgba(139, 92, 246, 0.05), transparent 40%), white'
      }}
    >
        <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-slate-600">{title}</h3>
            {trend && <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">{trend}</span>}
        </div>
        <div className="mt-4 text-4xl font-bold text-slate-900 flex items-baseline">
            {prefix && <span className="text-2xl text-slate-500 mr-1">{prefix}</span>}
            <span className="font-mono"><AnimatedValue value={value} /></span>
            {suffix && <span className="text-2xl text-slate-500 ml-1">{suffix}</span>}
        </div>
        <div className="flex-grow mt-6 flex items-center justify-center">
            {children}
        </div>
    </motion.div>
  );
};