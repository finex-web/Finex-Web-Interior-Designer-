import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Instagram,
  Linkedin,
  Facebook,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import { BusinessInfo } from '../types';
import { Button } from './ui/Button';

interface FooterProps {
  businessInfo: BusinessInfo;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onBookConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  businessInfo,
  onOpenPrivacy,
  onOpenTerms,
  onBookConsultation,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#EAE3D2] text-[#44403C] text-sm pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Newsletter Subscription Bar with Aligned Input & Button */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EAE3D2] shadow-xs mb-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-md">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A8875C] block mb-1">
              FINEX CURATION • DEMO JOURNAL
            </span>
            <h4 className="font-serif text-xl sm:text-2xl text-[#1C1917] font-semibold">
              Stay Inspired
            </h4>
            <p className="text-xs sm:text-sm text-[#78716C] mt-1">
              Sample design digest for exploring modern architectural curation and materials trends.
            </p>
          </div>

          <div className="w-full md:w-auto">
            {newsletterSubscribed ? (
              <div className="flex items-center gap-2 bg-[#F5F1E9] text-[#1C1917] px-5 py-3 rounded-full text-xs font-medium border border-[#EAE3D2]">
                <CheckCircle className="w-4 h-4 text-[#A8875C]" />
                <span>Simulated subscription confirmed (demo mode).</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-[400px]">
                <input
                  type="email"
                  required
                  placeholder="Enter a demo email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="min-h-[46px] px-4 py-2.5 rounded-full border border-[#D7CBB5] bg-[#FAF8F5] text-xs text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#C5A880] flex-1"
                />
                <Button
                  variant="primary"
                  size="sm"
                  type="submit"
                  className="shrink-0"
                >
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* 4 Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#EAE3D2]">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg border border-[#C5A880]/50 bg-white flex items-center justify-center shadow-xs">
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
              </div>
              <div>
                <span className="block font-serif text-lg font-bold tracking-wider text-[#1C1917] leading-tight">
                  FINEX
                </span>
                <span className="block text-[9px] tracking-[0.25em] text-[#A8875C] font-semibold uppercase">
                  Interior Designer
                </span>
              </div>
            </div>

            <p className="text-xs text-[#78716C] leading-relaxed max-w-sm">
              Creating beautiful, functional, and timeless spaces that inspire the way people live and work.
              A luxury interior architecture concept showcase.
            </p>

            {/* Social Demo Icons with Safe Links */}
            <div className="flex items-center gap-3 pt-2 text-[#78716C]">
              <a
                href="#demo-social"
                aria-label="Facebook (Demo)"
                className="w-10 h-10 rounded-full border border-[#EAE3D2] bg-white flex items-center justify-center hover:text-[#1C1917] hover:border-[#1C1917] transition-colors touch-target"
                title="Demo social link"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#demo-social"
                aria-label="Instagram (Demo)"
                className="w-10 h-10 rounded-full border border-[#EAE3D2] bg-white flex items-center justify-center hover:text-[#1C1917] hover:border-[#1C1917] transition-colors touch-target"
                title="Demo social link"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#demo-social"
                aria-label="Pinterest (Demo)"
                className="w-10 h-10 rounded-full border border-[#EAE3D2] bg-white flex items-center justify-center hover:text-[#1C1917] hover:border-[#1C1917] transition-colors touch-target"
                title="Demo social link"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0a12 12 0 0 0-4.37 23.18c-.06-.94-.1-2.38.02-3.41l.73-3.1s-.19-.38-.19-.94c0-.88.51-1.54 1.15-1.54.54 0 .8.41.8.9 0 .55-.35 1.37-.53 2.13-.15.64.32 1.16.95 1.16 1.14 0 2.02-1.2 2.02-2.93 0-1.53-1.1-2.6-2.67-2.6-1.95 0-3.09 1.46-3.09 2.97 0 .59.23 1.22.51 1.56.06.07.06.13.05.2l-.19.78c-.03.13-.1.17-.23.11-1.07-.5-1.74-2.07-1.74-3.33 0-2.71 1.97-5.2 5.68-5.2 2.98 0 5.3 2.12 5.3 4.96 0 2.96-1.87 5.34-4.46 5.34-.87 0-1.69-.45-1.97-.98l-.54 2.05c-.19.75-.72 1.68-1.07 2.25A12 12 0 1 0 12 0z"/>
                </svg>
              </a>
              <a
                href="#demo-social"
                aria-label="LinkedIn (Demo)"
                className="w-10 h-10 rounded-full border border-[#EAE3D2] bg-white flex items-center justify-center hover:text-[#1C1917] hover:border-[#1C1917] transition-colors touch-target"
                title="Demo social link"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="font-serif text-sm font-semibold text-[#1C1917] uppercase tracking-wider">
              Quick Links
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollTo('home')}
                  className="hover:text-[#1C1917] transition-colors cursor-pointer py-1 block"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-[#1C1917] transition-colors cursor-pointer py-1 block"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-[#1C1917] transition-colors cursor-pointer py-1 block"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('projects')}
                  className="hover:text-[#1C1917] transition-colors cursor-pointer py-1 block"
                >
                  Projects &amp; Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('why-us')}
                  className="hover:text-[#1C1917] transition-colors cursor-pointer py-1 block"
                >
                  Why Finex
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('testimonials')}
                  className="hover:text-[#1C1917] transition-colors cursor-pointer py-1 block"
                >
                  Concept Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('philosophy')}
                  className="hover:text-[#1C1917] transition-colors cursor-pointer py-1 block"
                >
                  Design Philosophy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="font-serif text-sm font-semibold text-[#1C1917] uppercase tracking-wider">
              Our Services
            </h5>
            <ul className="space-y-2 text-xs text-[#57534E]">
              <li className="py-0.5">Residential Interior Architecture</li>
              <li className="py-0.5">Commercial &amp; Executive Workspaces</li>
              <li className="py-0.5">Comprehensive Space Planning</li>
              <li className="py-0.5">Photorealistic 3D CGI Visualizations</li>
              <li className="py-0.5">Turnkey Interior Solutions</li>
              <li className="py-0.5">Bespoke Millwork &amp; Travertine Joinery</li>
            </ul>
          </div>

