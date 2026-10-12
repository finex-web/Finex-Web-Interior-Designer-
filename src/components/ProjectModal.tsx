import React, { useState } from 'react';
import { X, Check, ArrowRight, MapPin, Sparkles, ChevronLeft, ChevronRight, Layers, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectItem } from '../types';
import { Button } from './ui/Button';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const images = project.galleryImages && project.galleryImages.length > 0
    ? project.galleryImages
    : [project.image];

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/65 backdrop-blur-md transition-opacity"
          onClick={onClose}
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#EAE3D2] z-10 max-h-[90vh] flex flex-col"
        >
          {/* Close Button with 44px min touch target */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center transition-colors cursor-pointer touch-target"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Scrollable Content */}
          <div className="overflow-y-auto flex-1">
            {/* Gallery Image Display with Prev/Next Controls */}
            <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImageIndex}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={images[activeImageIndex]}
                  alt={`${project.title} - view ${activeImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />
              
              {/* Image Navigation Arrows */}
              {images.length > 1 && (
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors touch-target"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors touch-target"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}

              {/* Title & Location Overlay */}
              <div className="absolute bottom-5 left-6 right-6 text-white pointer-events-none">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider">
                    {project.categoryLabel}
                  </span>
                  {project.area && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium">
                      <Layers className="w-3 h-3 text-[#C5A880]" />
                      <span>{project.area}</span>
                    </span>
                  )}
                  {project.duration && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium">
                      <Clock className="w-3 h-3 text-[#C5A880]" />
                      <span>{project.duration}</span>
                    </span>
                  )}
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold">
                  {project.title}
                </h2>
                <div className="flex items-center gap-1.5 text-xs text-[#FAF8F5]/85 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{project.location}</span>
                </div>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {images.length > 1 && (
              <div className="flex items-center gap-2.5 p-3.5 bg-[#FAF8F5] border-b border-[#EAE3D2] overflow-x-auto">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx ? 'border-[#1C1917] scale-105 shadow-sm' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Details Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs uppercase font-bold tracking-widest text-[#A8875C] mb-2">
                  Design Narrative &amp; Approach
                </h4>
                <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                  {project.fullStory}
                </p>
              </div>

              {/* Architectural Highlights */}
              <div>
                <h4 className="text-xs uppercase font-bold tracking-widest text-[#A8875C] mb-3">
                  Key Architectural Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#1C1917] bg-[#FAF8F5] p-2.5 rounded-xl border border-[#EAE3D2]">
                      <Check className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curated Material & Color Swatches */}
              <div>
                <h4 className="text-xs uppercase font-bold tracking-widest text-[#A8875C] mb-3">
                  Harmonized Material Palette
                </h4>
                <div className="flex items-center gap-4">
                  {project.palette.map((color, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1">
                      <span
                        className="w-8 h-8 rounded-full border border-stone-300 shadow-xs"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-[10px] font-mono text-[#78716C]">{color}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note on Custom Commission */}
              <div className="p-4 rounded-xl bg-[#F5F1E9] border border-[#EAE3D2] flex items-start gap-2.5 text-xs text-[#78716C]">
                <Sparkles className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <p>
                  Every commissioned project is developed from scratch around your specific floor plan dimensions, natural lighting orientations, and personalized joinery specifications.
                </p>
              </div>
            </div>
          </div>

          {/* Modal Footer CTAs with Perfectly Aligned Buttons */}
          <div className="p-4 sm:p-6 bg-[#FAF8F5] border-t border-[#EAE3D2] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <Button
              variant="secondary"
              size="sm"
              onClick={onClose}
            >
              Back to Portfolio
            </Button>

            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                onInquire(project.title);
                onClose();
              }}
              icon={<ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />}
            >
              Discuss This Design Style
            </Button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
