import React from 'react';
import { UserCheck, Sparkles, Compass, Gem, Star, Award, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { BusinessInfo } from '../types';
import { Button } from './ui/Button';

interface WhyChooseUsProps {
  businessInfo: BusinessInfo;
  onBookConsultation: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ businessInfo, onBookConsultation }) => {
  const principles = [
    {
      title: 'Personalized Design Approach',
      desc: 'We never apply cookie-cutter schemes. Every spatial layout, millwork detail, and textile is orchestrated around your unique lifestyle routines and aesthetic desires.',
      icon: <UserCheck className="w-6 h-6 text-[#C5A880]" />,
    },
    {
      title: 'Functional and Beautiful Spaces',
      desc: 'True luxury lives in effortless ease. We balance acoustic comfort, hidden smart storage, and intuitive natural flow so rooms are as wonderful to live in as they are to admire.',
      icon: <Sparkles className="w-6 h-6 text-[#C5A880]" />,
    },
    {
      title: 'Attention to Detail',
      desc: 'From microscopic shadow reveals and grain-matched veneers to flush architectural electrical plates, our comprehensive detailing ensures execution with zero compromise.',
      icon: <Compass className="w-6 h-6 text-[#C5A880]" />,
    },
    {
      title: 'Thoughtful Material Selection',
      desc: 'We curate tactile, resilient materials: natural marbles, kiln-seasoned hardwoods, low-VOC finishes, and luxury textiles engineered to age gracefully with time.',
      icon: <Gem className="w-6 h-6 text-[#C5A880]" />,
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#181614] text-[#FAF8F5] relative overflow-hidden">
      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#C5A880] mb-2 block">
            WHY CHOOSE FINEX
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white mb-4">
            Distinction in Every Detail
          </h2>
          <p className="text-[#A8A29E] text-sm sm:text-base leading-relaxed">
            Our multidisciplinary studio combines architectural rigor with bespoke interior craftsmanship to bring your vision to life.
          </p>
        </motion.div>

        {/* 4 Pillars Grid with motion entrance - Uniform height cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 items-stretch">
          {principles.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -6, backgroundColor: '#262320' }}
              className="bg-[#24211E]/80 border border-[#3E3832] rounded-2xl p-6 hover:border-[#C5A880]/60 transition-all duration-300 flex flex-col justify-between group h-full"
            >
              <div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  className="w-12 h-12 rounded-xl bg-[#1C1917] border border-[#3E3832] group-hover:border-[#C5A880]/50 flex items-center justify-center mb-5 transition-colors"
                >
                  {item.icon}
                </motion.div>
                <h3 className="font-serif text-lg sm:text-xl font-medium text-white mb-3 group-hover:text-[#C5A880] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A8A29E] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#332E29] flex items-center text-[11px] font-semibold tracking-wider uppercase text-[#C5A880]/80">
                <span>Finex Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Metrics / Verified Principles Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#201D1A] rounded-2xl border border-[#3E3832] p-6 sm:p-8 shadow-xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#332E29]">
            
            {/* 1. Rating */}
            <div className="flex flex-col items-center text-center p-2">
              <div className="flex items-center gap-1 text-[#E0A93B] mb-2">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  {businessInfo.rating.toFixed(1)}
                </span>
              </div>
              <p className="text-xs uppercase tracking-wider text-[#A8A29E] font-medium">
                Google Business Rating
              </p>
              <p className="text-[11px] text-[#78716C] mt-0.5">
                {businessInfo.reviewCount}+ Verified Local Reviews
              </p>
            </div>

            {/* 2. Bespoke */}
            <div className="flex flex-col items-center text-center p-2 pt-4 sm:pt-2">
              <div className="flex items-center gap-1.5 text-[#C5A880] mb-2">
                <Layers className="w-5 h-5" />
                <span className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  100%
                </span>
              </div>
              <p className="text-xs uppercase tracking-wider text-[#A8A29E] font-medium">
                Custom Tailored
              </p>
              <p className="text-[11px] text-[#78716C] mt-0.5">
                Bespoke layouts &amp; custom joinery
              </p>
            </div>

            {/* 3. Visuals */}
            <div className="flex flex-col items-center text-center p-2 pt-4 sm:pt-2">
              <div className="flex items-center gap-1.5 text-[#C5A880] mb-2">
                <Award className="w-5 h-5" />
                <span className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  Ultra-HD
                </span>
              </div>
              <p className="text-xs uppercase tracking-wider text-[#A8875C] font-medium">
                3D CGI Visualization
              </p>
              <p className="text-[11px] text-[#78716C] mt-0.5">
                Full 4K realistic spatial previews
              </p>
            </div>

            {/* 4. Turnkey */}
            <div className="flex flex-col items-center text-center p-2 pt-4 sm:pt-2">
              <div className="flex items-center gap-1.5 text-[#C5A880] mb-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  Turnkey
                </span>
              </div>
              <p className="text-xs uppercase tracking-wider text-[#A8A29E] font-medium">
                End-to-End Execution
              </p>
              <p className="text-[11px] text-[#78716C] mt-0.5">
                Design to white-glove handover
              </p>
            </div>

          </div>
        </motion.div>

        {/* Section bottom CTA with reusable Button */}
        <div className="mt-12 flex justify-center">
          <Button
            variant="gold"
            size="lg"
            onClick={onBookConsultation}
            icon={<ArrowRight className="w-4 h-4 text-[#1C1917]" />}
          >
            Start Your Space Journey With Us
          </Button>
        </div>

      </div>
    </section>
  );
};
