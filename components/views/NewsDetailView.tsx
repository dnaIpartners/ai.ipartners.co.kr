
import React from 'react';
import { NewsItem } from '../../types';

interface NewsDetailViewProps {
  newsItem: NewsItem;
  onBack: () => void;
  backLabel?: string;
}

const NewsDetailView: React.FC<NewsDetailViewProps> = ({ newsItem, onBack, backLabel = "BACK TO INSIGHTS" }) => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="mb-12 text-[10px] font-black tracking-[0.3em] uppercase hover:underline flex items-center gap-4 text-gray-400 hover:text-black transition-colors"
        >
          ← {backLabel}
        </button>

        {/* Header */}
        <header className="mb-16 border-b border-black pb-12">
          <div className="flex items-center gap-4 mb-6">
             <span className="text-xs font-bold tracking-widest uppercase bg-blue-600 text-white px-2 py-1">
               {newsItem.category}
             </span>
             <span className="text-xs font-mono text-gray-500">
               {newsItem.date}
             </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] uppercase">
            {newsItem.title}
          </h1>
        </header>

        {/* Hero Image */}
        <div className="mb-16 aspect-video bg-gray-100 overflow-hidden">
           <img 
             src={newsItem.imageUrl} 
             alt={newsItem.title} 
             className="w-full h-full object-cover grayscale"
           />
        </div>

        {/* Content Body */}
        <article className="prose prose-lg md:prose-xl max-w-none prose-headings:font-black prose-headings:tracking-tight prose-p:text-gray-600 prose-p:font-light prose-p:leading-relaxed prose-a:text-blue-600">
           {/* Rendering HTML content safely */}
           <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
        </article>

        {/* Footer / Share */}
        <div className="mt-24 pt-12 border-t border-gray-100 flex justify-between items-center">
           <span className="text-xs font-black tracking-widest uppercase text-gray-400">Share this article</span>
           <div className="flex gap-4">
              <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <span className="sr-only">Copy Link</span>
                🔗
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailView;
