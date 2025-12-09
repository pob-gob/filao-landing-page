import React from 'react';
import { ArrowRight, Layout, FileText, Users, Target, BarChart3 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-hero">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ACDEDD" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.4,82.2,23.1,70.6,34.2C59,45.3,47.1,53.8,34.4,60.8C21.7,67.8,8.2,73.3,-4.6,81.3C-17.4,89.3,-29.5,99.8,-40.4,94.9C-51.3,90,-61,69.7,-68.6,51.1C-76.2,32.5,-81.7,15.6,-80.6,0.6C-79.5,-14.4,-71.8,-27.5,-61.7,-37.9C-51.6,-48.3,-39.1,-56,-26.8,-64.3C-14.5,-72.6,-2.4,-81.5,10.9,-84.4C24.2,-87.3,48.4,-84.3,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-white">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-filao-light mb-6">
              ✨ La première plateforme tout-en-un
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Vos appels d'offres en toute <span className="text-transparent bg-clip-text bg-gradient-to-r from-filao-light to-white">simplicité.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
              Gagnez vos marchés sans le chaos administratif. Filao centralise vos documents, structure vos groupements et pilote votre réussite grâce à l'IA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-filao-coral text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg shadow-filao-coral/30 flex items-center justify-center gap-2 group">
                Démarrer maintenant
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                Voir la démo
              </button>
            </div>

            <div className="mt-10 flex items-center gap-4 text-sm text-gray-400">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-filao-dark bg-slate-600"></div>
                ))}
              </div>
              <p>Rejoignez +500 experts du BTP et de l'ingénierie</p>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="lg:w-1/2 w-full hidden md:block">
            <div className="relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-2 shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500">
              <div className="bg-slate-50 rounded-xl overflow-hidden shadow-inner border border-slate-200 aspect-[4/3] flex flex-col">
                {/* Fake UI Header */}
                <div className="h-12 border-b border-slate-200 bg-white flex items-center px-4 justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="h-2 w-32 bg-slate-100 rounded-full"></div>
                </div>
                {/* Fake UI Body */}
                <div className="flex-1 p-6 flex gap-6 bg-slate-50">
                  {/* Sidebar */}
                  <div className="w-16 hidden sm:flex flex-col gap-4 items-center pt-2">
                      <div className="w-8 h-8 rounded-lg bg-filao-dark/10 text-filao-dark flex items-center justify-center"><Layout size={16}/></div>
                      <div className="w-8 h-8 rounded-lg text-slate-400 flex items-center justify-center"><FileText size={16}/></div>
                      <div className="w-8 h-8 rounded-lg text-slate-400 flex items-center justify-center"><Users size={16}/></div>
                  </div>
                  {/* Main Content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex justify-between items-end mb-6">
                      <div>
                        <div className="h-2 w-20 bg-slate-200 rounded mb-2"></div>
                        <div className="h-6 w-48 bg-filao-dark rounded-lg"></div>
                      </div>
                      <div className="h-8 w-24 bg-filao-coral rounded-lg opacity-80"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                          <div className="flex justify-between mb-2">
                            <div className="h-8 w-8 rounded bg-filao-light/30 text-filao-atomic flex items-center justify-center"><Target size={16}/></div>
                            <span className="text-xs text-green-500 font-bold">+12%</span>
                          </div>
                          <div className="h-3 w-16 bg-slate-100 rounded mb-1"></div>
                          <div className="h-5 w-24 bg-slate-800 rounded"></div>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                          <div className="flex justify-between mb-2">
                            <div className="h-8 w-8 rounded bg-filao-coral/10 text-filao-coral flex items-center justify-center"><BarChart3 size={16}/></div>
                            <span className="text-xs text-slate-400">Cette année</span>
                          </div>
                          <div className="h-3 w-16 bg-slate-100 rounded mb-1"></div>
                          <div className="h-5 w-24 bg-slate-800 rounded"></div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm mt-4">
                        <div className="h-3 w-32 bg-slate-200 rounded mb-4"></div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-slate-100"></div>
                            <div className="h-2 w-full bg-slate-100 rounded-full">
                              <div className="h-full w-3/4 bg-filao-atomic rounded-full"></div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-slate-100"></div>
                            <div className="h-2 w-full bg-slate-100 rounded-full">
                              <div className="h-full w-1/2 bg-filao-light rounded-full"></div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};