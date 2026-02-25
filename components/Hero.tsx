
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-12 overflow-hidden bg-white text-black">
      
      {/* Background Grid - Subtle */}
      <div className="absolute inset-0 z-0 opacity-[0.3] pointer-events-none" 
           style={{backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)', backgroundSize: '60px 60px'}}>
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
         
         {/* --- LEFT COLUMN: Text Content --- */}
         <div className="flex flex-col items-start text-left pl-4 md:pl-12 order-2 lg:order-1">
             {/* Status Badge */}
             <div className="mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-black/10 bg-white/50 backdrop-blur-sm">
                   <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                   </span>
                   <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">
                      IPARTNERS AX AGENCY
                   </span>
                </div>
             </div>

             {/* Main Headline */}
             <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards] text-black">
                DIGITAL EVOLUTION, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-black">
                   NOW AI-DRIVEN.
                </span>
             </h1>

             {/* Description */}
             <p className="text-lg md:text-2xl text-gray-500 max-w-xl leading-relaxed mb-12 opacity-0 animate-[fadeInUp_1s_ease-out_0.4s_forwards] font-light">
                We fuse AI technology with experience design to build smarter, more adaptive brand interactions for the next era of digital.
             </p>

             {/* CTA Buttons */}
             <div className="flex flex-col md:flex-row gap-5 opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards] w-full md:w-auto">
                <button className="h-14 px-10 rounded-full bg-black text-white font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-blue-600 transition-colors hover:scale-105 duration-300 shadow-lg">
                   Explore Works
                </button>
                <button className="h-14 px-10 rounded-full border border-black/10 text-black font-bold text-[11px] tracking-[0.2em] uppercase hover:bg-gray-50 transition-colors">
                   Partner with Us
                </button>
             </div>
         </div>

         {/* --- RIGHT COLUMN: Interactive Diagram --- */}
         {/* Reduced scale from scale-90 md:scale-100 to scale-[0.85] md:scale-95 (approx 5% reduction) */}
         <div className="relative w-full h-[500px] lg:h-[700px] flex items-center justify-center opacity-0 animate-[fadeIn_1.5s_ease-out_0.5s_forwards] pointer-events-none md:pointer-events-auto scale-[0.85] md:scale-95 order-1 lg:order-2">
             
             {/* Diagram Container */}
             <div className="relative w-[600px] h-[600px]">
                
                {/* SVG Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full z-0 overflow-visible opacity-30">
                   {/* Dotted paths connecting center to nodes */}
                   <path d="M300 300 C 200 300, 150 200, 100 150" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="6 6" className="animate-pulse" />
                   <path d="M300 300 C 400 300, 450 180, 500 150" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="6 6" className="animate-pulse" />
                   <path d="M300 300 L 520 300" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="6 6" />
                   <path d="M300 300 C 400 350, 450 450, 480 500" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="6 6" className="animate-pulse" />
                   <path d="M300 300 L 250 520" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="6 6" />
                   <path d="M300 300 C 200 300, 100 350, 80 400" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="6 6" className="animate-pulse" />
                   <path d="M300 300 C 300 200, 320 150, 350 80" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="6 6" />
                </svg>

                {/* Central Stack Core - REPLACED WITH FUTURISTIC APERTURE CORE */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 z-10 flex items-center justify-center">
                   
                   {/* Glow */}
                   <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full animate-pulse"></div>

                   {/* Core Structure Container */}
                   <div className="relative w-64 h-64">
                      
                      {/* Ring 1: Outer Static Dashed Ring */}
                      <div className="absolute inset-0 rounded-full border border-gray-200 border-dashed opacity-50"></div>

                      {/* Ring 2: Rotating Arc Segments (Slow) */}
                      <div className="absolute inset-2 rounded-full border-t border-r border-gray-300 animate-[spin_10s_linear_infinite]"></div>
                      <div className="absolute inset-2 rounded-full border-b border-l border-gray-300 animate-[spin_10s_linear_infinite]" style={{ animationDirection: 'reverse' }}></div>

                      {/* Ring 3: Middle Rotating Ring with Glass Effect */}
                      <div className="absolute inset-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/40 shadow-xl animate-[spin_20s_linear_infinite_reverse] flex items-center justify-center">
                         {/* Internal ticks */}
                         <div className="absolute top-0 w-1 h-2 bg-gray-400"></div>
                         <div className="absolute bottom-0 w-1 h-2 bg-gray-400"></div>
                         <div className="absolute left-0 w-2 h-1 bg-gray-400"></div>
                         <div className="absolute right-0 w-2 h-1 bg-gray-400"></div>
                      </div>

                      {/* Ring 4: Inner Fast Spinner (Blue Accent) */}
                      <div className="absolute inset-16 rounded-full border-2 border-transparent border-t-blue-500 border-r-blue-500/30 animate-[spin_3s_linear_infinite]"></div>

                      {/* Ring 5: The Center Nucleus */}
                      <div className="absolute inset-[4.5rem] rounded-full bg-gradient-to-br from-gray-50 to-white shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-center z-20">
                         {/* The "Eye" */}
                         <div className="w-8 h-8 rounded-full bg-black shadow-lg flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-transparent opacity-50"></div>
                            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                         </div>
                      </div>

                      {/* Orbiting Satellite Particle */}
                      <div className="absolute inset-0 animate-[spin_6s_linear_infinite]">
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow-md"></div>
                      </div>

                   </div>

                </div>

                {/* Floating Nodes */}
                
                {/* Node: USER STORIES */}
                <div className="absolute top-[18%] left-[10%] bg-gray-100/80 backdrop-blur-sm border border-gray-200 shadow-sm px-4 py-2 rounded-full animate-[float_4s_ease-in-out_infinite]">
                   <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">User Stories</span>
                </div>

                {/* Node: MOCKUPS */}
                <div className="absolute top-[8%] left-[55%] bg-gray-100/80 backdrop-blur-sm border border-gray-200 shadow-sm px-4 py-2 rounded-full animate-[float_5s_ease-in-out_infinite_1s]">
                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Mockups</span>
                </div>

                {/* Node: BRANDING (Blue) */}
                <div className="absolute top-[22%] right-[5%] bg-blue-600 border border-blue-500 shadow-lg shadow-blue-200 px-6 py-2.5 rounded-full animate-[float_4.5s_ease-in-out_infinite_0.5s] z-20">
                   <span className="text-[11px] font-bold text-white uppercase tracking-wider">Branding</span>
                </div>

                {/* Node: DESIGN (Red) */}
                <div className="absolute top-[38%] left-[-2%] bg-[#ef4444] border border-red-400 shadow-lg shadow-red-200 px-6 py-2.5 rounded-full animate-[float_6s_ease-in-out_infinite_2s] z-20">
                   <span className="text-[11px] font-bold text-white uppercase tracking-wider">Design</span>
                </div>

                {/* Node: WIREFRAMES (Orange) */}
                <div className="absolute top-[48%] right-[-8%] bg-[#f97316] border border-orange-400 shadow-lg shadow-orange-200 px-6 py-2.5 rounded-full z-20 animate-[float_5.5s_ease-in-out_infinite_1.5s]">
                   <span className="text-[11px] font-bold text-white uppercase tracking-wider">Wireframes</span>
                </div>

                {/* Node: PROTOTYPES (Slate) */}
                <div className="absolute bottom-[28%] left-[2%] bg-[#64748b] border border-slate-500 shadow-lg shadow-slate-200 px-6 py-2.5 rounded-full animate-[float_4s_ease-in-out_infinite_2.5s] z-20">
                   <span className="text-[11px] font-bold text-white uppercase tracking-wider">Prototypes</span>
                </div>

                {/* Node: RESEARCH (Maroon) */}
                <div className="absolute bottom-[18%] right-[8%] bg-[#9d174d] border border-pink-700 shadow-lg shadow-pink-200 px-6 py-2.5 rounded-full animate-[float_5s_ease-in-out_infinite_3s] z-20">
                   <span className="text-[11px] font-bold text-white uppercase tracking-wider">Research</span>
                </div>

                {/* Node: SKETCHES (Purple) */}
                <div className="absolute bottom-[8%] left-[30%] bg-[#7c3aed] border border-purple-500 shadow-lg shadow-purple-200 px-6 py-2.5 rounded-full animate-[float_4.5s_ease-in-out_infinite_0.5s] z-20">
                   <span className="text-[11px] font-bold text-white uppercase tracking-wider">Sketches</span>
                </div>

                {/* Node: ANIMATION (Gray) */}
                <div className="absolute bottom-[18%] left-[50%] bg-gray-200 border border-gray-300 shadow-sm px-4 py-1.5 rounded-full animate-[float_6s_ease-in-out_infinite_1s]">
                   <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Animation</span>
                </div>

             </div>
         </div>

      </div>

      <style>{`
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes sway {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(50%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
