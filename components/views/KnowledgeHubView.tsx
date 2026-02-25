
import React from 'react';
import { NEWS_ITEMS, HUB_EDITORS_PICK, HUB_UI_UX_LIBRARY, HUB_PRODUCTS } from '../../constants';
import { NewsItem } from '../../types';

interface KnowledgeHubViewProps {
  onArticleClick?: (item: NewsItem) => void;
}

const KnowledgeHubView: React.FC<KnowledgeHubViewProps> = ({ onArticleClick }) => {
  
  // Define the Hero content as a NewsItem to pass to the detail view
  const coverStory: NewsItem = {
    id: 'cover-2024-10-24',
    date: 'OCT 24, 2024',
    category: 'Cover Story',
    title: 'Beyond Context.',
    imageUrl: 'https://picsum.photos/seed/latent-space/900/1200',
    author: 'AX LAB',
    readTime: '5 MIN READ',
    content: `
       <p class="text-xl font-bold mb-8">"프롬프트 엔지니어링은 단순한 기계와의 대화가 아닙니다. 인간의 의도와 고차원 벡터 공간을 정렬하는 새로운 예술입니다."</p>
       <p class="mb-6">We explore the delicate balance between structural constraints and creative freedom in Large Language Models. As we delve deeper into the latent space, we discover that the precision of our language directly correlates with the fidelity of the generated output.</p>
       
       <h3 class="text-2xl font-bold mt-12 mb-6">The Art of Alignment</h3>
       <p class="mb-6">When we speak to machines, we are not just giving instructions; we are navigating a vast, multidimensional map of meanings. The "Cover Story" of this era is not written by a single author but co-authored by human intent and machine probability.</p>
       <p class="mb-6">In the context of AX (AI Experience), understanding this alignment is crucial. It's not just about getting the right answer; it's about crafting the right experience. The subtle nuances of tone, style, and structure in a prompt can drastically alter the user's perception of the AI's intelligence and empathy.</p>
       
       <h3 class="text-2xl font-bold mt-12 mb-6">Structural Constraints vs. Creative Freedom</h3>
       <p class="mb-6">One might assume that strict constraints limit creativity. However, in the realm of Generative AI, constraints often act as the canvas upon which creativity flourishes. By defining clear boundaries—whether they are stylistic, format-based, or ethical—we force the model to channel its vast capabilities into a coherent and impactful form.</p>
       <p>This article delves into specific techniques for balancing these opposing forces to achieve results that are both reliable and surprisingly innovative.</p>
    `
  };

  return (
    <div className="bg-white min-h-screen pt-20 text-black">
      
      {/* 1. SYSTEM HEADER (Matching InsightsView) */}
      <div className="border-b border-black px-6 md:px-12 py-3 flex justify-between items-center text-[10px] font-mono uppercase tracking-widest bg-gray-50">
          <div className="flex gap-6">
              <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="hidden md:inline">System Online</span>
              </span>
              <span className="hidden md:inline text-gray-400">Section: Knowledge Hub</span>
          </div>
          <div>
              <span>AX ARCHIVE © 2024</span>
          </div>
      </div>

      {/* 2. HERO SECTION (Matching InsightsView Style) */}
      <section className="px-6 md:px-12 py-20 border-b border-black">
         <div className="max-w-[1600px] mx-auto">
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
               Knowledge <br/> Hub<span className="text-blue-600">.</span>
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
               <p className="text-lg md:text-xl font-medium max-w-3xl leading-relaxed text-black break-keep">
                  생성형 AI의 무한한 가능성을 탐구하고,<br/> 실전 프롬프트와 인사이트를 아카이빙하는 <span className="bg-black text-white px-1 mx-1">AX(AI Experience)</span> 지식 저장소입니다.
               </p>
               <div className="flex gap-4">
                  <button className="px-6 py-3 border border-black rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors text-black">
                     Explore Database
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* 3. FEATURED STORY (Adapted from previous Hero content) */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 border-b border-black">
        <div 
            className="group cursor-pointer relative overflow-hidden"
            onClick={() => onArticleClick && onArticleClick(coverStory)}
        >
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className="order-2 md:order-1">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="bg-blue-600 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                            Cover Story
                        </span>
                        <span className="font-mono text-xs text-gray-500">{coverStory.date}</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-[0.95] mb-6 group-hover:text-blue-700 transition-colors">
                        {coverStory.title}
                    </h2>
                    <p className="text-xl text-black font-bold leading-relaxed mb-6">
                        "프롬프트 엔지니어링은 단순한 기계와의 대화가 아닙니다. 인간의 의도와 고차원 벡터 공간을 정렬하는 새로운 예술입니다."
                    </p>
                    <p className="text-gray-500 leading-relaxed mb-8 max-w-md">
                        We explore the delicate balance between structural constraints and creative freedom in Large Language Models.
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                        Read Full Article <span>→</span>
                    </div>
                </div>
                <div className="order-1 md:order-2 aspect-[4/3] overflow-hidden bg-gray-100 relative shadow-2xl">
                    <img 
                        src={coverStory.imageUrl} 
                        alt={coverStory.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-500 pointer-events-none"></div>
                </div>
            </div>
        </div>
      </section>

      {/* --- TRENDING (List Layout) --- */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 mb-12">
        <div className="flex items-end justify-between mb-12 border-b-4 border-black pb-6">
           <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
             Trending in AI
           </h2>
           <div className="hidden md:flex flex-col text-right">
             <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Curated by AX Lab</span>
             <span className="text-xs font-mono text-gray-300">Updated Daily</span>
           </div>
        </div>

        <div className="flex flex-col divide-y divide-gray-200 border-t border-gray-200">
           {HUB_EDITORS_PICK.map((item, idx) => (
             <div 
               key={`trend-${idx}`} 
               onClick={() => onArticleClick && onArticleClick(item)}
               className="group py-10 flex flex-col md:flex-row gap-8 items-start md:items-center cursor-pointer hover:bg-gray-50 transition-colors duration-300 -mx-4 px-4 md:mx-0 md:px-0"
             >
                {/* Number */}
                <div className="text-4xl md:text-5xl font-black text-gray-200 group-hover:text-black transition-colors w-20 shrink-0 leading-none">
                   {String(idx + 1).padStart(2, '0')}
                </div>
                
                {/* Thumbnail - Small horizontal */}
                <div className="w-full md:w-64 aspect-[16/9] overflow-hidden bg-gray-100 shrink-0 shadow-sm">
                   <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                   />
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0 space-y-3">
                   <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black tracking-widest uppercase text-white bg-black px-2 py-1">{item.category}</span>
                      <span className="text-[10px] font-mono text-gray-400">{item.date}</span>
                   </div>
                   <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase leading-none group-hover:text-blue-600 transition-colors truncate w-full">
                      {item.title}
                   </h3>
                   <p className="text-sm text-gray-500 line-clamp-2 max-w-xl">
                      생성형 AI의 트렌드를 이끄는 핵심 기술과 그 이면에 담긴 인사이트를 분석합니다. 변화하는 알고리즘 속에서 크리에이티브의 본질을 찾습니다.
                   </p>
                </div>

                {/* Arrow Action */}
                <div className="hidden md:block shrink-0 pl-8">
                   <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all">
                      <span className="text-xl text-gray-400 group-hover:text-white transition-colors">↗</span>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* --- EXPLORE TOPICS (Prompt Books) --- */}
      <section className="bg-black text-white py-24">
         <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="flex justify-between items-end mb-16 border-b border-white/20 pb-8">
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Prompt Library</h2>
               <button className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors">전체 보기 ↗</button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {HUB_PRODUCTS.map((prod) => (
                  <div 
                    key={prod.id} 
                    className="group text-center cursor-pointer"
                    onClick={() => onArticleClick && onArticleClick({
                      id: prod.id,
                      date: 'AVAILABLE NOW',
                      category: 'PROMPT PACK',
                      title: prod.title,
                      imageUrl: prod.imageUrl,
                      author: 'AX STUDIO',
                      readTime: 'DIGITAL ASSET',
                      content: `
                        <h3 class="text-3xl font-black uppercase mb-6">${prod.title}</h3>
                        <div class="mb-8 p-6 bg-gray-50 border border-gray-200 text-black text-left">
                          <p class="text-xl font-bold mb-2">Digital Resource</p>
                          <p class="text-gray-600 text-sm">Instant Digital Download</p>
                        </div>
                        <h4 class="text-lg font-bold uppercase mb-4">Product Overview</h4>
                        <p class="mb-6 leading-relaxed">This premium prompt package includes a curated collection of high-fidelity prompts designed for professional use. Perfect for designers, marketers, and creators looking to leverage the full potential of Generative AI without the trial and error.</p>
                        
                        <h4 class="text-lg font-bold uppercase mb-4">Included in this pack</h4>
                        <ul class="list-disc pl-5 space-y-2 mb-8 text-gray-700">
                          <li><strong>Master Prompts:</strong> 50+ Tested prompts for Midjourney & Stable Diffusion.</li>
                          <li><strong>Parameter Guides:</strong> Detailed explanation of stylize, chaos, and weird parameters.</li>
                          <li><strong>Style Reference:</strong> Visual cheat sheet for consistent character creation.</li>
                          <li><strong>Commercial License:</strong> Full usage rights for personal and commercial projects.</li>
                        </ul>
                        
                        <div class="bg-black text-white p-6 text-center mt-8">
                           <p class="text-xs font-bold tracking-widest uppercase mb-4">Ready to Create?</p>
                           <button class="bg-white text-black px-8 py-3 font-bold uppercase hover:bg-blue-600 hover:text-white transition-colors w-full md:w-auto">
                              Download Resource
                           </button>
                        </div>
                      `
                    })}
                  >
                     <div className="bg-white/10 p-6 hover:bg-white/20 transition-colors duration-500 mb-4 relative overflow-hidden backdrop-blur-sm">
                        {/* Compact Image */}
                        <img src={prod.imageUrl} alt={prod.title} className="w-2/3 mx-auto h-auto shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500 grayscale group-hover:grayscale-0" />
                     </div>
                     <h3 className="text-xs font-bold uppercase tracking-widest mb-2 text-gray-300 group-hover:text-white truncate px-2">{prod.title}</h3>
                     <div className="flex items-center justify-center gap-3 text-xs font-mono mb-4">
                        <span className="font-bold text-gray-500">Digital Asset</span>
                     </div>
                     <button className="border border-white/20 px-6 py-2 text-[9px] font-black tracking-[0.2em] uppercase hover:bg-white hover:text-black hover:border-white transition-all">이용하기</button>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- UI/UX LIBRARY --- */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 py-24">
         <div className="flex justify-between items-end mb-12 border-b border-black pb-8">
             <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">UI/UX Library</h2>
             <button className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-500 hover:text-black">View All Resources ↗</button>
         </div>

         <div className="grid md:grid-cols-2 gap-12">
            {HUB_UI_UX_LIBRARY.map((item) => (
               <div 
                 key={item.id} 
                 className="flex gap-6 group items-start cursor-pointer"
                 onClick={() => onArticleClick && onArticleClick({
                    id: item.id,
                    date: 'UPDATED RECENTLY',
                    category: item.tag,
                    title: item.title,
                    imageUrl: item.imageUrl,
                    author: 'AX UX LAB',
                    readTime: 'FREE RESOURCE',
                    content: `
                      <h3 class="text-3xl font-black uppercase mb-6">${item.title}</h3>
                      <div class="flex items-center gap-4 mb-8">
                         <span class="bg-black text-white px-3 py-1 text-xs font-bold uppercase">${item.tag}</span>
                         <span class="text-gray-500 text-xs font-bold uppercase">Version 2.1</span>
                      </div>
                      
                      <p class="text-xl font-light leading-relaxed mb-8">${item.description}</p>
                      
                      <h4 class="text-lg font-bold uppercase mb-4">Resource Details</h4>
                      <p class="mb-6 text-gray-600">This library item is part of our open-source initiative to empower designers in the AI era. It has been meticulously crafted to support high-density information architecture often found in AI applications.</p>
                      
                      <ul class="grid md:grid-cols-2 gap-4 mb-8">
                        <li class="border border-gray-200 p-4">
                           <strong class="block text-xs uppercase text-gray-500 mb-1">Format</strong>
                           <span>${item.tag}</span>
                        </li>
                        <li class="border border-gray-200 p-4">
                           <strong class="block text-xs uppercase text-gray-500 mb-1">Resolution</strong>
                           <span>High Res / Vector</span>
                        </li>
                        <li class="border border-gray-200 p-4">
                           <strong class="block text-xs uppercase text-gray-500 mb-1">Compatibility</strong>
                           <span>Universal</span>
                        </li>
                         <li class="border border-gray-200 p-4">
                           <strong class="block text-xs uppercase text-gray-500 mb-1">License</strong>
                           <span>MIT / CC0</span>
                        </li>
                      </ul>
                      
                      <div class="mt-8">
                         <button class="bg-black text-white px-8 py-4 font-bold uppercase hover:bg-blue-600 transition-colors w-full flex justify-center items-center gap-2">
                            <span>Download Resource</span>
                            <span class="text-xs opacity-50">↓</span>
                         </button>
                      </div>
                    `
                 })}
               >
                  {/* Horizontal Layout: Image Left */}
                  <div className="relative w-32 md:w-40 aspect-[4/3] bg-gray-100 overflow-hidden shrink-0">
                     <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                     {/* Tag Badge */}
                     <div className="absolute top-0 right-0 bg-black text-white text-[9px] font-bold px-2 py-1 uppercase tracking-wider">
                        {item.tag}
                     </div>
                  </div>
                  <div className="space-y-3">
                     <h3 className="text-xl font-black tracking-tighter uppercase leading-none group-hover:text-blue-600 transition-colors cursor-pointer">{item.title}</h3>
                     <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                        {item.description}
                     </p>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* --- NEWSLETTER --- */}
      <section className="bg-gray-100 py-24 px-6 md:px-12">
         <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
            <div className="space-y-8 order-2 md:order-1">
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-serif font-bold text-xl">i</div>
                  <h3 className="text-xl font-black tracking-tighter uppercase">IPARTNERS</h3>
               </div>
               <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
                  Weekly Prompt Engineering <br/> Insights & Styles.
               </h2>
               <div className="flex max-w-md border-b border-black pb-2">
                  <input type="email" placeholder="이메일 주소 입력" className="bg-transparent border-none px-0 py-3 flex-1 text-sm outline-none placeholder:text-gray-400 font-medium" />
                  <button className="text-black px-4 py-3 text-[10px] font-black tracking-[0.2em] uppercase hover:text-blue-600 transition-colors">구독하기</button>
               </div>
            </div>
            {/* Small Compact Image */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
               <div className="relative w-full max-w-xs aspect-square overflow-hidden">
                  <img src="https://picsum.photos/seed/newsletter-ai/1200/800" alt="Newsletter" className="h-full w-full object-cover grayscale mix-blend-multiply opacity-50" />
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default KnowledgeHubView;
