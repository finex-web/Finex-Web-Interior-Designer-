import React, { useState } from 'react';
import { ArrowRight, Eye, Sparkles, MapPin, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectItem } from '../types';
import { Button } from './ui/Button';

interface ProjectGalleryProps {
  projects: ProjectItem[];
  onOpenProject: (project: ProjectItem) => void;
  onViewAllProjects: () => void;
  onDiscussSpace: () => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  projects,
  onOpenProject,
  onViewAllProjects,
  onDiscussSpace,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [showAll, setShowAll] = useState(false);

  // Exact categories: Residential, Living Room, Bedroom, Kitchen, Commercial
  const categories = ['All', 'Residential', 'Living Room', 'Bedroom', 'Kitchen', 'Commercial'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#F5F1E9]/40 border-y border-[#EAE3D2]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#A8875C] mb-2 block">
              OUR PROJECTS &amp; PORTFOLIO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-medium leading-tight">
              Spaces We&apos;re Proud Of
            </h2>
            <p className="text-[#78716C] text-sm mt-1 max-w-xl">
              Explore our curated portfolio of residential architecture, bespoke kitchens, serene bedrooms, and executive commercial interiors.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setShowAll(!showAll)}
              icon={<ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />}
            >
              {showAll ? 'Show Featured 4' : 'View All Projects'}
            </Button>
          </div>
        </div>

        {/* Category Filters with smooth layout indicator & min touch targets */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative min-h-[42px] px-4.5 py-2 rounded-full text-xs font-medium transition-all cursor-pointer focus:outline-hidden touch-target flex items-center justify-center ${
                activeCategory === cat
                  ? 'text-white'
                  : 'text-[#57534E] bg-white border border-[#EAE3D2] hover:border-[#C5A880] hover:text-[#1C1917]'
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeCategoryPill"
                  className="absolute inset-0 bg-[#1C1917] rounded-full shadow-xs"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat === 'All' ? 'All Spaces' : cat}</span>
            </button>
          ))}
        </div>

        {/* Animated Project Cards Grid - Cards have uniform flex-col layout so bottom actions line up strictly */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                onClick={() => onOpenProject(project)}
                className="group bg-white rounded-2xl overflow-hidden border border-[#EAE3D2] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full cursor-pointer"
              >
                {/* Image Container with Zoom Reveal */}
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 shrink-0">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Floating Category Pill */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-semibold text-[#1C1917] border border-white/60 shadow-xs">
                    {project.categoryLabel}
                  </div>

                  {/* Interactive Quick Inspect Overlay */}
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-white/95 text-xs font-semibold text-[#1C1917] flex items-center gap-1.5 shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      <Maximize2 className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>Explore Gallery</span>
                    </span>
                  </div>
                </div>

                {/* Card Meta Content with mt-auto to strictly align bottom action button row across all cards */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#1C1917] group-hover:text-[#A8875C] transition-colors mb-1 leading-snug">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-1 text-[11px] text-[#A8875C] font-medium mb-2.5">
                      <MapPin className="w-3 h-3 shrink-0" />
                      <span>{project.location}</span>
                    </div>

                    <p className="text-xs text-[#78716C] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Color Palette Indicators & Space specs - Aligned horizontally across all cards */}
                  <div className="mt-auto pt-4 border-t border-[#F5F1E9] flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-[#A8A29E] uppercase font-medium">Palette:</span>
                      <div className="flex -space-x-1">
                        {project.palette.map((color, idx) => (
                          <span
                            key={idx}
                            className="w-3.5 h-3.5 rounded-full border border-white shadow-2xs"
                            style={{ backgroundColor: color }}
                            title={color}
                          />
                        ))}
                      </div>
                    </div>

                    <span className="text-[11px] font-semibold text-[#1C1917] group-hover:text-[#C5A880] transition-colors flex items-center gap-0.5">
                      Inspect
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner with perfectly aligned "Discuss Your Space" CTA */}
        <div className="mt-12 bg-white rounded-2xl border border-[#EAE3D2] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#EAE3D2] flex items-center justify-center text-[#A8875C] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1C1917]">
                Envisioning a custom layout for your home or commercial premises?
              </h4>
              <p className="text-xs text-[#78716C]">
                Our interior architects craft tailored 3D walkthroughs and material specifications for every floorplan.
              </p>
            </div>
          </div>

          <Button
            variant="primary"
            size="sm"
            onClick={onDiscussSpace}
            icon={<ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />}
            className="shrink-0"
          >
            Discuss Your Space
          </Button>
        </div>

      </div>
    </section>
  );
};
