import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = isScrolled 
    ? "text-filao-dark hover:text-filao-atomic transition-colors font-medium" 
    : "text-gray-200 hover:text-white transition-colors font-medium";

  const buttonClass = "bg-filao-coral hover:bg-opacity-90 text-white px-6 py-2.5 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-filao-coral/30";

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Logo variant={isScrolled ? 'dark' : 'light'} />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className={linkClass}>Fonctionnalités</a>
          <a href="#advantages" className={linkClass}>Avantages</a>
          <a href="#about" className={linkClass}>À propos</a>
          <button className={buttonClass}>
            Demander une démo
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? 
            <X size={28} className={isScrolled ? 'text-filao-dark' : 'text-white'} /> : 
            <Menu size={28} className={isScrolled ? 'text-filao-dark' : 'text-white'} />
          }
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white p-6 md:hidden flex flex-col space-y-4 shadow-xl border-t border-gray-100 animate-in slide-in-from-top-5">
          <a href="#features" className="text-gray-600 hover:text-filao-coral py-2" onClick={() => setIsMobileMenuOpen(false)}>Fonctionnalités</a>
          <a href="#advantages" className="text-gray-600 hover:text-filao-coral py-2" onClick={() => setIsMobileMenuOpen(false)}>Avantages</a>
          <a href="#about" className="text-gray-600 hover:text-filao-coral py-2" onClick={() => setIsMobileMenuOpen(false)}>À propos</a>
          <button className="w-full bg-filao-coral text-white py-3 rounded-lg font-bold">
            Demander une démo
          </button>
        </div>
      )}
    </header>
  );
};