
import React, { useState, useEffect } from 'react';
import { Menu, X, Pizza } from 'lucide-react';
import { PIZZARIA_DATA } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Pizza className="text-red-600 group-hover:rotate-45 transition-transform duration-300" size={32} />
          <span className="text-2xl font-display tracking-wider text-white">PIZZA MASTER</span>
        </div>

        <div className="hidden md:flex gap-8 items-center">
          <a href="#inicio" className="text-sm font-bold uppercase hover:text-red-500 transition-colors">Início</a>
          <a href="#por-que-nos" className="text-sm font-bold uppercase hover:text-red-500 transition-colors">Vantagens</a>
          <a href="#cardapio" className="text-sm font-bold uppercase hover:text-red-500 transition-colors">Cardápio</a>
          <a href="#localizacao" className="text-sm font-bold uppercase hover:text-red-500 transition-colors">Onde Estamos</a>
          <a href={PIZZARIA_DATA.whatsappLink} target="_blank" className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105">PEDIR AGORA</a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <a href="#inicio" onClick={() => setIsOpen(false)} className="text-3xl font-display">INÍCIO</a>
        <a href="#por-que-nos" onClick={() => setIsOpen(false)} className="text-3xl font-display">VANTAGENS</a>
        <a href="#cardapio" onClick={() => setIsOpen(false)} className="text-3xl font-display">CARDÁPIO</a>
        <a href="#localizacao" onClick={() => setIsOpen(false)} className="text-3xl font-display">LOCALIZAÇÃO</a>
        <a href={PIZZARIA_DATA.whatsappLink} target="_blank" className="bg-red-600 px-8 py-3 rounded-full font-bold">WHATSAPP</a>
      </div>
    </nav>
  );
};

export default Navbar;
