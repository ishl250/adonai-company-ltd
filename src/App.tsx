/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeaderTop } from './components/HeaderTop';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ValuesSection } from './components/ValuesSection';
import { SpecializationSection } from './components/SpecializationSection';
import { TeamSection } from './components/TeamSection';
import { WorkingProcessSection } from './components/WorkingProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaBanner } from './components/CtaBanner';
import { BlogSection } from './components/BlogSection';
import { BrandLogos } from './components/BrandLogos';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ConsultationModal } from './components/ConsultationModal';
import { VideoModal } from './components/VideoModal';
import { SearchModal } from './components/SearchModal';
import { Chatbot } from './components/chatbot/Chatbot';

// Dedicated Page Views
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { WhyUsPage } from './pages/WhyUsPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';

export type PageRoute = 'home' | 'about' | 'services' | 'projects' | 'why-us' | 'contact' | 'blogs';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteDefaultService, setQuoteDefaultService] = useState<string | undefined>(undefined);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleNavigate = (pageId: string, href?: string) => {
    const validPages: PageRoute[] = ['home', 'about', 'services', 'projects', 'why-us', 'contact', 'blogs'];
    const targetPage = validPages.includes(pageId as PageRoute) ? (pageId as PageRoute) : 'home';
    
    setCurrentPage(targetPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (targetPage === 'home' && href && href !== '#home') {
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleOpenQuote = (defaultService?: string) => {
    setQuoteDefaultService(defaultService);
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-700 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. Dark Topbar with Email, Kimironko Location, Working Hours & Phone Numbers */}
      <HeaderTop />

      {/* 2. Main Navigation Bar with Company Logo & Clean Page Links */}
      <Navbar
        activePage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* 3. Dynamic Page View Render */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* Hero Banner */}
            <Hero
              onOpenQuote={() => handleOpenQuote()}
              onLearnMore={() => handleNavigate('services')}
            />

            {/* 4 Core Pillars from Banner */}
            <ValuesSection />

            {/* About Preview */}
            <AboutSection
              onLearnMore={() => handleNavigate('services')}
              onOpenQuote={() => handleOpenQuote()}
            />

            {/* 5 Core Services Preview */}
            <ServicesSection onOpenQuote={() => handleOpenQuote()} />

            {/* Projects Portfolio */}
            <ProjectsSection />

            {/* Specialization & Video Feature */}
            <SpecializationSection onOpenVideo={() => setIsVideoOpen(true)} />

            {/* Engineering & Craftsmanship Team */}
            <TeamSection />

            {/* 4-Step Working Process */}
            <WorkingProcessSection />

            {/* Client Testimonials */}
            <TestimonialsSection />

            {/* Consultation Banner */}
            <CtaBanner onOpenConsultation={() => setIsConsultationOpen(true)} />

            {/* Latest Insights & Blog Posts */}
            <BlogSection onNavigate={handleNavigate} />

            {/* Brand Partners Ribbon */}
            <BrandLogos />
          </>
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote()}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === 'why-us' && (
          <WhyUsPage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote()}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {currentPage === 'blogs' && (
          <BlogPage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}
      </main>

      {/* 4. Complete Footer with Page Links, Service Specs, Newsletter & Contact Info */}
      <Footer
        onOpenQuote={() => handleOpenQuote()}
        onNavigate={handleNavigate}
      />

      {/* 5. Modals & Dialogs */}
      <QuoteModal
        isOpen={isQuoteOpen}
        defaultService={quoteDefaultService}
        onClose={() => {
          setIsQuoteOpen(false);
          setQuoteDefaultService(undefined);
        }}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={(pageId, href) => handleNavigate(pageId, href)}
      />

      {/* 6. AI Assistant Chatbot & Floating WhatsApp */}
      <Chatbot onOpenQuote={handleOpenQuote} />
    </div>
  );
}
