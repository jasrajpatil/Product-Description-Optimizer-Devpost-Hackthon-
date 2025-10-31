
import React, { useState } from 'react';
import { AnalysisResult, Variation, Tone, Audience, Framework } from '../types';
import { analyzeDescription } from '../services/geminiService';
import { RadialGauge } from './RadialGauge';
import { PreviewModal } from './PreviewModal';
import { BrainCircuitIcon, WarningIcon, LightbulbIcon, StarIcon, CopyIcon, CheckIcon } from './Icons';
import { motion, AnimatePresence } from 'framer-motion';

const SkeletonLoader = () => (
    <div className="space-y-6 animate-pulse">
        <div className="flex justify-center">
            <div className="w-40 h-40 bg-slate-200 rounded-full"></div>
        </div>
        <div className="space-y-3">
            <div className="h-4 bg-slate-200 rounded w-1/3 mx-auto"></div>
            <div className="h-4 bg-slate-200 rounded w-full"></div>
            <div className="h-4 bg-slate-200 rounded w-4/5"></div>
        </div>
    </div>
);

const CustomizationToolbar = ({ tone, setTone, audience, setAudience, framework, setFramework }) => (
    <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl bg-white/80 backdrop-blur-2xl border border-slate-200 rounded-2xl shadow-2xl p-4 z-40"
    >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Target Audience</label>
                <select value={audience} onChange={e => setAudience(e.target.value)} className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 focus:ring-2 focus:ring-purple-500 focus:outline-none">
                    <option>Budget-Conscious</option>
                    <option>Luxury</option>
                    <option>Impulse Buyers</option>
                    <option>Researchers</option>
                </select>
            </div>
            <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Tone: <span className="font-bold text-purple-500">{tone}</span></label>
                <div className="flex items-center space-x-2 text-xs text-slate-500">
                    <span>Rational</span>
                    <input type="range" min="0" max="2" step="1" value={['Rational', 'Balanced', 'Emotional'].indexOf(tone)} onChange={e => setTone(['Rational', 'Balanced', 'Emotional'][e.target.value])} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-500"/>
                    <span>Emotional</span>
                </div>
            </div>
            <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Framework</label>
                 <select value={framework} onChange={e => setFramework(e.target.value)} className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 focus:ring-2 focus:ring-purple-500 focus:outline-none">
                    <option>AIDA</option>
                    <option>PAS</option>
                    <option>FAB</option>
                    <option>4Ps</option>
                </select>
            </div>
        </div>
    </motion.div>
);


