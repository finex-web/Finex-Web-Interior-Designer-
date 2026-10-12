import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TestimonialItem, BusinessInfo } from '../types';

interface TestimonialCarouselProps {
  testimonials: TestimonialItem[];
  businessInfo: BusinessInfo;
  onBookConsultation: () => void;
}

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
  businessInfo,
  onBookConsultation,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute left-1/2 -top-20 -translate-x-1/2 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#F5F1E9] text-[#78716C] border border-[#EAE3D2] px-2.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-2.5 h-2.5 text-[#C5A880]" />
              <span>Demo Content • Illustrative Client Profiles</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-medium leading-tight">
              Concept Reviews &amp; Client Feedback
            </h2>
            <p className="text-[#78716C] text-sm mt-1">
              Sample testimonials illustrating client experiences with our conceptual design solutions.
            </p>
          </div>

          {/* Navigation Controls with 44px min touch target */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-[#D7CBB5] bg-white hover:bg-[#FAF8F5] text-[#1C1917] flex items-center justify-center transition-all shadow-xs cursor-pointer touch-target"
            >
              <ChevronLeft className="w-5 h-5 text-[#1C1917]" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-[#D7CBB5] bg-white hover:bg-[#FAF8F5] text-[#1C1917] flex items-center justify-center transition-all shadow-xs cursor-pointer touch-target"
            >
              <ChevronRight className="w-5 h-5 text-[#1C1917]" />
            </motion.button>
          </div>
        </div>

        {/* Testimonial Active Slide with AnimatePresence */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative min-h-[320px] sm:min-h-[260px] bg-white rounded-3xl p-8 sm:p-12 border border-[#EAE3D2] shadow-lg shadow-stone-200/50 flex flex-col justify-between"
        >
          {/* Subtle gold quote mark watermark */}
          <Quote className="absolute top-6 right-8 w-20 h-20 text-[#FAF8F5] -z-0 pointer-events-none fill-[#FAF5EE]" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="relative z-10 flex-1 flex flex-col justify-between"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 text-[#E0A93B] mb-5">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#D89B2B]" />
                  ))}
                  <span className="text-xs font-bold text-[#1C1917] ml-2">
                    5.0 / 5.0
                  </span>
                  {current.verifiedSource && (
                    <span className="ml-2 inline-flex items-center gap-1 text-[11px] font-semibold text-[#1E7E34] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      <ShieldCheck className="w-3 h-3" />
                      <span>{current.verifiedSource}</span>
                    </span>
                  )}
                </div>

                {/* Quotation text */}
                <p className="font-serif text-lg sm:text-2xl text-[#1C1917] leading-relaxed italic mb-8">
                  &ldquo;{current.quote}&rdquo;
                </p>
              </div>

              {/* Client Info footer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#F5F1E9]">
                <div className="flex items-center gap-3.5">
                  <img
                    src={current.avatar}
                    alt={current.clientName}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#C5A880]/40 shadow-xs"
                  />
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#1C1917]">
                      {current.clientName}
                    </h4>
                    <p className="text-xs text-[#78716C]">
                      {current.projectType} • {current.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-xs font-semibold text-[#A8875C] bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#EAE3D2]">
                    Sample Case Study
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8 pt-2">
            {testimonials.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer py-1.5 ${
                  currentIndex === idx
                    ? 'w-8 h-2 bg-[#1C1917]'
                    : 'w-2.5 h-2 bg-[#D7CBB5] hover:bg-[#A8875C]'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
