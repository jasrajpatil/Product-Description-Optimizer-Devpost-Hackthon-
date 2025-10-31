
import React, { useState } from 'react';
import { Page } from './types';
import { NAV_LINKS } from './constants';
import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';
import { Optimizer } from './components/Optimizer';
import { ABTests } from './components/ABTests';
import { BulkProcessor } from './components/BulkProcessor';
import { Logo } from './components/Icons';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home setPage={setPage} />;
      case 'dashboard':
        return <Dashboard setPage={setPage} />;
      case 'optimizer':
        return <Optimizer />;
      case 'ab_tests':
        return <ABTests />;
      case 'bulk':
        return <BulkProcessor />;
      default:
        return <Home setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200 h-[72px] px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-full max-w-7xl mx-auto">
          <div className="flex items-center space-x-8">
            <button onClick={() => setPage('home')} className="flex items-center space-x-3">
              <Logo className="w-8 h-8"/>
              <span className="text-xl font-bold text-slate-900">OptimizeAI</span>
            </button>
            <div className="hidden md:flex items-center space-x-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => setPage(link.page)}
                  className="text-slate-500 hover:text-slate-900 transition-colors duration-200 relative text-sm font-medium"
                >
                  {link.name}
                  {page === link.page && (
                    <motion.div 
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-purple-400"
                      layoutId="underline"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
             {page === 'home' ? (
                <motion.button 
                    onClick={() => setPage('dashboard')}
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold py-2 px-5 rounded-lg text-sm shadow-lg shadow-purple-500/20"
                >
                    Get Started
                </motion.button>
             ) : (
                <img 
                  src="https://picsum.photos/seed/user/40/40" 
                  alt="User profile" 
                  className="w-9 h-9 rounded-full border-2 border-purple-500"
                />
             )}
          </div>
        </nav>
      </header>
      
      <main>
          <AnimatePresence mode="wait">
              <motion.div
                  key={page}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
              >
                  {renderPage()}
              </motion.div>
          </AnimatePresence>
      </main>
    </div>
  );
};

export default App;