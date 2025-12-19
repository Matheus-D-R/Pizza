
import React from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Wind, Flame, Timer } from 'lucide-react';
import { ADVANTAGES } from '../constants';

const icons: any = {
  UtensilsCrossed,
  Wind,
  Flame,
  Timer
};

const WhyUs: React.FC = () => {
  return (
    <section id="por-que-nos" className="py-24 bg-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display mb-4"
          >
            POR QUE SOMOS A <span className="text-red-600">FAVORITA?</span>
          </motion.h2>
          <p className="text-stone-400 max-w-xl mx-auto">
            Não é só pizza, é uma obra de arte feita com paixão e os melhores segredos da culinária tradicional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ADVANTAGES.map((adv, index) => {
            const IconComponent = icons[adv.icon];
            return (
              <motion.div 
                key={adv.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-black/40 p-8 rounded-3xl border border-white/5 hover:border-red-600/50 transition-all group"
              >
                <div className="bg-red-600/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                  <IconComponent className="text-red-600 group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{adv.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {adv.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
