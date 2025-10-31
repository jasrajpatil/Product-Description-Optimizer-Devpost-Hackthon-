
import React, { useEffect } from 'react';
// Fix: Replaced `window.FramerMotion` with a direct import from `framer-motion`.
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface RadialGaugeProps {
  score: number;
  size?: number;
  strokeWidth?: number;
}

const AnimatedCounter = ({ to }: { to: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, to, {
      duration: 1.5,
      ease: "easeOut",
    });
    return animation.stop;
  }, [to, count]);

  return <motion.span>{rounded}</motion.span>;
};

export const RadialGauge: React.FC<RadialGaugeProps> = ({ score, size = 160, strokeWidth = 12 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const getColor = (s: number) => {
    if (s < 40) return { main: '#EF4444', glow: 'rgba(239, 68, 68, 0.4)' };
    if (s < 70) return { main: '#F59E0B', glow: 'rgba(245, 158, 11, 0.4)' };
    return { main: '#10B981', glow: 'rgba(16, 185, 129, 0.4)' };
  };

  const { main, glow } = getColor(score);

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e2e8f0"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={main}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - (score / 100) * circumference }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ filter: 'url(#glow)' }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="font-mono text-4xl font-bold text-slate-900">
          <AnimatedCounter to={score} />
        </span>
        <span className="text-sm font-medium text-slate-500">/ 100</span>
      </div>
    </div>
  );
};