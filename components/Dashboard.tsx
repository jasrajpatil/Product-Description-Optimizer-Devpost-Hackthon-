
import React from 'react';
import { MetricCard } from './MetricCard';
import { RadialGauge } from './RadialGauge';
import { RocketIcon, PlusIcon } from './Icons';
import { Page } from '../types';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const revenueData = [
  { name: 'Jan', revenue: 4000 }, { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 5000 }, { name: 'Apr', revenue: 4800 },
  { name: 'May', revenue: 6000 }, { name: 'Jun', revenue: 5800 },
  { name: 'Jul', revenue: 7200 }, { name: 'Aug', revenue: 7800 },
  { name: 'Sep', revenue: 8200 }, { name: 'Oct', revenue: 9500 },
  { name: 'Nov', revenue: 11200 }, { name: 'Dec', revenue: 12847 },
];

const optimizations = [
    { name: 'Wireless Earbuds Pro', from: 42, to: 87, lift: 107, time: '2 hours ago' },
    { name: 'Luxury Smartwatch', from: 65, to: 92, lift: 41, time: '1 day ago' },
    { name: 'Ergonomic Office Chair', from: 55, to: 78, lift: 42, time: '3 days ago' },
]

interface DashboardProps {
  setPage: (page: Page) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ setPage }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto"
    >
        <div className="flex flex-col sm:flex-row justify-between items-start mb-8">
            <div>
                <h1 className="text-4xl font-extrabold text-slate-900">Dashboard</h1>
                <p className="text-slate-500 mt-2">Welcome back! Here's your performance overview.</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                <motion.button 
                    onClick={() => setPage('optimizer')}
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center space-x-2 bg-white text-slate-700 font-semibold py-2 px-4 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors shadow-sm"
                >
                    <PlusIcon className="w-5 h-5" />
                    <span>Optimize New Product</span>
                </motion.button>
            </div>
        </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard title="Avg. Conversion Score" value="76" suffix="/100" trend="+5.2%">
          <RadialGauge score={76} size={100} strokeWidth={8} />
        </MetricCard>
        <MetricCard title="Est. Revenue Impact" prefix="$" value="12,847" trend="+18.1%">
           <p className="text-sm text-slate-500">This month</p>
        </MetricCard>
        <MetricCard title="Optimizations" value="84" trend="+12 this week">
           <p className="text-sm text-slate-500">Total performed</p>
        </MetricCard>
        <MetricCard title="A/B Tests Running" value="6" trend="2 new">
           <p className="text-sm text-slate-500">Click to view</p>
        </MetricCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Conversion Score Trends</h2>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${Number(value)/1000}k`} />
                <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px' }}/>
                <Area type="monotone" dataKey="revenue" stroke="#A78BFA" fillOpacity={1} fill="url(#colorRevenue)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Recent Optimizations</h2>
            <div className="space-y-4">
            {optimizations.map((opt, i) => (
                <motion.div
                    key={opt.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ scale: 1.02, backgroundColor: '#F8FAFC' }}
                    className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 flex items-center justify-between cursor-pointer"
                >
                    <div className="flex-1">
                        <p className="font-semibold text-sm text-slate-800 truncate">{opt.name}</p>
                        <p className="text-xs text-slate-500">{opt.time}</p>
                    </div>
                    <div className="flex items-center space-x-3 ml-2">
                        <div className="font-mono text-sm text-slate-500">{opt.from} &rarr; <span className="font-bold text-green-600">{opt.to}</span></div>
                        <div className="hidden sm:flex items-center bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full text-xs">
                            <RocketIcon className="w-3 h-3 mr-1" />
                            +{opt.lift}%
                        </div>
                    </div>
                </motion.div>
            ))}
            </div>
        </div>
      </div>
    </motion.div>
  );
};