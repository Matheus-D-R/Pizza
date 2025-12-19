
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { PIZZARIA_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
      {/* Background with Zoom Effect */}
      <motion.div 
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=1920" 
          alt="Pizza Derretendo" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="bg-yellow-400 text-black px-4 py-1 rounded-sm font-bold text-sm tracking-widest mb-4 inline-block">
            ILHA SOLTEIRA - SP
          </span>
          <h1 className="text-5xl md:text-8xl font-display leading-tight mb-6">
            A PIZZA QUE <span className="text-red-600 italic">DERRETE</span> NA BOCA 🍕🔥
          </h1>
          <p className="text-lg md:text-xl text-stone-300 mb-8 leading-relaxed">
            Sabor irresistível, ingredientes selecionados e a massa artesanal que você só encontra aqui na Master. Peça agora e sinta a diferença no primeiro pedaço.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={PIZZARIA_DATA.whatsappLink} 
              target="_blank"
              className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-2xl shadow-red-600/20"
            >
              Peça agora pelo WhatsApp
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements Animation */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 hidden lg:block z-30"
      >
        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 max-w-[200px] text-center">
          <div className="text-yellow-400 font-display text-4xl mb-1">45min</div>
          <div className="text-xs font-bold text-stone-400 uppercase tracking-widest">Entrega Média em Ilha</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
