import React from 'react';
import { MapPin, Mail, Phone, Instagram, Linkedin, Facebook, Sparkles } from 'lucide-react';
import { BusinessInfo } from '../types';

interface TopContactBarProps {
  businessInfo: BusinessInfo;
}

export const TopContactBar: React.FC<TopContactBarProps> = ({ businessInfo }) => {
  return (
    <div className="bg-[#FAF8F5] border-b border-[#EAE3D2]/70 text-[#57534E] text-xs py-2 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Demo Studio Address & Unobtrusive Concept Tag */}
        <div className="flex items-center gap-2 truncate max-w-full md:max-w-md">
          <span className="inline-flex items-center gap-1 bg-[#F5F1E9] text-[#78716C] border border-[#EAE3D2] px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider shrink-0">
            <Sparkles className="w-2.5 h-2.5 text-[#C5A880]" />
            <span>Demo Concept</span>
          </span>
          <div className="flex items-center gap-1.5 truncate">
            <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
            <span className="truncate">
              <span className="font-medium text-[#1C1917]">{businessInfo.city}:</span>{' '}
              {businessInfo.address}
            </span>
          </div>
        </div>

        {/* Center / Right: Fictional Email, Phone & Safe Social Links */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-6 text-xs">
          <a
            href={`mailto:${businessInfo.email}`}
            className="flex items-center gap-1.5 hover:text-[#1C1917] transition-colors"
            title="Non-deliverable fictional demonstration email"
          >
            <Mail className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
            <span>{businessInfo.email}</span>
          </a>

          <div
            className="flex items-center gap-1.5 text-[#1C1917] font-medium"
            title="Fictional 555 demonstration phone number"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
            <span>{businessInfo.phoneDisplay}</span>
          </div>

          {/* Safe Social Demo Icons */}
          <div className="hidden sm:flex items-center gap-2.5 border-l border-[#EAE3D2] pl-4 text-[#78716C]">
            <a
              href="#demo-social"
              aria-label="Pinterest (Demo)"
              className="hover:text-[#1C1917] transition-colors"
              title="Demo social link"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 0 0-4.37 23.18c-.06-.94-.1-2.38.02-3.41l.73-3.1s-.19-.38-.19-.94c0-.88.51-1.54 1.15-1.54.54 0 .8.41.8.9 0 .55-.35 1.37-.53 2.13-.15.64.32 1.16.95 1.16 1.14 0 2.02-1.2 2.02-2.93 0-1.53-1.1-2.6-2.67-2.6-1.95 0-3.09 1.46-3.09 2.97 0 .59.23 1.22.51 1.56.06.07.06.13.05.2l-.19.78c-.03.13-.1.17-.23.11-1.07-.5-1.74-2.07-1.74-3.33 0-2.71 1.97-5.2 5.68-5.2 2.98 0 5.3 2.12 5.3 4.96 0 2.96-1.87 5.34-4.46 5.34-.87 0-1.69-.45-1.97-.98l-.54 2.05c-.19.75-.72 1.68-1.07 2.25A12 12 0 1 0 12 0z"/>
              </svg>
            </a>
            <a
              href="#demo-social"
              aria-label="Instagram (Demo)"
              className="hover:text-[#1C1917] transition-colors"
              title="Demo social link"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="#demo-social"
              aria-label="Facebook (Demo)"
              className="hover:text-[#1C1917] transition-colors"
              title="Demo social link"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="#demo-social"
              aria-label="LinkedIn (Demo)"
              className="hover:text-[#1C1917] transition-colors"
              title="Demo social link"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
