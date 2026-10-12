import React from 'react';
import { ArrowRight, Star, Award, ShieldCheck } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { BusinessInfo } from '../types';
import { Button } from './ui/Button';

interface HeroSectionProps {
  businessInfo: BusinessInfo;
  onExploreWork: () => void;
  onBookConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  businessInfo,
  onExploreWork,
  onBookConsultation,
}) => {
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 500], [0, 45]);
  const heroBgY = useTransform(scrollY, [0, 500], [0, -30]);

  // Staggered words for luxury heading entrance
  const headingWordsLine1 = ['Beautiful', 'Interiors.'];
  const headingWordsLine2 = ['Inspired', 'Living.'];

  return (
    <section id="home" className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 overflow-hidden">
      {/* Slow elegant ambient floating gradients */}
      <motion.div
        style={{ y: heroBgY }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-10 right-1/4 w-96 h-96 bg-gradient-to-br from-[#C5A880]/20 via-[#5A6855]/12 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
      />

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-tr from-[#EAE3D2]/40 via-[#C5A880]/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-center z-10">
            
            {/* Animated Eyebrow with decorative line */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2.5 mb-3.5"
            >
              <span className="font-serif italic text-lg sm:text-xl text-[#A8875C] tracking-wide font-medium">
                Designing Spaces.
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="w-8 h-[1px] bg-[#C5A880] origin-left inline-block"
              />
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#78716C] font-semibold">
                Elevating Living
              </span>
            </motion.div>

            {/* Headline with Word-by-Word Upward Reveal */}
            <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl text-[#1C1917] font-normal leading-[1.12] tracking-tight mb-5">
              <span className="inline-block overflow-hidden mr-2">
                {headingWordsLine1.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.15 + i * 0.12,
                      ease: 'easeOut',
                    }}
                    className="inline-block mr-2.5"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <br />
              <span className="inline-block overflow-hidden font-serif italic text-[#A8875C] font-semibold mt-1">
                {headingWordsLine2.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.45 + i * 0.12,
                      ease: 'easeOut',
                    }}
                    className="inline-block mr-2.5"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Description sequential reveal */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
              className="text-[#57534E] text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-lg"
            >
              Transform your space with thoughtful interior design that combines comfort,
              functionality, and timeless elegance.
            </motion.p>

            {/* Perfectly Aligned Button Group */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10"
            >
              <Button
                variant="primary"
                size="md"
                onClick={onExploreWork}
                icon={<ArrowRight className="w-4 h-4 text-[#C5A880]" />}
                className="group"
              >
                Explore Our Projects
              </Button>

              <Button
                variant="secondary"
                size="md"
                onClick={onBookConsultation}
              >
                Book a Consultation
              </Button>
            </motion.div>

            {/* Social Proof with clearly labeled demo rating */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1, ease: 'easeOut' }}
              className="flex items-center gap-4 pt-2 border-t border-[#EAE3D2]/80"
            >
              {/* Stacked client avatars */}
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#FAF8F5] object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  alt="Demo client concept"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#FAF8F5] object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Demo client concept"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#FAF8F5] object-cover"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                  alt="Demo client concept"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#FAF8F5] object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                  alt="Demo client concept"
                />
              </div>

              {/* Rating text with demo indicator */}
              <div>
                <div className="flex items-center gap-1 text-[#E0A93B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current text-[#D89B2B]" />
                  ))}
                  <span className="text-xs font-bold text-[#1C1917] ml-1">
                    5.0
                  </span>
                  <span className="text-[11px] text-[#78716C]">
                    (Demo Concept Score)
                  </span>
                </div>
                <p className="text-[11.5px] text-[#78716C] font-medium tracking-tight mt-0.5">
                  Illustrative client feedback &amp; concept reviews
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Interior Photography with Parallax & Fictional Badge */}
          <motion.div
            style={{ y: heroImageY }}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="lg:col-span-7 relative"
          >
            {/* Architectural Layered Framing */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-stone-900/10 border border-[#EAE3D2] bg-white aspect-[4/3] sm:aspect-[16/11] group">
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
                alt="Luxury living room featuring curved modular sofa, warm brass lighting, and marble table concept"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />

              {/* Subtle ambient lighting vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

              {/* Floating aesthetic badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/60 shadow-lg flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#C5A880]/40 flex items-center justify-center text-[#A8875C]">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#A8875C] font-semibold">
                    Signature Concepts
                  </p>
                  <p className="text-xs font-semibold text-[#1C1917]">
                    Bespoke Luxury Curation
                  </p>
                </div>
              </motion.div>

              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-black/45 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white text-[11px] font-medium flex items-center gap-1.5 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Concept Design Studio</span>
              </div>
            </div>

            {/* Muted olive decorative backdrop element */}
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#5A6855]/12 rounded-full blur-2xl -z-10 pointer-events-none" />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#C5A880]/15 rounded-full blur-2xl -z-10 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
