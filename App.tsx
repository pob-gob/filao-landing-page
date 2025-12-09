import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProblemSolution } from './components/ProblemSolution';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-filao-light selection:text-filao-dark">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        
        {/* Call To Action Section */}
        <section className="py-24 bg-filao-dark relative overflow-hidden">
          {/* Background Gradient Accent */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-filao-atomic rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-filao-coral rounded-full mix-blend-multiply filter blur-[100px] opacity-10"></div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Prêt à transformer votre taux de transformation ?</h2>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10">
              Rejoignez les entreprises qui ont choisi la simplicité et la performance avec Filao.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button className="bg-filao-coral text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg transform hover:-translate-y-1">
                 Demander une démo gratuite
              </button>
              <button className="bg-transparent border border-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                 Contacter l'équipe
              </button>
            </div>
            <p className="mt-8 text-sm text-slate-400">Pas de carte de crédit requise. Installation rapide.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;