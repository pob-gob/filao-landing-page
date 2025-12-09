import React from 'react';
import { Shield, CheckCircle, Users, Zap, X } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section id="advantages" className="py-24 bg-filao-cream">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-filao-dark mb-4">Répondre aux appels d'offres ne devrait pas être un calvaire.</h2>
          <p className="text-slate-600 text-lg">Le secteur évolue, vos outils aussi. Passez de la gestion artisanale au pilotage stratégique.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* The Old Way */}
          <div className="space-y-8 opacity-80 hover:opacity-100 transition-opacity">
            <h3 className="text-xl font-bold text-slate-400 uppercase tracking-wider mb-6">Avant Filao</h3>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-4 items-start">
               <div className="p-3 bg-red-50 text-red-500 rounded-lg shrink-0"><X size={20} /></div>
               <div>
                 <h4 className="font-bold text-slate-800 mb-2">Administratif chronophage</h4>
                 <p className="text-sm text-slate-500">Documents dispersés, mises à jour manuelles et risques d'oubli constants.</p>
               </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-4 items-start">
               <div className="p-3 bg-red-50 text-red-500 rounded-lg shrink-0"><X size={20} /></div>
               <div>
                 <h4 className="font-bold text-slate-800 mb-2">Collaboration chaotique</h4>
                 <p className="text-sm text-slate-500">Des centaines d'emails, des versions de fichiers contradictoires.</p>
               </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-4 items-start">
               <div className="p-3 bg-red-50 text-red-500 rounded-lg shrink-0"><X size={20} /></div>
               <div>
                 <h4 className="font-bold text-slate-800 mb-2">Mémoire technique générique</h4>
                 <p className="text-sm text-slate-500">Copier-coller inefficace qui ne répond pas spécifiquement aux enjeux du client.</p>
               </div>
            </div>
          </div>

          {/* The Filao Way */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-filao-atomic/20 to-filao-light/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-filao-dark rounded-3xl p-8 lg:p-10 text-white shadow-2xl">
               <h3 className="text-xl font-bold text-filao-light uppercase tracking-wider mb-8 flex items-center gap-2">
                 <Shield size={20} /> Avec Filao
               </h3>
               
               <div className="space-y-8">
                 <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-full bg-filao-atomic flex items-center justify-center shrink-0">
                     <CheckCircle size={20} className="text-white" />
                   </div>
                   <div>
                     <h4 className="font-bold text-lg mb-1">Centralisation Intelligente</h4>
                     <p className="text-blue-100/80">L'IA détecte les documents requis et identifie ceux qui manquent ou sont obsolètes.</p>
                   </div>
                 </div>

                 <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-full bg-filao-atomic flex items-center justify-center shrink-0">
                     <Users size={20} className="text-white" />
                   </div>
                   <div>
                     <h4 className="font-bold text-lg mb-1">Espace Collaboratif Dédié</h4>
                     <p className="text-blue-100/80">Partagez les tâches, validez les étapes et construisez votre réponse en équipe.</p>
                   </div>
                 </div>

                 <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-full bg-filao-atomic flex items-center justify-center shrink-0">
                     <Zap size={20} className="text-white" />
                   </div>
                   <div>
                     <h4 className="font-bold text-lg mb-1">Rédaction Assistée par IA</h4>
                     <p className="text-blue-100/80">Générez une trame sur-mesure et optimisez vos arguments grâce à l'analyse prédictive.</p>
                   </div>
                 </div>
               </div>

               <button className="mt-10 w-full bg-white text-filao-dark font-bold py-4 rounded-xl hover:bg-filao-light transition-colors">
                 Découvrir la solution
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};