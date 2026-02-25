
import React from 'react';
import { SOLUTIONS } from '../constants';
import { Solution } from '../types';

interface InsightPreviewProps {
  onSolutionClick: (item: Solution) => void;
}

const InsightPreview: React.FC<InsightPreviewProps> = ({ onSolutionClick }) => {
  // Use abstract capabilities instead of direct product names
  const capabilities = [
    {
      phase: 'PHASE 01',
      title: 'Cognitive Analysis',
      desc: 'Interprets unstructured data to formulate precise UX strategies.',
      tech: ['NLP', 'Predictive Modeling']
    },
    {
      phase: 'PHASE 02',
      title: 'Generative Synthesis',
      desc: 'Autonomously creates high-fidelity design assets and clean code.',
      tech: ['Stable Diffusion', 'React Agent']
    },
    {
      phase: 'PHASE 03',
      title: 'Adaptive Optimization',
      desc: 'Continuously monitors and refines performance for SEO & conversion.',
      tech: ['Real-time Analytics', 'AEO']
    }
  ];

  return (
    <div className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-6 md:px-12 bg-white overflow-hidden text-black">
      
      {/* Background Grid - Crosshairs */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30"
           style={{
             backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-start gap-12 lg:gap-20">
         
         {/* --- LEFT COLUMN: I-AX PLATFORM Content (Redesigned) --- */}
         <div className="w-full lg:w-5/12 z-20">
            <div className="mb-12">
               <div className="flex items-center gap-3 mb-4">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-blue-600">
                    Integrated Architecture
                  </span>
               </div>
               <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] text-black mb-6">
                  I-AX <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-black">CORE.</span>
               </h2>
               <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed max-w-md border-l-2 border-blue-600 pl-4">
                  A unified engine where intelligence meets creativity. 
                  Our system automates the entire digital value chain through a seamless integration of six specialized agents.
               </p>
            </div>

            {/* Technical Spec List (Replacing Product Grid) */}
            <div className="flex flex-col gap-6">
               {capabilities.map((cap, idx) => (
                  <div 
                    key={idx} 
                    className="group cursor-pointer relative pl-6 md:pl-8 border-l border-gray-200 hover:border-blue-600 transition-colors duration-300"
                    onClick={() => onSolutionClick(SOLUTIONS[0])}
                  >
                     {/* Timeline Dot */}
                     <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-white border-2 border-gray-300 group-hover:border-blue-600 group-hover:bg-blue-600 rounded-full transition-all duration-300"></div>
                     
                     <span className="text-[9px] font-bold tracking-[0.2em] text-gray-400 group-hover:text-blue-500 transition-colors uppercase mb-1 block">
                        {cap.phase}
                     </span>
                     <h3 className="text-2xl font-black uppercase mb-2 group-hover:translate-x-1 transition-transform duration-300">
                        {cap.title}
                     </h3>
                     <p className="text-xs text-gray-500 font-medium leading-relaxed mb-3 max-w-sm">
                        {cap.desc}
                     </p>
                     <div className="flex gap-2">
                        {cap.tech.map((t) => (
                           <span key={t} className="text-[9px] font-mono bg-gray-100 text-gray-600 px-2 py-0.5 uppercase">
                              {t}
                           </span>
                        ))}
                     </div>
                  </div>
               ))}
            </div>

            <div className="mt-12 flex items-center gap-6">
               <button 
                  onClick={() => onSolutionClick(SOLUTIONS[0])} 
                  className="group flex items-center gap-2 text-[10px] font-black tracking-[0.2em] uppercase bg-black text-white px-6 py-3 hover:bg-blue-600 transition-colors"
               >
                  Initialize System <span className="transform group-hover:translate-x-1 transition-transform">→</span>
               </button>
               <div className="text-[9px] font-mono text-gray-400">
                  <span className="block">STATUS: ONLINE</span>
                  <span className="block">LATENCY: 12ms</span>
               </div>
            </div>
         </div>

         {/* --- RIGHT COLUMN: The Diagram (Logic Cube) - Preserving Mobile Fixes --- */}
         <div className="w-full lg:w-7/12 relative lg:sticky lg:top-24 min-h-[400px] md:min-h-[750px] flex items-center justify-center select-none pointer-events-none md:pointer-events-auto">
             
             {/* Diagram Container */}
             <div className="relative w-full max-w-[800px] aspect-square">
                
                {/* SVG Connecting Lines (Circuit Pattern) */}
                <svg className="absolute inset-0 w-full h-full z-0 overflow-visible opacity-30" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet">
                   <path d="M300 300 L 500 200 L 550 150" fill="none" stroke="#94a3b8" strokeWidth="1" className="animate-[dash_3s_linear_infinite]" strokeDasharray="10 10"/>
                   <path d="M300 300 L 100 250 L 50 200" fill="none" stroke="#94a3b8" strokeWidth="1" className="animate-[dash_4s_linear_infinite]" strokeDasharray="10 10"/>
                   <path d="M300 300 L 300 50 L 350 20" fill="none" stroke="#94a3b8" strokeWidth="1" className="animate-[dash_5s_linear_infinite]" strokeDasharray="10 10"/>
                   <path d="M300 300 L 300 550 L 250 580" fill="none" stroke="#94a3b8" strokeWidth="1" className="animate-[dash_3.5s_linear_infinite]" strokeDasharray="10 10"/>
                   <path d="M300 300 L 550 450" fill="none" stroke="#94a3b8" strokeWidth="1" className="animate-[dash_4.5s_linear_infinite]" strokeDasharray="10 10"/>
                   
                   <rect x="50" y="50" width="500" height="500" fill="none" stroke="#e2e8f0" strokeWidth="0.5" className="animate-[spin_60s_linear_infinite]" />
                   <circle cx="300" cy="300" r="280" fill="none" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="4 4" className="animate-[spin_40s_linear_infinite_reverse]" />
                </svg>

                {/* Central Core - THE LOGIC CUBE */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] z-10 flex items-center justify-center perspective-1000">
                   
                   <div className="absolute inset-0 bg-blue-400/20 blur-[100px] rounded-full animate-pulse"></div>
                   
                   <div className="relative w-56 h-56 sm:w-80 sm:h-80 md:w-96 md:h-96">
                      <div className="absolute inset-0 border border-gray-400/50 transform rotate-0 animate-[spin_30s_linear_infinite]">
                         <div className="absolute top-0 left-0 w-3 h-3 bg-gray-400 box-shadow-glow"></div>
                         <div className="absolute bottom-0 right-0 w-3 h-3 bg-gray-400 box-shadow-glow"></div>
                      </div>
                      
                      <div className="absolute inset-8 border border-blue-400/50 transform rotate-45 animate-[spin_20s_linear_infinite_reverse]"></div>
                      <div className="absolute inset-16 border-2 border-black/10 transform rotate-12 animate-[spin_15s_linear_infinite]"></div>

                      <div className="absolute inset-24 bg-gradient-to-br from-blue-600 via-blue-700 to-black shadow-2xl flex items-center justify-center transform rotate-45 overflow-hidden animate-[pulse_4s_ease-in-out_infinite] ring-4 ring-blue-100/50">
                         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent w-full h-[30%] animate-[scan_2s_linear_infinite]"></div>
                         <div className="absolute inset-0 opacity-40" 
                              style={{backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '6px 6px'}}>
                         </div>
                         <div className="text-white text-3xl font-black transform -rotate-45 drop-shadow-lg">AX</div>
                      </div>

                      <div className="absolute -top-20 left-1/2 w-px h-32 bg-gradient-to-b from-transparent to-blue-500 animate-[drop_2s_linear_infinite]"></div>
                      <div className="absolute -bottom-20 left-1/2 w-px h-32 bg-gradient-to-t from-transparent to-blue-500 animate-[drop_2.5s_linear_infinite]"></div>
                      <div className="absolute top-1/2 -left-20 w-32 h-px bg-gradient-to-r from-transparent to-blue-500 animate-[slide_3s_linear_infinite]"></div>
                      <div className="absolute top-1/2 -right-20 w-32 h-px bg-gradient-to-l from-transparent to-blue-500 animate-[slide_2.5s_linear_infinite]"></div>
                   </div>
                </div>

                {/* Floating Nodes - UNIFIED STYLING (Preserved) */}
                <div className="absolute top-[10%] left-[70%] animate-[float_4s_ease-in-out_infinite]">
                   <div className="bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl px-5 py-3 rounded-sm flex items-center gap-2 hover:scale-110 transition-transform">
                      <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                      <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wider whitespace-nowrap">i-Consultant</span>
                   </div>
                </div>

                <div className="absolute top-[45%] left-[80%] md:left-[88%] animate-[float_5s_ease-in-out_infinite_1s]">
                   <div className="bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl px-5 py-3 rounded-sm flex items-center gap-2 hover:scale-110 transition-transform">
                      <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                      <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wider whitespace-nowrap">i-Creative</span>
                   </div>
                </div>

                <div className="absolute top-[75%] left-[10%] animate-[float_4.5s_ease-in-out_infinite_0.5s]">
                   <div className="bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl px-5 py-3 rounded-sm flex items-center gap-2 hover:scale-110 transition-transform">
                      <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                      <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wider whitespace-nowrap">i-Data</span>
                   </div>
                </div>

                <div className="absolute top-[90%] left-[50%] animate-[float_6s_ease-in-out_infinite_2s]">
                   <div className="bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl px-5 py-3 rounded-sm flex items-center gap-2 hover:scale-110 transition-transform">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wider whitespace-nowrap">i-AutoDev</span>
                   </div>
                </div>

                <div className="absolute top-[35%] left-[0%] animate-[float_5.5s_ease-in-out_infinite_1.5s]">
                   <div className="bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl px-5 py-3 rounded-sm flex items-center gap-2 hover:scale-110 transition-transform">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                      <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wider whitespace-nowrap">i-Search</span>
                   </div>
                </div>
                
                <div className="absolute top-[75%] left-[75%] md:left-[80%] animate-[float_4s_ease-in-out_infinite_3s]">
                   <div className="bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl px-5 py-3 rounded-sm flex items-center gap-2 hover:scale-110 transition-transform">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                      <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wider whitespace-nowrap">i-Intelligence</span>
                   </div>
                </div>

             </div>
         </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.02); }
          100% { transform: translateY(0px) scale(1); }
        }
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
        @keyframes drop {
           0% { opacity: 0; transform: translateY(-20px); }
           50% { opacity: 1; }
           100% { opacity: 0; transform: translateY(20px); }
        }
        @keyframes slide {
           0% { opacity: 0; transform: translateX(-20px); }
           50% { opacity: 1; }
           100% { opacity: 0; transform: translateX(20px); }
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </div>
  );
};

export default InsightPreview;
