
import React from 'react';
import { PIZZARIA_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-display mb-2 tracking-widest">PIZZA MASTER</h3>
          <p className="text-stone-500 text-sm">© {new Date().getFullYear()} - Todos os direitos reservados.</p>
        </div>
        
        <div className="flex gap-8 text-sm font-bold text-stone-400">
          <a href="#" className="hover:text-red-500 transition-colors">POLÍTICA DE PRIVACIDADE</a>
          <a href="#" className="hover:text-red-500 transition-colors">TERMOS DE USO</a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-stone-500 text-xs mb-1 uppercase tracking-widest">Desenvolvido com Sabor em</p>
          <p className="font-bold text-white">Ilha Solteira - SP</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
