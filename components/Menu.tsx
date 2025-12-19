
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PIZZAS } from '../constants';
import { ShoppingCart, Info, X } from 'lucide-react';
import { Pizza } from '../types';

const PizzaCard: React.FC<{ pizza: Pizza, index: number }> = ({ pizza, index }) => {
  const [showIngredients, setShowIngredients] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -8 }}
      className="bg-stone-900 rounded-[3rem] overflow-hidden group border border-white/5 hover:border-red-600/30 hover:shadow-2xl hover:shadow-red-600/10 transition-all duration-300 cursor-default relative"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={pizza.image} 
          alt={pizza.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-6 left-6 bg-red-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg z-10">
          {pizza.tag}
        </div>
        
        {/* Ingredient Overlay */}
        <AnimatePresence>
          {showIngredients && (
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="absolute inset-0 bg-black/95 backdrop-blur-sm z-20 p-8 flex flex-col justify-center items-center text-center"
            >
              <button 
                onClick={() => setShowIngredients(false)}
                className="absolute top-4 right-4 text-stone-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <h4 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-4">Ingredientes Principais</h4>
              <ul className="text-stone-300 text-sm space-y-2">
                {pizza.ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold group-hover:text-red-500 transition-colors uppercase tracking-tight">{pizza.name}</h3>
          <button 
            onClick={() => setShowIngredients(!showIngredients)}
            className="text-stone-500 hover:text-red-500 transition-colors"
            title="Ver Ingredientes"
          >
            <Info size={20} />
          </button>
        </div>
        <p className="text-stone-500 text-sm mb-8 line-clamp-2 leading-relaxed">
          {pizza.description}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xs text-stone-500 font-bold uppercase tracking-tighter">A partir de</span>
            <span className="text-2xl font-display text-white tracking-wider">{pizza.price}</span>
          </div>
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="bg-red-600 hover:bg-red-500 p-4 rounded-2xl text-white shadow-lg shadow-red-600/20 transition-all"
          >
            <ShoppingCart size={22} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Menu: React.FC = () => {
  return (
    <section id="cardapio" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-display mb-4">
              SABORES QUE <span className="text-yellow-400">ENCANTAM</span>
            </h2>
            <p className="text-stone-400">
              Nossos destaques mais pedidos. Cada fatia conta uma história de sabor e tradição.
            </p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-stone-800 px-6 py-2 rounded-full text-xs font-bold tracking-widest text-white/70"
          >
            MAIS DE 30 SABORES DISPONÍVEIS
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PIZZAS.map((pizza, index) => (
            <PizzaCard key={pizza.id} pizza={pizza} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;