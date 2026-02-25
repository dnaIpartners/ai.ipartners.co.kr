
import React from 'react';

const AIWorks: React.FC = () => {
  return (
    <div className="bg-white py-32 px-6 md:px-12 border-b border-black">
      <div className="max-w-[1800px] mx-auto border-4 border-black p-2 md:p-4">
         <div className="bg-black text-green-500 p-8 md:p-20 font-mono relative overflow-hidden group">
            
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
                 style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
            </div>

            <div className="relative z-10">
               <div className="flex justify-between items-start mb-12 border-b border-green-500/30 pb-4">
                  <div className="text-xs md:text-sm">
                     <span className="block">> SYSTEM STATUS: ONLINE</span>
                     <span className="block">> CONNECTED TO: KNOWLEDGE HUB</span>
                  </div>
                  <div className="animate-pulse">● REC</div>
               </div>

               <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-12 text-white mix-blend-difference">
                  KNOWLEDGE <br/> HUB
               </h2>

               <div className="grid md:grid-cols-2 gap-12 items-end">
                  <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-xl">
                     Our experimental lab exploring the boundaries of <span className="text-green-400">Generative AI</span>. 
                     We share prompts, models, and insights for the next generation of creators.
                  </p>
                  
                  <div className="text-right">
                     <button className="bg-green-500 text-black px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors">
                        Enter Database_
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default AIWorks;
