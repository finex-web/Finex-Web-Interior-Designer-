import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/Button';

interface NavbarProps {
  onBookConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = ['home', 'services', 'about', 'projects', 'why-us', 'testimonials', 'philosophy', 'consultation'];
      const scrollPosition = window.scrollY + 220;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Why Finex', href: '#why-us', id: 'why-us' },
    { name: 'Reviews', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#consultation', id: 'consultation' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md shadow-sm border-b border-[#EAE3D2] py-2.5 sm:py-3'
          : 'bg-[#FAF8F5] border-b border-[#EAE3D2]/40 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Brand Logo with hover glow */}
        <a href="#home" className="flex items-center gap-3 group focus:outline-hidden">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl border border-[#C5A880]/60 bg-white flex items-center justify-center shadow-xs group-hover:border-[#C5A880] transition-colors shrink-0"
          >
            <svg
              className="w-5 h-5 text-[#2B2118] stroke-current"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <path d="M9 22V12h6v10" />
              <path d="M12 2v7" />
            </svg>
          </motion.div>
          <div>
            <span className="block font-serif text-lg sm:text-xl font-bold tracking-wider text-[#1C1917] leading-tight group-hover:text-[#A8875C] transition-colors">
              FINEX
            </span>
            <span className="block text-[9px] sm:text-[10px] tracking-[0.25em] text-[#A8875C] font-semibold uppercase">
              Interior Designer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[13.5px] font-medium text-[#44403C]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`relative py-1.5 transition-colors hover:text-[#1C1917] focus:outline-hidden ${
                activeSection === link.id ? 'text-[#1C1917] font-semibold' : ''
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A880] rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button using reusable Button */}
        <div className="hidden lg:flex items-center">
          <Button
            variant="primary"
            size="sm"
            onClick={onBookConsultation}
            icon={<ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />}
          >
            Book a Consultation
          </Button>
        </div>

        {/* Mobile Hamburger Button with 44px min touch target */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-11 h-11 rounded-xl text-[#1C1917] hover:bg-[#F2ECE1] transition-colors flex items-center justify-center cursor-pointer touch-target"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-[#FAF8F5] border-b border-[#EAE3D2] px-6 py-6 space-y-5 shadow-xl"
          >
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-base font-medium py-2.5 px-3 rounded-lg transition-colors flex items-center justify-between ${
                    activeSection === link.id ? 'bg-[#F5F1E9] text-[#1C1917] font-semibold' : 'text-[#44403C] hover:bg-[#F5F1E9]/50'
                  }`}
                >
                  <span>{link.name}</span>
                  {activeSection === link.id && (
                    <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
                  )}
                </a>
              ))}
            </nav>
            <div className="pt-3 border-t border-[#EAE3D2]">
              <Button
                variant="primary"
                size="md"
                fullWidth
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookConsultation();
                }}
                icon={<Sparkles className="w-4 h-4 text-[#C5A880]" />}
                iconPosition="left"
              >
                Book a Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
