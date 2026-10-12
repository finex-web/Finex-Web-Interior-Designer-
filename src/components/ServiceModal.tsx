import React from 'react';
import { X, Check, ArrowRight, ShieldCheck, Home, Building2, Grid, Box, Key } from 'lucide-react';
import { ServiceItem } from '../types';
import { Button } from './ui/Button';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onBookService }) => {
  if (!service) return null;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return <Home className="w-6 h-6 text-[#C5A880]" />;
      case 'building':
        return <Building2 className="w-6 h-6 text-[#C5A880]" />;
      case 'layout':
        return <Grid className="w-6 h-6 text-[#C5A880]" />;
      case 'box':
        return <Box className="w-6 h-6 text-[#C5A880]" />;
      case 'key':
        return <Key className="w-6 h-6 text-[#C5A880]" />;
      default:
        return <Home className="w-6 h-6 text-[#C5A880]" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#EAE3D2] z-10 max-h-[90vh] flex flex-col">
        {/* Close Button with 44px min touch target */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-[#FAF8F5] hover:bg-[#EAE3D2] text-[#1C1917] flex items-center justify-center transition-colors cursor-pointer touch-target"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D2] flex items-center justify-center shadow-xs shrink-0">
              {getIcon(service.iconName)}
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#A8875C] font-semibold">
                FINEX Capability
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1917] font-semibold">
                {service.title}
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
            {service.fullDesc}
          </p>

          {/* Scope & Deliverables */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#A8875C] mb-3">
              Included Deliverables &amp; Scope
            </h4>
            <div className="space-y-2.5">
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF8F5] border border-[#F4EFE6] text-xs text-[#1C1917]"
                >
                  <Check className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal for */}
          <div className="p-4 rounded-xl bg-[#F5F1E9] border border-[#EAE3D2]">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#A8875C] block mb-1">
              Ideal Project Scope
            </span>
            <p className="text-xs text-[#57534E] font-medium">
              {service.idealFor}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#78716C]">
            <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
            <span>Structured milestone payments with weekly on-site photographic reports.</span>
          </div>
        </div>

        {/* Modal Footer with Aligned Buttons */}
        <div className="p-4 sm:p-6 bg-[#FAF8F5] border-t border-[#EAE3D2] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <Button
            variant="secondary"
            size="sm"
            onClick={onClose}
          >
            Close
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              onBookService(service.title);
              onClose();
            }}
            icon={<ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />}
          >
            Book for This Service
          </Button>
        </div>
      </div>
    </div>
  );
};
