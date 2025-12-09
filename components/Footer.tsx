import React from 'react';
import { Logo } from './Logo';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-filao-dark text-gray-400 py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <Logo variant="light" className="mb-6" />
            <p className="max-w-sm mb-6 text-gray-400">
              La plateforme collaborative pour simplifier la réponse aux appels d'offres publics et privés des PME françaises.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-filao-coral hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-filao-coral hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-filao-coral hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Produit</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-filao-light transition-colors">Fonctionnalités</a></li>
              <li><a href="#" className="hover:text-filao-light transition-colors">Tarifs</a></li>
              <li><a href="#" className="hover:text-filao-light transition-colors">Roadmap</a></li>
              <li><a href="#" className="hover:text-filao-light transition-colors">Marketplace (2027)</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Légal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-filao-light transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-filao-light transition-colors">CGV</a></li>
              <li><a href="#" className="hover:text-filao-light transition-colors">Confidentialité</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} FILAO. Tous droits réservés.</p>
          <p>Made with love in France 🇫🇷</p>
        </div>
      </div>
    </footer>
  );
};