          {/* Column 4: Fictional Demo Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="font-serif text-sm font-semibold text-[#1C1917] uppercase tracking-wider">
              Contact Us (Demo)
            </h5>
            <div className="space-y-2.5 text-xs text-[#57534E]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                <span>
                  {businessInfo.address}, {businessInfo.city}, {businessInfo.state} {businessInfo.pincode}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <span className="font-medium text-[#1C1917]">
                  {businessInfo.phoneDisplay}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-[#1C1917] transition-colors break-all">
                  {businessInfo.email}
                </a>
              </div>

              <div className="pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onBookConsultation}
                  icon={<ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />}
                >
                  Book a Consultation
                </Button>
              </div>
            </div>
          </div>

        </div>

        {/* Demo Disclaimer Banner */}
        <div className="my-6 p-4 rounded-xl bg-[#F5F1E9]/80 border border-[#EAE3D2] flex items-center justify-between gap-3 text-xs text-[#78716C]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#A8875C] shrink-0" />
            <span>
              <strong>Concept Portfolio Notice:</strong> This website is an illustrative interior design showcase. All studio details, client names, reviews, addresses, and specifications are fictional demo data.
            </span>
          </div>
        </div>

        {/* Bottom Sub-Footer: Copyright, Legal & FINEX WEB Credit */}
        <div className="pt-6 border-t border-[#EAE3D2]/70 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#78716C]">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p className="font-medium text-[#57534E]">
              © 2026 FINEX Interior Designer. Demo Website.
            </p>
            <span className="hidden sm:inline text-[#D7CBB5]">•</span>
            <div className="flex items-center gap-4">
              <button
                onClick={onOpenPrivacy}
                className="hover:text-[#1C1917] transition-colors cursor-pointer py-1"
              >
                Privacy Policy (Demo)
              </button>
              <button
                onClick={onOpenTerms}
                className="hover:text-[#1C1917] transition-colors cursor-pointer py-1"
              >
                Terms of Service (Demo)
              </button>
            </div>
          </div>

          {/* Professional FINEX WEB Branding Credit */}
          <div className="flex items-center gap-1.5 text-xs text-[#78716C] bg-white/70 px-3.5 py-1.5 rounded-full border border-[#EAE3D2] shadow-2xs">
            <span>Made with <span className="text-[#A8875C] inline-block scale-110">♥</span> by</span>
            <a
              href="#finex-web"
              className="font-bold tracking-wider text-[#1C1917] hover:text-[#A8875C] transition-colors relative py-0.5 group inline-flex items-center"
              title="Crafted by FINEX WEB"
            >
              <span>FINEX WEB</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A880] transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
