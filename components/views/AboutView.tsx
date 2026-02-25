
import React, { useState } from 'react';

const AboutView: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div className="bg-[#111] min-h-screen relative overflow-x-hidden font-sans text-white">
      
      {/* Global Background Noise/Texture */}
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-0"></div>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 min-h-screen flex items-center justify-center pt-20 pb-20">
          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
             
             {/* LEFT: Typography - Full Korean Version */}
             <div className="z-10 order-2 md:order-1 pb-10 md:pb-0">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-[1.3] text-gray-300 break-keep">
                   우리는 <span className="text-[#4ade80] font-serif font-medium">아이파트너즈</span>입니다. <br/>
                   <strong className="text-white font-bold">경험</strong> 너머의 <br/>
                   <strong className="text-white font-bold">지성</strong>을 설계합니다. <br/>
                   <strong className="text-white font-bold">생성형 로직</strong>과 <br/>
                   <span className="text-white font-bold">인문학적 맥락</span>을 융합하여, <br/>
                   생동하는 <span className="text-[#4ade80] font-serif font-medium">브랜드</span>를 완성합니다.
                </h1>
                <div className="mt-10 border-l border-gray-700 pl-6">
                   <span className="text-[#4ade80] text-[10px] font-mono tracking-[0.2em] uppercase block mb-3">Est. 2024</span>
                   <p className="text-gray-400 max-w-lg text-sm md:text-base leading-relaxed font-light">
                      <strong className="text-white block mb-2 font-bold tracking-wide">디지털 전환을 넘어서.</strong>
                      우리는 독자적인 <span className="text-gray-200 font-bold">I-AX™ 방법론</span>을 통해<br/>
                      브랜드가 나아갈 미래의 <span className="text-white font-medium">새로운 문법</span>을 설계합니다.
                   </p>
                </div>
             </div>

             {/* RIGHT: Hanging ID Card - Redesigned Modern Style (Scaled Down 15%) */}
             <div className="relative h-[640px] flex justify-center order-1 md:order-2 perspective-1000 pointer-events-none md:pointer-events-auto">
                
                {/* Lanyard Strap (Fabric Texture + Text) - Widened & Text Moved Down */}
                <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[34px] h-[385px] z-0 bg-[#1a1a1a] flex flex-col items-center shadow-2xl overflow-hidden">
                   <div className="w-full h-full opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                   {/* Stitching */}
                   <div className="absolute left-1 top-0 bottom-0 border-l border-dashed border-gray-600/50"></div>
                   <div className="absolute right-1 top-0 bottom-0 border-r border-dashed border-gray-600/50"></div>
                   
                   {/* Lanyard Text - Moved Down */}
                   <div className="absolute inset-0 flex items-center justify-center transform translate-y-16">
                      <span className="text-[10px] font-black text-white/50 tracking-[0.3em] uppercase whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
                         IPARTNERS B.O.A
                      </span>
                   </div>
                </div>

                {/* Metal Clip Mechanism (Scaled Down) */}
                <div 
                   className={`absolute top-[145px] z-20 cursor-pointer transform-origin-top transition-all duration-300 ${isAnimating ? 'animate-swing' : 'hover:rotate-1'}`}
                   style={{ transformOrigin: 'top center' }}
                   onClick={triggerAnimation}
                >
                   {/* The Metal Clamp */}
                   <div className="w-[58px] h-[22px] bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-lg mx-auto shadow-md relative z-10 flex items-center justify-center">
                      <div className="w-[42px] h-[3px] bg-black/20 rounded-full"></div>
                   </div>

                   {/* The Card Holder Container (Scaled Down approx 15%) */}
                   <div className="w-[250px] h-[395px] bg-white rounded-[16px] shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)] relative overflow-hidden flex flex-col group">
                      
                      {/* --- CARD DESIGN START --- */}
                      
                      {/* Top Bar (Brand Color) */}
                      <div className="h-1 w-full bg-blue-600"></div>

                      <div className="p-5 flex flex-col h-full relative">
                          
                          {/* 1. Header: Logo & Chip */}
                          <div className="flex justify-between items-start mb-4">
                              {/* Brand Logo */}
                              <div className="flex items-center gap-1.5">
                                 <div className="w-4 h-4 bg-black flex items-center justify-center text-white font-bold text-[9px]">i</div>
                                 <span className="font-bold text-sm tracking-tight text-black">IPARTNERS</span>
                              </div>
                              
                              {/* IC Chip Graphic */}
                              <div className="w-8 h-6 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded border border-yellow-500 flex items-center justify-center relative shadow-sm overflow-hidden">
                                 <div className="absolute inset-0 border-t border-b border-yellow-600/30 scale-x-75"></div>
                                 <div className="absolute inset-0 border-l border-r border-yellow-600/30 scale-y-75"></div>
                              </div>
                          </div>

                          {/* 2. Photo Section */}
                          <div className="relative w-full aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden mb-4 border border-gray-200 shadow-inner group-hover:shadow-lg transition-all duration-500">
                              {/* Using a reliable 3D Avatar style image */}
                              <img 
                                  src="https://cdn.pixabay.com/photo/2023/05/29/18/53/avatar-8026884_1280.png" 
                                  alt="ID Photo" 
                                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                              />
                              {/* Hologram Overlay Effect */}
                              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"></div>
                          </div>

                          {/* 3. Personal Info */}
                          <div className="text-left">
                              <h2 className="text-xl font-black text-black leading-none mb-0.5">윤근식</h2>
                              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Geun Sik Yun</p>
                              
                              <div className="grid grid-cols-2 gap-2 border-t border-gray-200 pt-3">
                                  <div>
                                      <p className="text-[7px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Department</p>
                                      <p className="text-[10px] font-bold text-black">B.O.A Team</p>
                                  </div>
                                  <div>
                                      <p className="text-[7px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Role</p>
                                      <p className="text-[10px] font-bold text-black">Team Lead</p>
                                  </div>
                              </div>
                          </div>

                          {/* 4. Footer: Barcode & ID */}
                          <div className="mt-auto pt-2 flex justify-between items-end">
                              <div>
                                  {/* Fake Barcode */}
                                  <div className="h-4 w-16 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/UPC-A-036000291452.svg/1200px-UPC-A-036000291452.svg.png')] bg-cover opacity-80 mix-blend-multiply"></div>
                                  <p className="text-[7px] font-mono text-gray-400 mt-0.5">ID: 2024-AX-001</p>
                              </div>
                              <div className="text-right">
                                  <div className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center">
                                     <span className="text-[7px] font-black text-gray-300">AX</span>
                                  </div>
                              </div>
                          </div>

                          {/* Security Guilloche Pattern Overlay (Subtle) */}
                          <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                               style={{backgroundImage: 'radial-gradient(circle at center, black 1px, transparent 1px)', backgroundSize: '16px 16px'}}>
                          </div>

                      </div>
                      
                      {/* Plastic Gloss Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none z-50"></div>
                      <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out z-50"></div>
                   </div>
                </div>
             </div>
          </div>
      </section>

      {/* --- NEW SECTION: DX to AX TRANSITION (ENHANCED) --- */}
      <section className="relative z-10 py-32 bg-black/50 backdrop-blur-sm border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            {/* Section Header */}
            <div className="mb-24 text-center md:text-left">
               <span className="text-blue-500 font-mono text-[10px] tracking-[0.3em] uppercase block mb-6">Paradigm Shift</span>
               <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                  From <span className="text-gray-600">Data</span> <br/>
                  To <span className="text-blue-500">Persona</span>.
               </h2>
               <p className="mt-8 text-gray-400 max-w-none font-light text-lg leading-relaxed">
                  우리는 단순한 디지털 전환(DX)을 넘어, 인공지능이 비즈니스의 핵심 엔진이 되는 <strong className="text-white">AX(AI Transformation)</strong> 시대를 리드합니다.
               </p>
            </div>

            {/* Comparison Grid */}
            <div className="grid md:grid-cols-2 gap-16 relative">
               
               {/* Central Divider Line (Hidden on mobile) */}
               <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block"></div>
               
               {/* Left: DX (Past/Current Standard) */}
               <div className="text-right md:pr-16 opacity-50 hover:opacity-100 transition-opacity duration-500 group">
                  <div className="mb-8">
                      <h3 className="text-4xl font-black text-gray-300 mb-2 uppercase tracking-tighter">DX <span className="text-sm align-top font-mono text-gray-500">1.0</span></h3>
                      <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">Functional Experience</p>
                  </div>
                  <p className="text-lg text-gray-400 mb-10 font-light leading-relaxed">
                     기능(Function)과 정보(Information) 중심의 설계.<br/>
                     사용자의 목적 달성을 위한 효율성에 집중했습니다.
                  </p>
                  <ul className="space-y-6 text-sm font-mono text-gray-500">
                     <li className="border-b border-white/5 pb-4 flex justify-end gap-4 items-center">
                        <span className="text-right">
                           <strong className="block text-gray-300">INTERFACE DESIGN</strong>
                           <span className="text-[10px] tracking-wide">Graphical User Interface</span>
                        </span> 
                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                     </li>
                     <li className="border-b border-white/5 pb-4 flex justify-end gap-4 items-center">
                        <span className="text-right">
                           <strong className="block text-gray-300">STATIC ASSETS</strong>
                           <span className="text-[10px] tracking-wide">Fixed Media Content</span>
                        </span> 
                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                     </li>
                     <li className="border-b border-white/5 pb-4 flex justify-end gap-4 items-center">
                        <span className="text-right">
                           <strong className="block text-gray-300">HARD CODED</strong>
                           <span className="text-[10px] tracking-wide">Rule-based Logic</span>
                        </span> 
                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                     </li>
                  </ul>
               </div>

               {/* Right: AX (Future Standard) */}
               <div className="md:pl-16 group">
                  <div className="mb-8">
                      <h3 className="text-4xl font-black text-white mb-2 uppercase tracking-tighter">AX <span className="text-sm align-top font-mono text-blue-500">2.0</span></h3>
                      <p className="text-xs font-bold tracking-widest text-blue-500 uppercase">Narrative Experience</p>
                  </div>
                  <p className="text-lg text-gray-200 mb-10 font-light leading-relaxed">
                     서사(Narrative)와 페르소나(Persona) 중심의 설계.<br/>
                     사용자와 정서적으로 교감하는 가상 존재를 창조합니다.
                  </p>
                  <ul className="space-y-6 text-sm font-mono text-white">
                     <li className="border-b border-blue-900/30 pb-4 flex justify-start gap-4 items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"></span> 
                        <span className="text-left">
                           <strong className="block text-white">VIRTUAL IDENTITY</strong>
                           <span className="text-[10px] tracking-wide text-blue-400">AI-Driven Character & IP</span>
                        </span>
                     </li>
                     <li className="border-b border-blue-900/30 pb-4 flex justify-start gap-4 items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"></span> 
                        <span className="text-left">
                           <strong className="block text-white">GENERATIVE STORYTELLING</strong>
                           <span className="text-[10px] tracking-wide text-blue-400">Infinite Context Creation</span>
                        </span>
                     </li>
                     <li className="border-b border-blue-900/30 pb-4 flex justify-start gap-4 items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"></span> 
                        <span className="text-left">
                           <strong className="block text-white">EMOTIONAL INTELLIGENCE</strong>
                           <span className="text-[10px] tracking-wide text-blue-400">Adaptive & Empathetic Systems</span>
                        </span>
                     </li>
                  </ul>
               </div>
            </div>

            {/* Detailed Comparison Table (Added for Enhancement) */}
            <div className="mt-24 border border-white/10 bg-white/5 rounded-xl overflow-hidden backdrop-blur-md">
               <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                  {/* Row 1 */}
                  <div className="p-8 hover:bg-white/5 transition-colors">
                     <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Interaction</h4>
                     <div className="flex flex-col gap-4">
                        <div className="opacity-50">
                           <span className="text-xs text-gray-400 block mb-1">Legacy</span>
                           <span className="text-lg font-mono text-gray-300">Click & Touch</span>
                        </div>
                        <div className="text-blue-500">
                           <span className="text-xs text-blue-400/70 block mb-1">Future</span>
                           <span className="text-xl font-bold">Conversation & Empathy</span>
                        </div>
                     </div>
                  </div>
                  {/* Row 2 */}
                  <div className="p-8 hover:bg-white/5 transition-colors">
                     <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Core Asset</h4>
                     <div className="flex flex-col gap-4">
                        <div className="opacity-50">
                           <span className="text-xs text-gray-400 block mb-1">Legacy</span>
                           <span className="text-lg font-mono text-gray-300">CMS Database</span>
                        </div>
                        <div className="text-blue-500">
                           <span className="text-xs text-blue-400/70 block mb-1">Future</span>
                           <span className="text-xl font-bold">Character Engine & IP</span>
                        </div>
                     </div>
                  </div>
                  {/* Row 3 */}
                  <div className="p-8 hover:bg-white/5 transition-colors">
                     <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Value Proposition</h4>
                     <div className="flex flex-col gap-4">
                        <div className="opacity-50">
                           <span className="text-xs text-gray-400 block mb-1">Legacy</span>
                           <span className="text-lg font-mono text-gray-300">Efficiency</span>
                        </div>
                        <div className="text-blue-500">
                           <span className="text-xs text-blue-400/70 block mb-1">Future</span>
                           <span className="text-xl font-bold">Fandom & Loyalty</span>
                        </div>
                     </div>
                  </div>
               </div>
               
               {/* Summary Footnote */}
               <div className="p-6 bg-black/40 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                  <span className="text-xs text-gray-500 font-mono">
                     * AX represents the shift from tools that we use, to partners that we collaborate with.
                  </span>
                  <button className="text-[10px] font-black uppercase tracking-widest text-white hover:text-blue-500 transition-colors">
                     View Technical Roadmap →
                  </button>
               </div>
            </div>

        </div>
      </section>

      <style>{`
        @keyframes swing {
          0% { transform: rotate(0deg); }
          20% { transform: rotate(5deg); }
          40% { transform: rotate(-4deg); }
          60% { transform: rotate(2deg); }
          80% { transform: rotate(-1deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-swing {
          animation: swing 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .perspective-1000 {
           perspective: 1000px;
        }
        .transform-origin-top {
           transform-origin: top center;
        }
      `}</style>
    </div>
  );
};

export default AboutView;
