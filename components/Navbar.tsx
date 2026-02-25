
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (page: any) => void;
  isDark?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, isDark = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'WORKS', page: 'works' },
    { name: 'INSIGHTS & NEWS', page: 'insights' },
    { name: 'I-AX PLATFORM', page: 'careers' },
    { name: 'KNOWLEDGE HUB', page: 'knowledge-hub' },
    { name: 'ABOUT', page: 'about' }
  ];

  // Determine if the navbar content should be light-colored
  const isInverse = isScrolled || isDark || isMobileMenuOpen;

  const handleMobileNavigate = (page: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 md:px-12 flex justify-between items-center ${isScrolled && !isMobileMenuOpen ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-6 md:py-8'}`}>
        
        {/* Brand Logo Area */}
        <div className="flex items-center gap-3 cursor-pointer group select-none relative z-[101]" onClick={() => handleMobileNavigate('home')}>
          {/* Symbol */}
          <div className="w-8 h-8 bg-blue-600 flex items-center justify-center text-white font-serif font-black text-xl tracking-tighter group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-blue-900/20">
            i
          </div>
          
          {/* Typography */}
          <div className="flex flex-col justify-center gap-0.5">
             <h1 className={`text-xl font-black tracking-tighter leading-none transition-colors ${isInverse ? 'text-white' : 'text-black'}`}>
               IPARTNERS
             </h1>
             <span className={`text-[9px] font-bold tracking-[0.3em] uppercase transition-colors ${isInverse ? 'text-gray-400 group-hover:text-blue-400' : 'text-gray-500 group-hover:text-blue-600'}`}>
               AX Creative
             </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => onNavigate(item.page)}
              className={`text-[10px] font-black tracking-[0.2em] transition-colors uppercase relative group/link ${isInverse ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'}`}
            >
              {item.name}
              <span className={`absolute -bottom-2 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover/link:w-full`}></span>
            </button>
          ))}
          <button 
            onClick={() => window.open('https://www.ipartners.co.kr', '_blank')}
            className={`px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] rounded-sm transition-all border ${isInverse ? 'bg-white text-black border-white hover:bg-gray-200' : 'bg-black text-white border-black hover:bg-gray-800'}`}
          >
            ↗ IPARTNERS CO.
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden relative z-[101] p-2 ${isInverse ? 'text-white' : 'text-black'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-[90] transition-all duration-500 flex flex-col justify-center px-8 md:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="flex flex-col gap-8">
          {navItems.map((item, idx) => (
            <button
              key={item.name}
              onClick={() => handleMobileNavigate(item.page)}
              className={`text-3xl font-black tracking-tighter text-left text-white hover:text-blue-500 transition-all duration-300 uppercase transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {item.name}
            </button>
          ))}
          <div 
            className={`w-full h-px bg-white/20 my-4 transform ${isMobileMenuOpen ? 'scale-x-100' : 'scale-x-0'} transition-transform duration-500 delay-500`} 
          />
          <button 
            onClick={() => window.open('https://www.ipartners.co.kr', '_blank')}
            className={`text-sm font-bold tracking-widest text-gray-400 text-left uppercase transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-500 delay-700`}
          >
            ↗ Visit IPARTNERS CO.
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
