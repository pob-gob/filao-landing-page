import React from 'react';
import { FileText, Users, PenTool, Layout, Target, BarChart3 } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Gestion Administrative",
    description: "Historisation des versions et détection automatique des pièces manquantes ou périmées.",
    icon: FileText
  },
  {
    title: "Groupements Pertinents",
    description: "Trouvez les partenaires idéaux grâce à notre algorithme de recommandation basé sur les compétences.",
    icon: Users
  },
  {
    title: "Assistant de Rédaction",
    description: "Analyse sémantique du dossier pour structurer un mémoire technique percutant et cohérent.",
    icon: PenTool
  },
  {
    title: "Tableau de Bord",
    description: "Suivez vos taux de réussite, votre chiffre d'affaires prévisionnel et optimisez votre stratégie.",
    icon: BarChart3
  },
  {
    title: "Veille Intelligente",
    description: "Ne manquez aucune opportunité grâce à une analyse fine des plateformes de marché.",
    icon: Target
  },
  {
    title: "Planification",
    description: "Un rétroplanning généré automatiquement pour ne jamais rater une date limite.",
    icon: Layout
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20">
           <span className="text-filao-atomic font-bold tracking-wide uppercase text-sm">Tout-en-un</span>
           <h2 className="text-4xl font-bold text-filao-dark mt-2 mb-6">Une suite complète pour gagner.</h2>
           <div className="h-1 w-20 bg-filao-coral rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default">
              <div className="w-14 h-14 rounded-xl bg-filao-light/20 text-filao-atomic flex items-center justify-center mb-6 group-hover:bg-filao-atomic group-hover:text-white transition-colors">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-filao-dark mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};