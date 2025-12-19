
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, Pizza as PizzaIcon, Loader2 } from 'lucide-react';
import { getPizzaRecommendation } from '../services/geminiService';

const PizzaSommelier: React.FC = () => {
  const [mood, setMood] = useState('');
  const [recommendation, setRecommendation] = useState<{ pizza: string; reason: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!mood.trim()) return;
    setLoading(true);
    const result = await getPizzaRecommendation(mood);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-stone-900 to-black relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-stone-800/50 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Sparkles size={120} />
          </div>

          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-display mb-4">SOMMELIER <span className="text-red-600">IA</span></h2>
            <p className="text-stone-400">Como você está se sentindo hoje? Nossa inteligência artificial vai recomendar a pizza perfeita para o seu humor.</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative">
              <input 
                type="text" 
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="Ex: Estou com muita fome e cansado do trabalho..."
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-lg focus:outline-none focus:border-red-600 transition-colors"
              />
              <button 
                onClick={handleAsk}
                disabled={loading}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-red-600 p-3 rounded-xl hover:bg-red-700 transition-all disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Send size={20} />}
              </button>
            </div>

            <AnimatePresence>
              {recommendation && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-8 bg-red-600/10 border border-red-600/30 p-8 rounded-[2rem] flex flex-col md:flex-row items-center gap-6"
                >
                  <div className="bg-red-600 p-4 rounded-full">
                    <PizzaIcon size={40} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-display text-white mb-2">DICA DO MESTRE: {recommendation.pizza}</h4>
                    <p className="text-stone-300 leading-relaxed italic">"{recommendation.reason}"</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PizzaSommelier;
