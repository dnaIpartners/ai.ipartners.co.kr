
import React from 'react';
import { Solution } from '../../types';

interface SolutionDetailViewProps {
  solution: Solution;
  onBack: () => void;
  backLabel?: string;
}

const SolutionDetailView: React.FC<SolutionDetailViewProps> = ({ solution, onBack, backLabel = "BACK TO PLATFORM" }) => {
  return (
    <div className="bg-[#050505] text-white min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="mb-12 text-[10px] font-black tracking-[0.3em] uppercase hover:underline flex items-center gap-4 text-gray-400 hover:text-white transition-colors"
        >
          ← {backLabel}
        </button>

        {/* Header */}
        <header className="mb-12 md:mb-16 border-b border-white/20 pb-12">
          <div className="flex items-center gap-4 mb-6">
             <span className="text-xs font-bold tracking-widest uppercase bg-blue-600 text-white px-2 py-1">
               AGENT-{solution.id}
             </span>
             <span className="text-xs font-mono text-gray-400">
               {solution.sub}
             </span>
          </div>
          <h1 className="text-3xl md:text-6xl font-black tracking-tighter leading-[1.1] uppercase">
            {solution.name}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
            {solution.desc}
          </p>
        </header>

        {/* Hero Image */}
        <div className="mb-16 aspect-video bg-gray-900 overflow-hidden border border-white/10">
           <img 
             src={solution.imageUrl} 
             alt={solution.name} 
             className="w-full h-full object-cover opacity-80"
           />
        </div>

        {/* Content Body - Styled for Dark Mode */}
        <article className="prose prose-lg md:prose-xl max-w-none prose-invert prose-headings:font-black prose-headings:tracking-tight prose-p:text-gray-300 prose-p:font-light prose-p:leading-relaxed prose-li:text-gray-300 prose-strong:text-white">
           {/* Rendering HTML content safely */}
           <div dangerouslySetInnerHTML={{ __html: solution.content }} />
        </article>

        {/* Footer / CTA */}
        <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
           <div>
             <span className="text-xs font-black tracking-widest uppercase text-gray-500 block mb-2">Interested in this agent?</span>
             <p className="text-lg font-bold">Apply this solution to your project.</p>
           </div>
           
           <button className="w-full md:w-auto px-8 py-3 border border-white hover:bg-white hover:text-black transition-all text-xs font-bold tracking-widest uppercase">
              Contact Consultant
           </button>
        </div>
      </div>
    </div>
  );
};

export default SolutionDetailView;
