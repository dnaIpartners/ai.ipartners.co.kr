
import React from 'react';

interface FooterProps {
  onNavigate: (page: any) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#050505] px-6 md:px-12 py-12 border-t border-white/5 text-white">
      <div className="grid md:grid-cols-4 gap-8 mb-12">
        <div className="space-y-4">
          <h4 className="text-xs font-black tracking-widest uppercase text-gray-400">Location</h4>
          <p className="text-xs md:text-sm font-medium uppercase leading-relaxed text-gray-400">
            I-TOWER <br />
            10, Hakdong-ro 3-gil, Gangnam-gu<br/>
            Seoul, Korea
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-xs font-black tracking-widest uppercase text-gray-400">Social</h4>
          <div className="flex flex-col gap-1">
            <a href="#" className="text-xs md:text-sm font-medium uppercase hover:text-blue-500 transition-colors text-gray-400">Instagram</a>
            <a href="#" className="text-xs md:text-sm font-medium uppercase hover:text-blue-500 transition-colors text-gray-400">Facebook</a>
            <a href="#" className="text-xs md:text-sm font-medium uppercase hover:text-blue-500 transition-colors text-gray-400">Vimeo</a>
          </div>
        </div>
        <div className="md:col-span-2 space-y-4 text-right md:text-left">
           <h4 className="text-xs font-black tracking-widest uppercase text-gray-400">Quick Links</h4>
           <div className="flex flex-wrap gap-x-6 gap-y-2 justify-end md:justify-start">
              {[
                { name: 'WORKS', action: () => onNavigate('works') },
                { name: 'INSIGHTS & NEWS', action: () => onNavigate('about') },
                { name: 'I-AX PLATFORM', action: () => onNavigate('careers') },
                { name: 'IPARTNERS CO.', action: () => window.open('https://www.ipartners.co.kr', '_blank') }
              ].map(link => (
                <button 
                  key={link.name} 
                  onClick={link.action}
                  className="text-xs md:text-sm font-bold tracking-widest hover:text-blue-500 transition-colors uppercase text-gray-400"
                >
                  {link.name}
                </button>
              ))}
           </div>
        </div>
      </div>

      <div className="relative overflow-hidden pt-8 border-t border-white/5">
        <h1 
          className="text-[12vw] font-black tracking-tighter leading-none text-white select-none cursor-pointer hover:text-blue-500 transition-colors duration-500"
          onClick={() => onNavigate('home')}
        >
          IPARTNERS
        </h1>
        <div className="flex justify-between items-end mt-4">
          <p className="text-[9px] font-bold tracking-widest text-gray-600 uppercase">
            © 2026 IPARTNERS ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-4">
             <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <span className="text-xs">↑</span>
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