export const Optimizer: React.FC = () => {
  const [productName, setProductName] = useState('Wireless Earbuds Pro');
  const [category, setCategory] = useState('Electronics');
  const [description, setDescription] = useState('Our new Wireless Earbuds Pro have Bluetooth 5.2, a 24-hour battery, and are IPX7 waterproof. They come with a charging case and multiple ear tip sizes. Buy now.');
  
  const [tone, setTone] = useState<Tone>('Balanced');
  const [audience, setAudience] = useState<Audience>('Budget-Conscious');
  const [framework, setFramework] = useState<Framework>('AIDA');

  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copiedVariation, setCopiedVariation] = useState<string | null>(null);
  const [previewVariation, setPreviewVariation] = useState<Variation | null>(null);

  const handleAnalyze = async () => {
    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);
    try {
      const result = await analyzeDescription(productName, category, description, audience, tone, framework);
      setAnalysisResult(result);
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleCopy = (description: string, title: string) => {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(description).then(() => {
            setCopiedVariation(title);
            setTimeout(() => setCopiedVariation(null), 2000);
        });
    }
  };

  const bestVariation = analysisResult?.variations.reduce((prev, current) => (prev.score > current.score) ? prev : current);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto pb-32" // Added padding-bottom for toolbar
    >
      <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Product Optimizer</h1>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <motion.div layout className="lg:col-span-2 space-y-6 bg-white border border-slate-200 rounded-2xl p-6 self-start shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900">Original Product Info</h2>
          <div>
            <label htmlFor="productName" className="block text-sm font-medium text-slate-500 mb-2">Product Name</label>
            <input type="text" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:ring-2 focus:ring-purple-500 focus:outline-none"/>
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-slate-500 mb-2">Category</label>
            <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:ring-2 focus:ring-purple-500 focus:outline-none"/>
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-slate-500 mb-2">Current Description</label>
            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows={8} className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"></textarea>
          </div>
          <motion.button 
            onClick={handleAnalyze} 
            disabled={isLoading}
            className="w-full text-white font-semibold py-3 px-6 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2 shadow-[0_8px_20px_rgba(139,92,246,0.25)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? ( <> <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}> <BrainCircuitIcon className="w-6 h-6" /> </motion.div> <span>Analyzing...</span> </> ) : ( <span>Analyze</span> )}
          </motion.button>
        </motion.div>

        <motion.div layout className="lg:col-span-3 space-y-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 self-start shadow-lg min-h-[400px]">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">AI Analysis</h2>
                <AnimatePresence mode="wait">
                {isLoading ? ( <motion.div key="loader" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}> <SkeletonLoader /> </motion.div>
                ) : error ? ( <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center text-red-500 p-8"> <p><strong>Error:</strong> {error}</p> </motion.div>
                ) : analysisResult ? (
                    <motion.div key="result" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <div className="flex justify-center mb-6"> <RadialGauge score={analysisResult.overallScore} /> </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg font-semibold text-amber-600 flex items-center mb-2"><WarningIcon className="w-5 h-5 mr-2"/> Weaknesses</h3>
                                <ul className="space-y-2 list-disc list-inside text-slate-600 text-sm"> {analysisResult.weaknesses.map((item, i) => <motion.li key={i} initial={{opacity: 0, x: -10}} animate={{opacity:1, x:0}} transition={{delay: i*0.1}}>{item}</motion.li>)} </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-green-600 flex items-center mb-2"><LightbulbIcon className="w-5 h-5 mr-2"/> Opportunities</h3>
                                <ul className="space-y-2 list-disc list-inside text-slate-600 text-sm"> {analysisResult.opportunities.map((item, i) => <motion.li key={i} initial={{opacity: 0, x: -10}} animate={{opacity:1, x:0}} transition={{delay: i*0.1}}>{item}</motion.li>)} </ul>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <div className="text-center text-slate-500 pt-16 h-full flex flex-col items-center justify-center">
                        <BrainCircuitIcon className="w-16 h-16 text-purple-500/20 mb-4" />
                        <p>Customize your optimization settings below and click "Analyze" to see the magic happen.</p>
                    </div>
                )}
                </AnimatePresence>
            </div>
            
            <AnimatePresence>
            {analysisResult && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-4" >
                    <h2 className="text-2xl font-bold text-slate-900">AI-Optimized Variations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {analysisResult.variations.map((v, i) => (
                            <motion.div key={v.title} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: i * 0.15 }} whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }} className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col relative shadow-lg" >
                                {v.title === bestVariation?.title && <div className="absolute top-3 right-3 bg-amber-100 text-amber-600 p-1.5 rounded-full"> <StarIcon className="w-5 h-5 fill-current"/> </div>}
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="font-bold text-lg text-slate-900">{v.title}</h4>
                                    <div className="font-mono font-bold text-xl" style={{color: v.score > 70 ? '#10B981' : v.score > 40 ? '#F59E0B' : '#EF4444'}}>{v.score}</div>
                                </div>
                                <p className="text-sm text-slate-500 mb-4 h-24 overflow-hidden relative"> {v.description} <span className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent"></span> </p>
                                <div className="mt-auto flex justify-between items-center">
                                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">{v.framework}</span>
                                    <div className="flex items-center space-x-4">
                                        <button onClick={() => handleCopy(v.description, v.title)} className="text-slate-400 hover:text-slate-800 transition-colors disabled:opacity-50" title={copiedVariation === v.title ? "Copied!" : "Copy to clipboard"} disabled={copiedVariation === v.title} >
                                            {copiedVariation === v.title ? ( <CheckIcon className="w-4 h-4 text-green-500" /> ) : ( <CopyIcon className="w-4 h-4" /> )}
                                        </button>
                                        <button onClick={() => setPreviewVariation(v)} className="text-sm font-semibold text-purple-600 hover:text-purple-500 transition-colors" > Preview </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </motion.div>
      </div>

      <CustomizationToolbar
        tone={tone} setTone={setTone}
        audience={audience} setAudience={setAudience}
        framework={framework} setFramework={setFramework}
      />
      <PreviewModal variation={previewVariation} onClose={() => setPreviewVariation(null)} />
    </motion.div>
  );
};