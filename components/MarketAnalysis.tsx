import React from 'react';
import { TrendingUp, AlertTriangle } from 'lucide-react';

export const MarketAnalysis: React.FC = () => {
  return (
    <section id="market" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-filao-dark mb-6">
              Les PME ne captent que <span className="text-filao-coral">27%</span> de la valeur des marchés publics.
            </h2>
            <div className="space-y-6 text-gray-600 text-lg">
              <p>
                Le marché est vaste (170 Mds€ en 2023), mais les TPE/PME font face à un mur :
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-red-100 p-1.5 rounded text-red-500 shrink-0">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <span><strong>Complexité administrative :</strong> 70% des dirigeants jugent les procédures trop lourdes et abandonnent.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-red-100 p-1.5 rounded text-red-500 shrink-0">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <span><strong>Isolement :</strong> Difficile de trouver des partenaires de confiance pour répondre aux gros lots en groupement (cotraitance).</span>
                </li>
              </ul>
              <p className="border-l-4 border-filao-cyan pl-4 italic text-filao-dark font-medium py-2">
                « FILAO transforme ce marathon administratif en un processus fluide et collaboratif. »
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-filao-light to-filao-cyan opacity-20 rounded-full filter blur-3xl transform scale-90"></div>
            <div className="relative grid grid-cols-2 gap-6">
              <div className="bg-filao-dark text-white p-6 rounded-2xl shadow-xl transform translate-y-8 hover:transform hover:translate-y-7 transition-transform">
                <div className="text-4xl font-bold mb-2 text-filao-coral">243k</div>
                <div className="text-sm opacity-80">Marchés publics publiés en 2023</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
                <div className="text-4xl font-bold mb-2 text-filao-marine">60%</div>
                <div className="text-sm text-gray-600">Des marchés remportés par des PME (en volume)</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform translate-y-8 hover:shadow-2xl transition-shadow">
                <div className="text-4xl font-bold mb-2 text-filao-marine">47%</div>
                <div className="text-sm text-gray-600">Des dirigeants estiment que la cotraitance est la clé</div>
              </div>
              <div className="bg-filao-coral text-white p-6 rounded-2xl shadow-xl hover:bg-opacity-90 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div className="text-lg font-bold">Potentiel de croissance immense</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};