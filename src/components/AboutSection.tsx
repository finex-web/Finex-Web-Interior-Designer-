import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/Button';

interface AboutSectionProps {
  onLearnMore: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  const benefits = [
    { title: 'Personalized Design Solutions', desc: 'Custom blueprints tailored to your lifestyle and aesthetic aspirations.' },
    { title: 'High-Quality Materials', desc: 'Sourced directly from verified quarries, timber yards, and premier mills.' },
    { title: 'On-Time Project Delivery', desc: 'Rigorous milestone schedules and dedicated on-site supervision.' },
    { title: 'Creative & Innovative Ideas', desc: 'Modern space-saving joinery, lighting psychology, and clean lines.' },
    { title: 'Client-Focused Approach', desc: 'Collaborative feedback loops at every review milestone.' },
    { title: 'Sustainable & Timeless Design', desc: 'Eco-conscious materials and durable engineering that transcends trends.' },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Decorative background shape with muted olive tint */}
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-[#5A6855]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Asymmetrical Layered Photography with motion reveal */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 relative"
          >
            {/* Subtle decorative offset border behind image */}
            <div className="absolute -inset-3 rounded-3xl border border-[#C5A880]/30 -rotate-1 pointer-events-none hidden sm:block" />

            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-stone-900/10 border border-[#EAE3D2] bg-white aspect-[4/3] sm:aspect-[16/12] group">
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                src="https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1400&q=85"
                alt="Luxury dining room interior with warm chandelier lighting, green velvet chairs, and marble dining table"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating accent badge with gold and olive warmth */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-4 right-4 sm:-bottom-5 sm:right-8 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl border border-[#EAE3D2] shadow-xl"
            >
              <p className="font-serif italic text-base sm:text-lg text-[#1C1917] font-semibold">
                &ldquo;Where form meets feeling.&rdquo;
              </p>
              <p className="text-[11px] text-[#A8875C] font-medium uppercase tracking-wider">
                FINEX Studio Ethos
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Content with staggered entrance */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Tag */}
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#A8875C] mb-2.5">
              ABOUT US
            </span>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl xl:text-4.5xl text-[#1C1917] font-normal leading-[1.2] mb-5">
              Designing More Than Just Spaces —{' '}
              <span className="font-serif italic text-[#A8875C] font-semibold">
                Creating Experiences.
              </span>
            </h2>

            {/* Description */}
            <p className="text-[#57534E] text-base leading-relaxed mb-8">
              At FINEX Interior Designer, we believe every space holds an innate story waiting to be expressed.
              Our mission is to seamlessly blend architectural creativity, ergonomic functionality, and timeless
              material elegance to transform everyday interiors into truly inspiring sanctuaries.
            </p>

            {/* 2-Column Benefits Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 mb-9">
              {benefits.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.08 * idx }}
                  className="flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5 fill-[#FAF8F5]" />
                  <div>
                    <span className="text-sm font-semibold text-[#1C1917] block leading-tight">
                      {item.title}
                    </span>
                    <span className="text-[11.5px] text-[#78716C] leading-normal">
                      {item.desc}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Perfectly Aligned CTA Button using reusable Button */}
            <div className="flex">
              <Button
                variant="primary"
                size="md"
                onClick={onLearnMore}
                icon={<ArrowRight className="w-4 h-4 text-[#C5A880]" />}
              >
                Learn More About Us
              </Button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
