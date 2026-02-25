
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import InsightPreview from './components/InsightPreview';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';
import CommonQuestions from './components/CommonQuestions';
import KnowledgeHubPreview from './components/KnowledgeHubPreview';
import AboutView from './components/views/AboutView';
import InsightsView from './components/views/InsightsView';
import CareersView from './components/views/CareersView';
import WorksView from './components/views/WorksView';
import KnowledgeHubView from './components/views/KnowledgeHubView';
import ProjectDetailView from './components/views/ProjectDetailView';
import NewsDetailView from './components/views/NewsDetailView';
import SolutionDetailView from './components/views/SolutionDetailView';
import { Project, NewsItem, Solution } from './types';

type PageType = 'home' | 'about' | 'careers' | 'works' | 'knowledge-hub' | 'project-detail' | 'news-detail' | 'solution-detail' | 'insights';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [previousPage, setPreviousPage] = useState<PageType>('home');
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateTo = (page: PageType, data?: Project | NewsItem | Solution) => {
    setIsTransitioning(true);
    
    // Capture the page we are leaving to use as 'previousPage' if navigating to a detail view
    const sourcePage = currentPage;

    setTimeout(() => {
      // If going to a detail page, remember where we came from.
      // Otherwise, keep the previousPage as is (or logic could be adjusted if needed).
      if (['project-detail', 'news-detail', 'solution-detail'].includes(page)) {
        setPreviousPage(sourcePage);
      }

      setCurrentPage(page);
      
      // Handle data passing based on page type
      if (page === 'project-detail' && data) {
        setSelectedProject(data as Project);
      } else if (page === 'news-detail' && data) {
        setSelectedNews(data as NewsItem);
      } else if (page === 'solution-detail' && data) {
        setSelectedSolution(data as Solution);
      }

      window.scrollTo(0, 0);
      setIsTransitioning(false);
    }, 600);
  };

  // Determine if the current page has a dark background to adjust Navbar color
  // Added 'about' to isDarkPage as per redesign
  const isDarkPage = currentPage === 'careers' || currentPage === 'project-detail' || currentPage === 'solution-detail' || currentPage === 'about';

  // Helper to generate back button label based on previous page
  const getBackLabel = (page: PageType) => {
    switch(page) {
        case 'home': return 'BACK TO HOME';
        case 'works': return 'BACK TO WORKS';
        case 'about': return 'BACK TO TEAM';
        case 'insights': return 'BACK TO INSIGHTS';
        case 'careers': return 'BACK TO PLATFORM';
        case 'knowledge-hub': return 'BACK TO KNOWLEDGE HUB';
        default: return 'BACK';
    }
  };

  const backLabel = getBackLabel(previousPage);

  return (
    <div className="relative min-h-screen selection:bg-black selection:text-white">
      {/* Page Transition Overlay */}
      <div 
        className={`fixed inset-0 bg-black z-[100] transition-transform duration-700 ease-in-out ${isTransitioning ? 'translate-y-0' : 'translate-y-full'}`}
      />

      {/* Background grain effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999]">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100" height="100" filter="url(#noise)" />
        </svg>
      </div>

      <Navbar onNavigate={navigateTo} isDark={isDarkPage} />
      
      <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {currentPage === 'home' && (
          <main>
            <Hero />
            <section id="works">
              <CaseStudies onProjectClick={(p) => navigateTo('project-detail', p)} />
            </section>
            {/* Expertise section removed */}
            {/* AIWorks section removed */}
            <KnowledgeHubPreview 
               onNavigate={navigateTo} 
               onArticleClick={(n) => navigateTo('news-detail', n)} 
            />
            <InsightPreview onSolutionClick={(s) => navigateTo('solution-detail', s)} />
            <CommonQuestions />
            <section id="consulting" className="bg-black text-white py-20">
              <AIConsultant />
            </section>
          </main>
        )}

        {currentPage === 'about' && (
          <AboutView />
        )}

        {currentPage === 'insights' && (
          <InsightsView onNewsClick={(n) => navigateTo('news-detail', n)} />
        )}
        
        {currentPage === 'careers' && (
          <CareersView onSolutionClick={(s) => navigateTo('solution-detail', s)} />
        )}
        
        {currentPage === 'works' && (
          <WorksView onProjectClick={(p) => navigateTo('project-detail', p)} />
        )}

        {currentPage === 'knowledge-hub' && (
          <KnowledgeHubView onArticleClick={(n) => navigateTo('news-detail', n)} />
        )}
        
        {currentPage === 'project-detail' && selectedProject && (
          <ProjectDetailView 
            project={selectedProject} 
            onBack={() => navigateTo(previousPage)} 
            backLabel={backLabel}
          />
        )}

        {currentPage === 'news-detail' && selectedNews && (
          <NewsDetailView 
            newsItem={selectedNews} 
            onBack={() => navigateTo(previousPage)}
            backLabel={backLabel}
          />
        )}

        {currentPage === 'solution-detail' && selectedSolution && (
          <SolutionDetailView 
            solution={selectedSolution} 
            onBack={() => navigateTo(previousPage)} 
            backLabel={backLabel}
          />
        )}
      </div>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
