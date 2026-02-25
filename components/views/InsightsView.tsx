
import React, { useState, useMemo } from 'react';
import { NEWS_ITEMS } from '../../constants';
import { NewsItem } from '../../types';

interface InsightsViewProps {
  onNewsClick?: (news: NewsItem) => void;
}

const InsightsView: React.FC<InsightsViewProps> = ({ onNewsClick }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Define categories (UI labels)
  const categories = ['All', 'AX Trends', 'Company News', 'Tech Logic', 'Awards', 'Culture'];

  // Filter logic
  const filteredNews = useMemo(() => {
    if (activeCategory === 'All') return NEWS_ITEMS;
    return NEWS_ITEMS.filter(item => {
        const itemCat = item.category.toUpperCase();
        const target = activeCategory.toUpperCase();
        
        // Loose matching for demo data consistency
        if (target === 'AWARDS' && itemCat.includes('AWARD')) return true;
        if (target === 'TECH LOGIC' && itemCat.includes('TECH')) return true;
        
        return itemCat === target;
    });
  }, [activeCategory]);

  const featuredNews = filteredNews[0];
  const otherNews = filteredNews.slice(1);

  return (
    <div className="bg-white min-h-screen pt-20 text-black">
      
      {/* 1. SYSTEM HEADER */}
      <div className="border-b border-black px-6 md:px-12 py-3 flex justify-between items-center text-[10px] font-mono uppercase tracking-widest bg-gray-50">
          <div className="flex gap-6">
              <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
                  <span className="hidden md:inline">Live Feed</span>
              </span>
              <span className="hidden md:inline text-gray-400">Section: Insights</span>
          </div>
          <div>
              <span>IPARTNERS NEWSROOM © 2024</span>
          </div>
      </div>

      {/* 2. PAGE HEADER */}
      <section className="px-6 md:px-12 py-20 border-b border-black">
         <div className="max-w-[1600px] mx-auto">
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
               Insights <br/> & News<span className="text-blue-600">.</span>
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
               <p className="text-lg md:text-xl font-medium max-w-3xl leading-relaxed">
                  디지털 비즈니스의 최전선에서 발견한 인사이트와 아이파트너즈의 최신 소식을 전합니다.<br/>
                  <span className="bg-black text-white px-1 mx-1">AX(AI Experience)</span>시대를 항해하는 나침반이 되어드리겠습니다.
               </p>
               <div className="flex gap-4">
                  <button className="px-6 py-3 border border-black rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors">
                     Subscribe Newsletter
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* NEW: MOBILE CATEGORY FILTER (Visible < lg) */}
      <div className="lg:hidden border-b border-black overflow-x-auto scrollbar-hide">
          <div className="flex px-6 py-4 gap-6 min-w-max">
              {categories.map((cat) => (
                  <button 
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors relative ${activeCategory === cat ? 'text-blue-600' : 'text-gray-400'}`}
                  >
                      {cat}
                      {activeCategory === cat && <span className="absolute -bottom-4 left-0 w-full h-0.5 bg-blue-600"></span>}
                  </button>
              ))}
          </div>
      </div>

      {/* 3. MAIN GRID LAYOUT */}
      <div className="grid lg:grid-cols-12 min-h-screen border-b border-black">
         
         {/* LEFT SIDEBAR (Description & Filters) */}
         <div className="lg:col-span-3 border-r border-black p-6 md:p-12 hidden lg:block bg-gray-50">
            <div className="sticky top-32 space-y-12">
               <div>
                  <h3 className="text-xs font-black tracking-widest uppercase mb-6">Categories</h3>
                  <ul className="space-y-4">
                     {categories.map((cat) => (
                        <li 
                            key={cat} 
                            onClick={() => setActiveCategory(cat)}
                            className="flex items-center justify-between group cursor-pointer"
                        >
                           <span className={`text-sm font-bold uppercase transition-colors ${activeCategory === cat ? 'text-blue-600' : 'text-gray-400 group-hover:text-black'}`}>
                               {cat}
                           </span>
                           <span className={`text-[10px] font-mono transition-all ${activeCategory === cat ? 'text-blue-600 opacity-100' : 'text-gray-300 opacity-0 group-hover:opacity-100'}`}>
                               {activeCategory === cat ? '●' : '↗'}
                           </span>
                        </li>
                     ))}
                  </ul>
               </div>

               <div className="w-full h-px bg-gray-300"></div>

               <div>
                  <h3 className="text-xs font-black tracking-widest uppercase mb-4">Focus</h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-mono">
                     We focus on the intersection of Design, Technology, and Business Strategy.
                  </p>
               </div>
            </div>
         </div>

         {/* CENTER & RIGHT CONTENT */}
         <div className="lg:col-span-9 bg-white min-h-[500px]">
            
            {filteredNews.length > 0 ? (
                <>
                    {/* FEATURED POST */}
                    {featuredNews && (
                        <div 
                        className="group border-b border-black cursor-pointer relative overflow-hidden"
                        onClick={() => onNewsClick && onNewsClick(featuredNews)}
                        >
                        <div className="grid md:grid-cols-2 min-h-[500px]">
                            <div className="p-8 md:p-16 flex flex-col justify-between order-2 md:order-1">
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                    <span className="bg-blue-600 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                                        {activeCategory === 'All' ? 'Featured' : 'Latest'}
                                    </span>
                                    <span className="font-mono text-xs text-gray-500">{featuredNews.date}</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase leading-[0.95] mb-6 group-hover:text-blue-700 transition-colors">
                                    {featuredNews.title}
                                    </h2>
                                    <p className="text-gray-500 line-clamp-3 leading-relaxed mb-8 max-w-md">
                                    {featuredNews.content.replace(/<[^>]*>?/gm, '')}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                                    Read Article <span>→</span>
                                </div>
                            </div>
                            <div className="order-1 md:order-2 h-64 md:h-auto border-b md:border-b-0 md:border-l border-black overflow-hidden relative">
                                <img 
                                    src={featuredNews.imageUrl} 
                                    alt={featuredNews.title} 
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-500"></div>
                            </div>
                        </div>
                        </div>
                    )}

                    {/* NEWS LIST */}
                    {otherNews.length > 0 && (
                        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black">
                        {otherNews.map((news) => (
                            <div 
                                key={news.id} 
                                className="p-8 md:p-12 hover:bg-gray-50 transition-colors cursor-pointer group flex flex-col h-full"
                                onClick={() => onNewsClick && onNewsClick(news)}
                            >
                                <div className="aspect-video mb-8 overflow-hidden bg-gray-100 border border-gray-100">
                                    <img 
                                    src={news.imageUrl} 
                                    alt={news.title} 
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 group-hover:text-blue-600 transition-colors">
                                    {news.category}
                                    </span>
                                    <span className="text-[10px] font-mono text-gray-400">{news.date}</span>
                                </div>
                                <h3 className="text-2xl font-black tracking-tight leading-none mb-4 group-hover:underline decoration-2 underline-offset-4">
                                    {news.title}
                                </h3>
                                <div className="mt-auto pt-8">
                                    <span className="text-[10px] font-mono text-gray-400 border border-gray-200 px-2 py-1 rounded-full group-hover:border-black group-hover:text-black transition-colors">
                                    {news.readTime || '3 MIN READ'}
                                    </span>
                                </div>
                            </div>
                        ))}
                        </div>
                    )}
                </>
            ) : (
                // Empty State
                <div className="flex flex-col items-center justify-center h-full p-20 text-center">
                    <div className="text-6xl mb-6 text-gray-200">∅</div>
                    <h3 className="text-xl font-bold uppercase mb-2">No articles found</h3>
                    <p className="text-gray-500 text-sm">We couldn't find any insights for the category "{activeCategory}".</p>
                    <button 
                        onClick={() => setActiveCategory('All')}
                        className="mt-8 px-6 py-2 border border-black text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
                    >
                        View All Posts
                    </button>
                </div>
            )}

         </div>
      </div>

    </div>
  );
};

export default InsightsView;
