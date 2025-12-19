
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Menu from './components/Menu';
import PizzaSommelier from './components/PizzaSommelier';
import Location from './components/Location';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyUs />
      <Menu />
      <PizzaSommelier />
      <Location />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
