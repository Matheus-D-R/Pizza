
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { PIZZARIA_DATA } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href={PIZZARIA_DATA.whatsappLink}
      target="_blank"
      className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white p-4 rounded-full shadow-2xl animate-pulse-red transition-transform hover:scale-110 flex items-center justify-center gap-2"
    >
      <MessageCircle size={32} fill="white" />
      <span className="hidden md:inline font-bold pr-2">Peça no WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
