/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { TopContactBar } from './components/TopContactBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesPanel } from './components/ServicesPanel';
import { AboutSection } from './components/AboutSection';
import { ProjectGallery } from './components/ProjectGallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { DesignPhilosophy } from './components/DesignPhilosophy';
import { ConsultationForm } from './components/ConsultationForm';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ProjectModal } from './components/ProjectModal';
import { ServiceModal } from './components/ServiceModal';
import { LegalModal } from './components/LegalModal';
import { Button } from './components/ui/Button';

import { BusinessInfo, ServiceItem, ProjectItem } from './types';
import { DEFAULT_BUSINESS_INFO, SERVICES_DATA, PROJECTS_DATA, TESTIMONIALS_DATA } from './data/businessData';
import { MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [businessInfo] = useState<BusinessInfo>(DEFAULT_BUSINESS_INFO);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [preselectedService, setPreselectedService] = useState<string>('Residential Interior Design');
  const [showWhatsAppDemoNotice, setShowWhatsAppDemoNotice] = useState(false);

  const scrollToConsultation = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    const el = document.getElementById('consultation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1917] font-sans antialiased selection:bg-[#C5A880]/30 selection:text-[#1C1917] relative w-full overflow-x-hidden">
      
      {/* 1. Animated Preloader */}
      <Preloader />

      {/* 2. Top Contact Bar with Unobtrusive Demo Concept Badge */}
      <TopContactBar businessInfo={businessInfo} />

      {/* 3. Sticky Animated Navbar */}
      <Navbar onBookConsultation={() => scrollToConsultation()} />

      <main className="flex-1 w-full">
        {/* 4. Hero Section with Word Reveal & Aligned CTAs */}
        <HeroSection
          businessInfo={businessInfo}
          onExploreWork={scrollToProjects}
          onBookConsultation={() => scrollToConsultation()}
        />

        {/* 5. Floating Services Panel with Line Icons */}
        <ServicesPanel
          services={SERVICES_DATA}
          onSelectService={(service) => setSelectedService(service)}
        />

        {/* 6. About Section with Layered Asymmetrical Composition */}
        <AboutSection onLearnMore={scrollToAbout} />

        {/* 7. Interactive Project Portfolio with Categories & Gallery Modal */}
        <ProjectGallery
          projects={PROJECTS_DATA}
          onOpenProject={(project) => setSelectedProject(project)}
          onViewAllProjects={scrollToProjects}
          onDiscussSpace={() => scrollToConsultation()}
        />

        {/* 8. Why Choose FINEX - Dark Charcoal Luxury Section with Counters */}
        <WhyChooseUs
          businessInfo={businessInfo}
          onBookConsultation={() => scrollToConsultation()}
        />

        {/* 9. Interactive Testimonial Carousel with Concept Reviews */}
        <TestimonialCarousel
          testimonials={TESTIMONIALS_DATA}
          businessInfo={businessInfo}
          onBookConsultation={() => scrollToConsultation()}
        />

        {/* 10. Design Philosophy & Studio Concept Standards */}
        <DesignPhilosophy
          businessInfo={businessInfo}
          onBookConsultation={() => scrollToConsultation()}
        />

        {/* 11. Consultation Form with Validation & Demo Submission Notice */}
        <ConsultationForm
          businessInfo={businessInfo}
          preselectedService={preselectedService}
        />
      </main>

      {/* 12. Footer with Newsletter & Working Legal Modals */}
      <Footer
        businessInfo={businessInfo}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onBookConsultation={() => scrollToConsultation()}
      />

      {/* Floating Simulated WhatsApp Button (Demo Interaction) */}
      <div className="fixed bottom-6 right-6 z-30">
        <div className="relative">
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-60 pointer-events-none" />

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setShowWhatsAppDemoNotice(true)}
            className="relative bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 group cursor-pointer touch-target border-0"
            title="Simulated WhatsApp Demonstration"
            aria-label="Simulated WhatsApp Demonstration"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span className="hidden sm:inline text-xs font-semibold">
              WhatsApp (Demo)
            </span>
          </motion.button>
        </div>
      </div>

      {/* WhatsApp Simulated Modal */}
      <AnimatePresence>
        {showWhatsAppDemoNotice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowWhatsAppDemoNotice(false)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-[#EAE3D2] shadow-2xl text-center space-y-4 z-10"
            >
              <button
                onClick={() => setShowWhatsAppDemoNotice(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FAF8F5] hover:bg-[#EAE3D2] flex items-center justify-center text-[#1C1917] cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mx-auto">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                Demo Mode Notice
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                This is a fictional concept demonstration website. Live WhatsApp links and numbers are simulated to ensure no real persons are inadvertently contacted.
              </p>
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="sm"
                  fullWidth
                  onClick={() => setShowWhatsAppDemoNotice(false)}
                >
                  Understood
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Back to Top Smooth Scroll Button */}
      <BackToTop />

      {/* Interactive Project Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(projectTitle) => scrollToConsultation(`Inquiry: ${projectTitle}`)}
      />

      {/* Service Details Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(serviceTitle) => scrollToConsultation(serviceTitle)}
      />

      {/* Privacy & Terms Modals */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}
