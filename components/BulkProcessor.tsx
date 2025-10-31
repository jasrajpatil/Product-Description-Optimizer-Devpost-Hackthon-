
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadIcon, CheckIcon, RocketIcon } from './Icons';
import { BulkItem } from '../types';

const mockInitialItems: BulkItem[] = [
    { id: 1, name: "Wireless Earbuds", status: 'completed', scoreBefore: 42, scoreAfter: 87, revenueImpact: 340 },
    { id: 2, name: "Smart Watch", status: 'completed', scoreBefore: 38, scoreAfter: 79, revenueImpact: 210 },
    { id: 3, name: "Gaming Mouse", status: 'processing', scoreBefore: 51 },
    { id: 4, name: "Laptop Stand", status: 'queued' },
    { id: 5, name: "Mechanical Keyboard", status: 'queued' },
    { id: 6, name: "4K Webcam", status: 'queued' },
];

const StatusIcon = ({ status }: { status: BulkItem['status']}) => {
    if (status === 'completed') return <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center"><CheckIcon className="w-3 h-3"/></div>
    if (status === 'processing') return <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center"><div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div></div>
    return <div className="w-5 h-5 bg-slate-200 rounded-full"></div>
}

export const BulkProcessor: React.FC = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [items, setItems] = useState<BulkItem[]>([]);
    
    const processedCount = items.filter(i => i.status === 'completed').length;
    const progress = items.length > 0 ? (processedCount / items.length) * 100 : 0;

    const startProcessing = () => {
        setIsProcessing(true);
        setItems(mockInitialItems);
    }
    
    useEffect(() => {
        if (isProcessing) {
            const interval = setInterval(() => {
                setItems(prevItems => {
                    const processingIndex = prevItems.findIndex(item => item.status === 'processing');
                    if (processingIndex > -1) {
                        const newItems = [...prevItems];
                        newItems[processingIndex] = { ...newItems[processingIndex], status: 'completed', scoreAfter: Math.floor(Math.random() * 20) + 75, revenueImpact: Math.floor(Math.random() * 400) + 50 };
                        
                        const nextQueuedIndex = newItems.findIndex(item => item.status === 'queued');
                        if (nextQueuedIndex > -1) {
                            newItems[nextQueuedIndex] = { ...newItems[nextQueuedIndex], status: 'processing', scoreBefore: Math.floor(Math.random() * 30) + 30 };
                        }
                        return newItems;
                    } else {
                        const queuedIndex = prevItems.findIndex(item => item.status === 'queued');
                        if (queuedIndex > -1) {
                             const newItems = [...prevItems];
                             newItems[queuedIndex] = { ...newItems[queuedIndex], status: 'processing', scoreBefore: Math.floor(Math.random() * 30) + 30 };
                             return newItems;
                        }
                    }
                    
                    clearInterval(interval);
                    return prevItems;
                });
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [isProcessing]);
    

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Bulk Optimizer</h1>
        <p className="text-slate-500 mb-8">Upload a CSV of your products and optimize them all at once.</p>

        <AnimatePresence mode="wait">
        {!isProcessing ? (
            <motion.div 
                key="upload"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={startProcessing}
                className="bg-white border-2 border-dashed border-slate-300 rounded-2xl p-12 text-center cursor-pointer hover:bg-slate-100/50 hover:border-purple-500 transition-all duration-300"
            >
                <UploadIcon className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-slate-900">Drop CSV or Click to Upload</h2>
                <p className="text-slate-500 mt-2">Supports: Shopify, WooCommerce, Amazon. Max 100 products.</p>
                <p className="text-xs text-slate-400 mt-1">(This is a demo, click to start simulated processing)</p>
            </motion.div>
        ) : (
            <motion.div 
                key="processing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg"
            >
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-1 text-slate-900">
                        <h2 className="text-xl font-bold">Processing: {processedCount} / {items.length} products</h2>
                        <span className="font-mono font-semibold">{Math.round(progress)}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5">
                        <motion.div
                            className="bg-gradient-to-r from-purple-500 to-purple-400 h-2.5 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 1, ease: 'linear' }}
                        />
                    </div>
                </div>
                
                <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                    {items.map(item => (
                        <motion.div 
                            key={item.id}
                            layout
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-slate-50 p-3 rounded-lg flex items-center justify-between border border-slate-200"
                        >
                            <div className="flex items-center space-x-3">
                                <StatusIcon status={item.status} />
                                <span className="text-slate-800 font-medium">{item.name}</span>
                            </div>
                            <AnimatePresence mode="wait">
                            <motion.div 
                                key={item.status}
                                initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                                className="flex items-center space-x-4 text-sm"
                            >
                                {item.status === 'completed' && (
                                    <>
                                        <span className="font-mono text-slate-500">{item.scoreBefore} &rarr; <span className="font-bold text-green-600">{item.scoreAfter}</span></span>
                                        <span className="text-green-700 font-semibold hidden sm:inline">Est. +${item.revenueImpact}/mo</span>
                                    </>
                                )}
                                {item.status === 'processing' && <span className="text-blue-600">Optimizing...</span>}
                                {item.status === 'queued' && <span className="text-slate-400">In queue</span>}
                            </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
                
                {progress === 100 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
                    >
                        <div className="text-center sm:text-left">
                            <h3 className="text-lg font-bold text-green-600">Processing Complete!</h3>
                            <p className="text-slate-600">Average improvement: <span className="font-bold text-slate-900">+38 points</span></p>
                        </div>
                        <div className="flex items-center space-x-4">
                             <button className="bg-white text-slate-700 font-semibold py-2 px-4 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors shadow-sm">Download Results CSV</button>
                             <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg shadow-purple-500/20">Start A/B Tests</button>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        )}
        </AnimatePresence>
    </div>
  );
};