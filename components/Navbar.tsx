'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-heading text-2xl text-barber-charcoal">Salon Fadi Asmar</Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-barber-charcoal hover:text-barber-gold transition-colors">Home</Link>
        </div>
        <a href="#location" className="hidden md:block bg-barber-gold text-white font-bold py-2 px-4 hover:bg-opacity-90 transition-all">Visit us in Chouf</a>
        <button
          className="md:hidden text-barber-charcoal focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/" className="text-barber-charcoal hover:text-barber-gold transition-colors">Home</Link>
            <a href="#location" className="bg-barber-gold text-white font-bold py-2 px-4 hover:bg-opacity-90 transition-all text-center">Visit us in Chouf</a>
          </div>
        </div>
      )}
    </nav>
  );
}
