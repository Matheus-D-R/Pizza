
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { PIZZARIA_DATA } from '../constants';

const Location: React.FC = () => {
  return (
    <section id="localizacao" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-display mb-8">ONDE A <span className="text-red-600">MAGIA</span> ACONTECE</h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-red-600/10 p-4 rounded-2xl text-red-600">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1 uppercase tracking-tight">Endereço</h4>
                <p className="text-stone-400">{PIZZARIA_DATA.address}</p>
                <p className="text-stone-500 text-sm mt-1">Ilha Solteira - SP</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-600/10 p-4 rounded-2xl text-red-600">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1 uppercase tracking-tight">Contato</h4>
                <p className="text-stone-400">{PIZZARIA_DATA.phone}</p>
                <p className="text-stone-500 text-sm mt-1">WhatsApp e Telefone</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="#" className="bg-stone-900 p-4 rounded-full text-stone-400 hover:text-white transition-all hover:bg-red-600">
                <Instagram size={24} />
              </a>
              <a href="#" className="bg-stone-900 p-4 rounded-full text-stone-400 hover:text-white transition-all hover:bg-red-600">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.a 
          href={PIZZARIA_DATA.googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden border border-white/10 group block cursor-pointer"
        >
          <div className="absolute inset-0 bg-stone-800 flex items-center justify-center">
             <img 
               src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" 
               alt="Map placeholder" 
               className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
             />
             <div className="absolute bg-red-600 text-white px-8 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 transform group-hover:scale-110 transition-transform">
                <MapPin size={20} />
                ABRIR NO GOOGLE MAPS
             </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default Location;
