
import React from 'react';
import { motion } from 'framer-motion';
import { ABTest } from '../types';
import { TrophyIcon, PlusIcon, CheckIcon } from './Icons';

const mockABTests: ABTest[] = [
    {
        id: '1', productName: 'Wireless Earbuds Pro', status: 'active',
        original: { cvr: 2.1, visitors: 457 },
        variation: { name: 'Variation B', cvr: 3.4, visitors: 462, isWinner: true },
        progress: 82, significance: 95, daysRemaining: 3
    },
    {
        id: '2', productName: 'Luxury Smartwatch', status: 'active',
        original: { cvr: 4.5, visitors: 1203 },
        variation: { name: 'Variation A', cvr: 4.2, visitors: 1195, isWinner: false },
        progress: 45, significance: 78
    },
    {
        id: '3', productName: 'Ergonomic Office Chair', status: 'completed',
        original: { cvr: 3.8, visitors: 2109 },
        variation: { name: 'Variation C', cvr: 5.1, visitors: 2088, isWinner: true },
        progress: 100, significance: 99
    },
    {
        id: '4', productName: 'Yoga Mat', status: 'draft',
        original: { cvr: 0, visitors: 0 },
        variation: { name: 'Variation A', cvr: 0, visitors: 0, isWinner: false },
        progress: 0, significance: 0
    }
];

const getStatusPill = (status: ABTest['status']) => {
    switch(status) {
        case 'active': return "bg-green-100 text-green-800";
        case 'completed': return "bg-blue-100 text-blue-800";
        case 'draft': return "bg-slate-100 text-slate-800";
    }
}

const ProgressBar: React.FC<{ value: number }> = ({ value }) => (
    <div className="w-full bg-slate-200 rounded-full h-2.5">
        <motion.div
            className="bg-gradient-to-r from-purple-500 to-purple-400 h-2.5 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${value}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
        />
    </div>
);


const ABTestCard: React.FC<{ test: ABTest, index: number }> = ({ test, index }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg space-y-4"
    >
        <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-slate-900">{test.productName}</h3>
            <span className={`px-3 py-1 text-xs font-semibold rounded-full uppercase ${getStatusPill(test.status)}`}>{test.status}</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <p className="text-sm text-slate-500">Original</p>
                <p className="text-2xl font-bold font-mono text-slate-900 mt-1">{test.original.cvr}% <span className="text-lg">CVR</span></p>
                <p className="text-xs text-slate-400">{test.original.visitors} visitors</p>
            </div>
             <div className={`bg-slate-50 border rounded-lg p-4 relative ${test.variation.isWinner ? 'border-green-400/50' : 'border-slate-200'}`}>
                {test.variation.isWinner && <div className="absolute top-2 right-2 text-green-600 bg-green-100 p-1 rounded-full"><CheckIcon className="w-4 h-4"/></div>}
                <p className="text-sm text-slate-500">{test.variation.name}</p>
                <p className="text-2xl font-bold font-mono text-slate-900 mt-1">{test.variation.cvr}% <span className="text-lg">CVR</span></p>
                <p className="text-xs text-slate-400">{test.variation.visitors} visitors</p>
            </div>
        </div>

        <div>
            <div className="flex justify-between items-center text-sm mb-1">
                <span className="text-slate-500">Progress:</span>
                <span className="font-semibold text-slate-900">{test.progress}%</span>
            </div>
            <ProgressBar value={test.progress} />
        </div>
        
        <div className="flex justify-between items-center text-sm text-slate-500 pt-2 border-t border-slate-200">
            <div>
                Significance: <span className={`font-bold ${test.significance >= 95 ? 'text-green-600' : 'text-amber-600'}`}>{test.significance}%</span>
            </div>
            {test.status === 'active' && test.daysRemaining && <span>{test.daysRemaining} days remaining</span>}
            {test.status === 'active' && test.significance >= 95 && (
                <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className="bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg text-sm">Declare Winner</motion.button>
            )}
        </div>
    </motion.div>
);

export const ABTests: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-8">
        <div>
            <h1 className="text-4xl font-extrabold text-slate-900">A/B Tests</h1>
            <p className="text-slate-500 mt-2">Manage and analyze your optimization experiments.</p>
        </div>
        <motion.button 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg mt-4 sm:mt-0 shadow-lg shadow-purple-500/20"
        >
            <PlusIcon className="w-5 h-5" />
            <span>New Test</span>
        </motion.button>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-amber-100/50 to-purple-100/50 border border-slate-200 rounded-2xl p-6 shadow-lg mb-8 flex items-center space-x-4"
      >
        <TrophyIcon className="w-12 h-12 text-amber-500 flex-shrink-0"/>
        <div>
            <h2 className="text-xl font-bold text-amber-900">Best Performer This Month</h2>
            <p className="text-slate-700">"Ergonomic Office Chair" saw a <span className="font-bold text-slate-900">+156% conversion increase!</span></p>
        </div>
      </motion.div>

      <div className="space-y-6">
        {mockABTests.map((test, index) => <ABTestCard key={test.id} test={test} index={index} />)}
      </div>
    </div>
  );
};