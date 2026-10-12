import React from 'react';
import { X, Shield } from 'lucide-react';
import { Button } from './ui/Button';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#EAE3D2] z-10 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-[#EAE3D2] flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#EAE3D2] flex items-center justify-center text-[#A8875C] shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions of Service'}
              </h3>
              <p className="text-xs text-[#78716C]">
                FINEX INTERIOR DESIGNER • Client Transparency
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-11 h-11 rounded-full bg-white hover:bg-[#EAE3D2] text-[#1C1917] flex items-center justify-center transition-colors cursor-pointer touch-target"
            aria-label="Close legal modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto text-xs sm:text-sm text-[#57534E] leading-relaxed space-y-4">
          {isPrivacy ? (
            <>
              <p>
                At <strong>FINEX INTERIOR DESIGNER</strong>, we respect and safeguard the privacy of every client. This Privacy Statement describes our practices regarding information provided when scheduling design consultations or communicating with our studio.
              </p>
              <h4 className="font-bold text-[#1C1917] text-sm pt-2">1. Information Collection</h4>
              <p>
                We only gather details intentionally submitted by you (such as your name, telephone number, email, floor plans, and spatial preferences) to provide personalized architectural and interior consultations.
              </p>
              <h4 className="font-bold text-[#1C1917] text-sm pt-2">2. Confidentiality of Residential Blueprints</h4>
              <p>
                Private residential floor plans, property valuations, and security layouts shared during design phases are kept strictly confidential. We never monetize, sell, or disclose private customer data to unrelated marketing platforms.
              </p>
              <h4 className="font-bold text-[#1C1917] text-sm pt-2">3. Photography &amp; Portfolio Rights</h4>
              <p>
                Project completion photographs are captured only with the client&apos;s explicit prior written authorization. Client privacy is protected, and personal identifiers or exact street numbers are excluded from public portfolios.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>FINEX INTERIOR DESIGNER</strong>. By scheduling an interior consultation or engaging our design and turnkey execution services, you agree to the following operational terms:
              </p>
              <h4 className="font-bold text-[#1C1917] text-sm pt-2">1. Consultation &amp; Concept Stage</h4>
              <p>
                Initial consultations explore aesthetic direction, spatial requirements, and feasibility. Formal CAD drawings, 3D photorealistic renderings, and itemized Bill of Quantities (BOQ) are produced following mutual design agreement.
              </p>
              <h4 className="font-bold text-[#1C1917] text-sm pt-2">2. Material Specifications</h4>
              <p>
                Natural materials such as marbles, granites, and solid timbers exhibit organic variations in grain, tone, and veining. Finex selects premium grades and invites clients to review material mockups prior to fabrication.
              </p>
              <h4 className="font-bold text-[#1C1917] text-sm pt-2">3. Milestone Schedules &amp; Handover</h4>
              <p>
                Turnkey projects follow structured phases: civil preparation, mechanical/electrical, custom carpentry, surface finishes, and final white-glove styling. Handover is formally audited against approved drawings.
              </p>
            </>
          )}
        </div>

        {/* Footer with Aligned Action */}
        <div className="p-4 bg-[#FAF8F5] border-t border-[#EAE3D2] flex justify-end">
          <Button
            variant="primary"
            size="sm"
            onClick={onClose}
          >
            I Understand
          </Button>
        </div>
      </div>
    </div>
  );
};
