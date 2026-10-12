import React from 'react';
import { Home, Building2, Grid, Box, Key, ChevronRight, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { ServiceItem } from '../types';

interface ServicesPanelProps {
  services: ServiceItem[];
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesPanel: React.FC<ServicesPanelProps> = ({ services, onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return <Home className="w-6 h-6" />;
      case 'building':
        return <Building2 className="w-6 h-6" />;
      case 'layout':
        return <Grid className="w-6 h-6" />;
      case 'box':
        return <Box className="w-6 h-6" />;
      case 'key':
        return <Key className="w-6 h-6" />;
      default:
        return <Home className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="relative -mt-6 sm:-mt-10 z-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Floating White Card with scroll-triggered motion */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-stone-200/70 border border-[#EAE3D2] p-5 sm:p-7 md:p-8"
        >
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F4EFE6]">
            <div>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#A8875C]">
                Core Competencies
              </span>
              <h2 className="font-serif text-xl sm:text-2xl text-[#1C1917] font-medium">
                Tailored Interior Services
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-xs text-[#78716C] bg-[#FAF8F5] px-3 py-1.5 rounded-full border border-[#EAE3D2]">
              <Info className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Click any service to view full specifications</span>
            </div>
          </div>

          {/* 5-Column Grid with interactive hover cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3 divide-y sm:divide-y-0 lg:divide-x divide-[#F4EFE6]">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                onClick={() => onSelectService(service)}
                className={`pt-4 sm:pt-0 ${
                  index > 0 ? 'lg:pl-4' : ''
                } group cursor-pointer p-3 rounded-xl hover:bg-[#FAF8F5] transition-all flex flex-col justify-between`}
              >
                <div>
                  {/* Line icon container with hover illumination */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#EAE3D2] text-[#2C241E] flex items-center justify-center mb-3.5 group-hover:bg-[#1C1917] group-hover:text-[#C5A880] group-hover:border-[#1C1917] transition-all duration-300 shadow-2xs"
                  >
                    {getIcon(service.iconName)}
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-[#1C1917] group-hover:text-[#A8875C] transition-colors leading-snug mb-1.5">
                    {service.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-xs text-[#78716C] leading-relaxed mb-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Subtext link with hover arrow nudge */}
                <div className="inline-flex items-center text-xs font-medium text-[#A8875C] group-hover:text-[#1C1917] transition-colors mt-auto pt-1">
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 pt-3 border-t border-[#F4EFE6] text-center">
            <p className="text-[11px] text-[#A8A29E] italic">
              * Comprehensive architectural planning and turnkey execution. Custom bespoke packages available upon consultation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
