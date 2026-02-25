import React from 'react';
import { SOLUTIONS } from '../../constants';
import { Solution } from '../../types';

interface CareersViewProps {
  onSolutionClick?: (solution: Solution) => void;
}

const CareersView: React.FC<CareersViewProps> = ({ onSolutionClick }) => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-[#050505] text-white min-h-screen relative overflow-hidden">
      
      {/* Background Tech Mesh */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{
             backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HERO SECTION --- */}
        <header className="mb-24">
           <div className="flex items-center gap-3 mb-6">
               <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
               </div>
               <span className="text-blue-500 font-bold tracking-[0.2em] text-[10px] uppercase font-mono">
                  System Online: v2.4.0
               </span>
           </div>
           
           <h1 className="text-6xl md:text-[110px] font-black tracking-tighter uppercase leading-[0.85] mb-12">
              i-AX <br/>
              Platform <span className="text-[#333]">©</span>
           </h1>

           <div className="border-t border-white/20 pt-10 grid md:grid-cols-12 gap-8">
               <div className="md:col-span-3 hidden md:block border-l-2 border-blue-600 pl-4">
                   <span className="text-[10px] font-mono text-gray-400 uppercase block mb-1 tracking-widest">Architecture</span>
                   <span className="text-sm font-bold text-white uppercase block tracking-wider">Neural Network</span>
               </div>
               <div className="md:col-span-9">
                   <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-200 break-keep">
                      "아이파트너즈의 AI 방법론은 <span className="font-bold text-white border-b border-blue-600 pb-0.5">'AI-First'</span> 사고방식을 기반으로 웹사이트 구축의 전 과정을 재설계하여, 
                      단순 자동화를 넘어 <span className="text-blue-400 font-bold">창의적 가치</span>와 <span className="text-blue-400 font-bold">완성도</span>를 극대화하는 제작 표준입니다."
                   </p>
               </div>
           </div>
        </header>

        {/* --- INTEGRATED ENGINE SECTION (Redesigned with White Hover) --- */}
        <div className="mb-6 flex justify-between items-end">
            <div>
               <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-2">
                  Integrated <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white">Engine</span>
               </h2>
               <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">
                  6 Core Agents / Modular System Architecture
               </p>
            </div>
            
            {/* Legend / Status */}
            <div className="hidden md:flex gap-6">
               <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span className="text-[9px] font-mono text-gray-400 uppercase">Active</span>
               </div>
               <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-[9px] font-mono text-gray-400 uppercase">Processing</span>
               </div>
            </div>
        </div>

        {/* Engine Grid - Dashboard Style with White Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SOLUTIONS.map((agent, idx) => (
              <div 
                key={agent.id} 
                onClick={() => onSolutionClick && onSolutionClick(agent)}
                className="group relative bg-[#111] border border-white/10 hover:bg-white hover:border-white transition-all duration-500 cursor-pointer min-h-[380px] flex flex-col justify-between overflow-hidden"
              >
                {/* Background Pattern (Visible on dark, fades on light) */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
                     style={{
                         backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)',
                         backgroundSize: '30px 30px'
                     }}>
                </div>
                
                {/* Top: Header & Tech Details */}
                <div className="p-8 relative z-10">
                   <div className="flex justify-between items-start mb-8">
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 px-2 py-1 bg-white/5 rounded border border-white/10 group-hover:bg-black/5 group-hover:border-black/10 transition-colors">
                         <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></span>
                         <span className="text-[9px] font-mono font-bold text-gray-400 group-hover:text-black transition-colors">AGENT-{agent.id}</span>
                      </div>
                      
                      {/* Icon / Arrow */}
                      <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-black/20 flex items-center justify-center transition-colors">
                         <span className="text-xs text-white group-hover:text-black transition-colors">↗</span>
                      </div>
                   </div>

                   <h3 className="text-3xl md:text-4xl font-black uppercase leading-[0.9] mb-4 text-white group-hover:text-black transition-colors">
                      {agent.name}
                   </h3>
                   <div className="w-12 h-0.5 bg-blue-600 mb-6 group-hover:w-full transition-all duration-500"></div>
                   <p className="text-sm font-medium text-gray-400 group-hover:text-gray-600 leading-snug h-[40px] line-clamp-2 transition-colors">
                      {agent.desc}
                   </p>
                </div>

                {/* Bottom: System Stats Visualization */}
                <div className="mt-auto relative p-8 border-t border-white/10 group-hover:border-black/10 transition-colors">
                   <div className="grid grid-cols-2 gap-4">
                      <div>
                         <span className="text-[8px] font-mono text-gray-500 group-hover:text-gray-400 uppercase block mb-1">Module Type</span>
                         <span className="text-[10px] font-bold text-white group-hover:text-black uppercase truncate block transition-colors">{agent.sub}</span>
                      </div>
                      <div>
                         <span className="text-[8px] font-mono text-gray-500 group-hover:text-gray-400 uppercase block mb-1">Status</span>
                         <div className="flex items-center gap-1.5">
                             <div className="w-1 h-3 bg-blue-600"></div>
                             <div className="w-1 h-3 bg-blue-600"></div>
                             <div className="w-1 h-3 bg-blue-600/50 group-hover:bg-blue-600 transition-colors"></div>
                             <div className="w-1 h-3 bg-blue-600/20 group-hover:bg-blue-600/50 transition-colors"></div>
                         </div>
                      </div>
                   </div>
                </div>

              </div>
            ))}
        </div>
        
        {/* Footer info - Enhanced */}
        <div className="mt-12 p-1 border-t border-white/10">
           <div className="bg-gradient-to-r from-blue-900/20 to-transparent p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left backdrop-blur-sm">
             <div>
               <span className="text-xs font-bold tracking-widest text-blue-400 uppercase block mb-1">
                 Enterprise Grade
               </span>
               <span className="text-lg md:text-xl font-black tracking-tight text-white uppercase">
                 Optimized for High-Scale Production
               </span>
             </div>
             
             <button className="group relative w-full md:w-auto px-8 py-3 bg-white text-black text-xs font-bold tracking-widest uppercase overflow-hidden hover:bg-blue-600 hover:text-white transition-colors">
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  Request Platform Demo
                  <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </span>
             </button>
           </div>
        </div>

      </div>
    </div>
  );
};

export default CareersView;
