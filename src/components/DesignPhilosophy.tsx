import React from 'react';
import { Star, Check, Sparkles, HeartHandshake } from 'lucide-react';
import { BusinessInfo } from '../types';
import { PHILOSOPHY_PILLARS } from '../data/businessData';
import { Button } from './ui/Button';

interface DesignPhilosophyProps {
  businessInfo: BusinessInfo;
  onBookConsultation: () => void;
}

export const DesignPhilosophy: React.FC<DesignPhilosophyProps> = ({
  businessInfo,
  onBookConsultation,
}) => {
  return (
    <section id="philosophy" className="py-20 sm:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#F5F1E9] text-[#78716C] border border-[#EAE3D2] px-2.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-2.5 h-2.5 text-[#C5A880]" />
            <span>Design Approach</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1917] leading-tight mb-4">
            Our Design Philosophy &amp; Studio Standards
          </h2>
          <p className="text-[#57534E] text-base leading-relaxed">
            We hold ourselves to authentic architectural standards: creating homes and work environments that enrich lives through spatial harmony, material honesty, and impeccable execution.
          </p>
        </div>

        {/* 3 Philosophy Pillars - Uniform heights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-[#EAE3D2] shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between h-full"
            >
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#A8875C] block mb-2">
                  {pillar.tagline}
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#1C1917] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#78716C] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F5F1E9] flex items-center gap-2 text-xs font-medium text-[#1C1917]">
                <Check className="w-4 h-4 text-[#C5A880]" />
                <span>Finex Studio Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Concept Banner */}
        <div className="bg-gradient-to-r from-[#F5F1E9] to-[#EFE9DF] rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-[#D7CBB5] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-start sm:items-center gap-4">
            {/* Architectural Monogram Box */}
            <div className="w-14 h-14 rounded-2xl bg-white border border-[#D7CBB5] shadow-xs flex items-center justify-center shrink-0">
              <svg
                className="w-7 h-7 text-[#1C1917]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
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
              <div className="flex items-center gap-2 mb-1">
                <div className="flex items-center text-[#E0A93B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#D89B2B]" />
                  ))}
                </div>
                <span className="font-bold text-lg text-[#1C1917]">
                  5.0 / 5.0 (Concept Rating)
                </span>
              </div>
              <p className="text-sm text-[#44403C] font-medium">
                FINEX Studio Concept Portfolio • Demonstrative Architecture
              </p>
              <p className="text-xs text-[#78716C] mt-0.5">
                {businessInfo.name} • {businessInfo.city}, {businessInfo.state}
              </p>
            </div>
          </div>

          {/* Perfectly Aligned Button Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <Button
              variant="primary"
              size="md"
              onClick={onBookConsultation}
              icon={<HeartHandshake className="w-4 h-4 text-[#C5A880]" />}
            >
              Explore Consultation Flow
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
