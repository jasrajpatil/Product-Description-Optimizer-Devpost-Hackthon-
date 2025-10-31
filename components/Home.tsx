
import React from 'react';
import { motion } from 'framer-motion';
import { Page } from '../types';
import { BrainCircuitIcon, RocketIcon, CheckIcon, QuoteIcon, ShopifyLogo, AmazonLogo, WooCommerceLogo } from './Icons';

interface HomeProps {
  setPage: (page: Page) => void;
}

const FeatureCard = ({ icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay }}
        className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg text-center"
    >
        <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600 rounded-full mx-auto flex items-center justify-center mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-500">{description}</p>
    </motion.div>
);

const TestimonialCard = ({ quote, name, role, image, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay }}
        className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg"
    >
        <QuoteIcon className="w-8 h-8 text-purple-300 mb-4"/>
        <p className="text-slate-700 italic mb-4">"{quote}"</p>
        <div className="flex items-center">
            <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4 border-2 border-purple-200"/>
            <div>
                <p className="font-bold text-slate-900">{name}</p>
                <p className="text-sm text-slate-500">{role}</p>
            </div>
        </div>
    </motion.div>
);


export const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="text-center py-20 px-4" style={{
        background: 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.05), transparent 40%)'
      }}>
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-4"
        >
          Rewrite Descriptions.
          <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-600">Double Conversions.</span>
        </motion.h1>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-8"
        >
            Stop guessing what sells. Use AI trained on high-performing e-commerce copy to analyze, rewrite, and A/B test your product descriptions for maximum revenue.
        </motion.p>
        <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            onClick={() => setPage('optimizer')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-2xl shadow-purple-500/30"
        >
            Optimize Your First Product Free
        </motion.button>
      </section>

      {/* Social Proof */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
            <p className="text-center text-slate-500 font-medium mb-6">Trusted by sellers on the world's largest platforms</p>
            <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: 0.2, staggerChildren: 0.2 }}
                 className="flex justify-center items-center space-x-8 md:space-x-12 text-slate-400"
            >
                <ShopifyLogo className="h-8 transition-colors hover:text-slate-800"/>
                <AmazonLogo className="h-8 transition-colors hover:text-slate-800"/>
                <WooCommerceLogo className="h-8 transition-colors hover:text-slate-800"/>
            </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-extrabold text-slate-900 text-center mb-12">
                A Smarter Way to Sell in 3 Steps
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard 
                    icon={<BrainCircuitIcon className="w-8 h-8"/>} 
                    title="1. AI Analysis" 
                    description="Our AI scores your current description, identifying weaknesses and opportunities based on thousands of winning copy patterns."
                    delay={0.1}
                />
                <FeatureCard 
                    icon={<RocketIcon className="w-8 h-8"/>}
                    title="2. Instant Optimization"
                    description="Generate multiple high-converting variations in seconds using proven copywriting frameworks like AIDA and PAS."
                    delay={0.2}
                />
                <FeatureCard
                    icon={<CheckIcon className="w-8 h-8"/>}
                    title="3. A/B Test & Validate"
                    description="Deploy variations to your store and let real customer data tell you which description makes you the most money."
                    delay={0.3}
                />
            </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-extrabold text-slate-900 text-center mb-12">
                Don't Just Take Our Word For It
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                <TestimonialCard
                    quote="OptimizeAI is a game-changer. We saw a 45% lift in CVR on our hero product in the first two weeks. It's like having a world-class copywriter on staff 24/7."
                    name="Sarah Johnson"
                    role="Founder, Luxe Gadgets"
                    image="https://picsum.photos/seed/sarah/100/100"
                    delay={0.1}
                />
                <TestimonialCard
                    quote="The bulk processor saved us over 100 hours of manual work. The AI suggestions are incredibly insightful and have boosted our sales across the board."
                    name="Mike Chen"
                    role="E-commerce Manager, HomeBody"
                    image="https://picsum.photos/seed/mike/100/100"
                    delay={0.2}
                />
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 text-center" style={{
        background: 'radial-gradient(circle at 50% 100%, rgba(139, 92, 246, 0.05), transparent 40%)'
      }}>
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4"
        >
          Ready to Boost Your Sales?
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto mb-8"
        >
            Start optimizing your product descriptions today and see the difference AI-powered copywriting can make.
        </motion.p>
        <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            onClick={() => setPage('dashboard')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-2xl shadow-purple-500/30"
        >
            Go to Dashboard
        </motion.button>
      </section>
    </div>
  );
};
