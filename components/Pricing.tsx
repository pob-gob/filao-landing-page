import React from 'react';
import { Check } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: "Essentiel",
    price: "79€",
    period: "/mois",
    description: "Pour les artisans et TPE qui démarrent.",
    features: [
      "1 Utilisateur",
      "3 Appels d'offres simultanés",
      "Gestion documentaire de base",
      "Support email"
    ],
    cta: "Commencer"
  },
  {
    name: "Pro",
    price: "159€",
    period: "/mois",
    description: "Pour les PME actives en croissance.",
    highlight: true,
    features: [
      "3 Utilisateurs",
      "10 Appels d'offres simultanés",
      "Collaboration en groupement",
      "Bibliothèque de contenus IA",
      "Tableaux de bord avancés"
    ],
    cta: "Choisir Pro"
  },
  {
    name: "Entreprise",
    price: "329€",
    period: "/mois",
    description: "Pour les structures intensives.",
    features: [
      "Utilisateurs illimités",
      "Appels d'offres illimités",
      "IA avancée & personnalisée",
      "API & Intégrations",
      "Accompagnement dédié"
    ],
    cta: "Nous contacter"
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-filao-dark relative">
        {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-filao-marine rounded-full mix-blend-multiply filter blur-[100px] opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Des tarifs transparents</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choisissez le plan adapté à votre volume de réponses. Un investissement rentabilisé dès le premier marché remporté.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 flex flex-col relative ${
                tier.highlight 
                  ? 'bg-gradient-to-b from-white to-slate-50 text-filao-dark shadow-2xl scale-105 border-4 border-filao-coral/30 z-10' 
                  : 'bg-white/5 border border-white/10 text-white backdrop-blur-sm hover:bg-white/10 transition-colors'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-filao-coral text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Le plus populaire
                </div>
              )}
              
              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-2 ${tier.highlight ? 'text-filao-marine' : 'text-white'}`}>{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${tier.highlight ? 'text-filao-dark' : 'text-white'}`}>{tier.price}</span>
                  <span className={`text-sm ${tier.highlight ? 'text-gray-500' : 'text-gray-400'}`}>{tier.period}</span>
                </div>
                <p className={`mt-4 text-sm ${tier.highlight ? 'text-gray-600' : 'text-gray-400'}`}>{tier.description}</p>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`rounded-full p-1 ${tier.highlight ? 'bg-filao-light/30 text-filao-marine' : 'bg-white/10 text-filao-coral'}`}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className={`text-sm ${tier.highlight ? 'text-gray-700' : 'text-gray-300'}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                tier.highlight 
                  ? 'bg-filao-coral text-white hover:bg-opacity-90 shadow-lg shadow-filao-coral/20' 
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};