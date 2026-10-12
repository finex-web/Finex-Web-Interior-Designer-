import React, { useState } from 'react';
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Calendar,
  Sparkles,
  Info,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BusinessInfo, ConsultationFormData } from '../types';
import { Button } from './ui/Button';

interface ConsultationFormProps {
  businessInfo: BusinessInfo;
  preselectedService?: string;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  businessInfo,
  preselectedService,
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    serviceRequired: preselectedService || 'Residential Interior Design',
    propertyType: 'Apartment',
    budgetRange: '$50,000 – $100,000 (Demo)',
    preferredDate: '',
    projectDetails: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<ConsultationFormData | null>(null);
  const [showDemoModal, setShowDemoModal] = useState(false);

  const servicesList = [
    'Residential Interior Design',
    'Commercial Interior Design',
    'Space Planning',
    '3D Interior Visualization',
    'Turnkey Interior Solutions',
  ];

  const propertyTypes = [
    'Apartment / Penthouse',
    'Private Villa / Residence',
    'Townhouse',
    'Executive Corporate Office',
    'Retail Boutique',
    'Hospitality / Lounge',
  ];

  const budgetOptions = [
    '$25,000 – $50,000 (Demo)',
    '$50,000 – $100,000 (Demo)',
    '$100,000 – $250,000 (Demo)',
    '$250,000+ (Estate Scope Demo)',
    'Custom / Consult First',
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ConsultationFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter a name.';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please enter a demonstration phone number.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@example.com).';
    }

    if (!formData.serviceRequired) {
      newErrors.serviceRequired = 'Please select a service.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData({ ...formData });
      setIsSubmitted(true);
    }
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      serviceRequired: 'Residential Interior Design',
      propertyType: 'Apartment / Penthouse',
      budgetRange: '$50,000 – $100,000 (Demo)',
      preferredDate: '',
      projectDetails: '',
    });
  };

  return (
    <section id="consultation" className="py-20 sm:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#F5F1E9] text-[#78716C] border border-[#EAE3D2] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Interactive Demo Consultation Form</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1917] leading-tight mb-4">
            Let&apos;s Create a Space That Inspires You.
          </h2>
          <p className="text-[#57534E] text-sm sm:text-base leading-relaxed">
            Experience our consultation scheduling workflow. This demonstration form illustrates
            client intake fields and architectural space parameter collection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Fictional Studio Information */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#EAE3D2] shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#EAE3D2] text-[#A8875C] text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Demo Studio Desk</span>
              </div>
              <h3 className="font-serif text-2xl text-[#1C1917] font-medium mb-3">
                FINEX Studio Contact (Fictional)
              </h3>
              <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed mb-6">
                All details below are illustrative demonstration placeholders. No real personal accounts or deliverable endpoints are configured.
              </p>

              {/* Fictional Contact Details Cards */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#F4EFE6]">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#EAE3D2] text-[#A8875C] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-[#78716C] uppercase tracking-wider block">
                      Demo Phone Number
                    </span>
                    <span className="text-sm font-semibold text-[#1C1917]">
                      {businessInfo.phoneDisplay}
                    </span>
                    <span className="text-[11px] text-[#A8875C] block mt-0.5">
                      Fictional 555 Exchange (Non-dialable)
                    </span>
                  </div>
                </div>

                {/* WhatsApp Demo Button */}
                <button
                  type="button"
                  onClick={() => setShowDemoModal(true)}
                  className="w-full text-left flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#25D366]/5 border border-[#25D366]/20 hover:border-[#25D366] transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#25D366]/30 text-[#25D366] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-[#78716C] uppercase tracking-wider block">
                      Demo WhatsApp Channel
                    </span>
                    <span className="text-sm font-semibold text-[#1C1917]">
                      {businessInfo.phoneDisplay}
                    </span>
                    <span className="text-[11px] text-[#1E7E34] block mt-0.5">
                      Click to test simulated messaging prompt
                    </span>
                  </div>
                </button>

                {/* Email */}
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#F4EFE6] hover:border-[#C5A880] transition-colors group"
                  title="Fictional RFC 2606 example email"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#EAE3D2] text-[#A8875C] flex items-center justify-center shrink-0 group-hover:bg-[#1C1917] group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-[#78716C] uppercase tracking-wider block">
                      Demo Email Address
                    </span>
                    <span className="text-sm font-semibold text-[#1C1917] break-all">
                      {businessInfo.email}
                    </span>
                    <span className="text-[11px] text-[#78716C] block mt-0.5">
                      Non-deliverable example address
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#F4EFE6]">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#EAE3D2] text-[#A8875C] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-[#78716C] uppercase tracking-wider block">
                      Studio Address (Fictional)
                    </span>
                    <p className="text-xs font-semibold text-[#1C1917] leading-relaxed">
                      {businessInfo.address}, {businessInfo.city}, {businessInfo.state} {businessInfo.pincode}
                    </p>
                    <span className="text-[11px] text-[#A8875C] font-medium mt-1 inline-block">
                      Demonstrative Studio Address
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#F4EFE6]">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#EAE3D2] text-[#A8875C] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-[#78716C] uppercase tracking-wider block">
                      Demonstration Hours
                    </span>
                    <p className="text-xs font-semibold text-[#1C1917]">
                      {businessInfo.workingHours}
                    </p>
                    <span className="text-[11px] text-[#78716C] block mt-0.5">
                      Weekend: Closed (Demo schedule)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F5F1E9] border border-[#EAE3D2] flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#A8875C] shrink-0 mt-0.5" />
              <p className="text-xs text-[#57534E] leading-relaxed">
                <span className="font-semibold text-[#1C1917]">Demo Notice:</span>{' '}
                This website is a conceptual portfolio showcase. No personal data is stored or transmitted across external networks.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#EAE3D2] shadow-sm">
            <AnimatePresence mode="wait">
              {isSubmitted && submittedData ? (
                /* Honest Demonstration Submission Feedback */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="py-8 text-center space-y-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="w-16 h-16 rounded-full bg-[#FAF8F5] border-2 border-[#C5A880] text-[#A8875C] flex items-center justify-center mx-auto shadow-inner"
                  >
                    <CheckCircle className="w-8 h-8 text-[#A8875C]" />
                  </motion.div>

                  <div>
                    {/* Explicit Demo Notice Required by Prompt */}
                    <div className="inline-block bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A] text-xs font-semibold px-4 py-1.5 rounded-full mb-3">
                      Demo only — your inquiry was not sent
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1917] font-medium mb-2">
                      Simulated Intake Successful
                    </h3>
                    <p className="text-sm text-[#57534E] max-w-lg mx-auto leading-relaxed">
                      This is a fictional concept showcase website. No email or personal data was transmitted to any real person or external server.
                    </p>
                  </div>

                  {/* Summary of Simulated Input */}
                  <div className="bg-[#FAF8F5] border border-[#EAE3D2] rounded-2xl p-5 text-left text-xs space-y-2.5 max-w-lg mx-auto">
                    <div className="flex justify-between border-b border-[#EAE3D2] pb-2">
                      <span className="text-[#78716C]">Simulated Name:</span>
                      <span className="font-semibold text-[#1C1917]">{submittedData.fullName}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#EAE3D2] pb-2">
                      <span className="text-[#78716C]">Selected Service:</span>
                      <span className="font-semibold text-[#1C1917]">{submittedData.serviceRequired}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#EAE3D2] pb-2">
                      <span className="text-[#78716C]">Property &amp; Budget:</span>
                      <span className="font-semibold text-[#1C1917]">
                        {submittedData.propertyType} • {submittedData.budgetRange}
                      </span>
                    </div>
                    {submittedData.preferredDate && (
                      <div className="flex justify-between border-b border-[#EAE3D2] pb-2">
                        <span className="text-[#78716C]">Preferred Date:</span>
                        <span className="font-semibold text-[#1C1917]">{submittedData.preferredDate}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-[#78716C]">Contact Placeholders:</span>
                      <span className="font-semibold text-[#1C1917]">
                        {submittedData.phoneNumber} | {submittedData.email}
                      </span>
                    </div>
                  </div>

                  {/* Reset Button */}
                  <div className="flex justify-center pt-2">
                    <Button
                      variant="primary"
                      size="md"
                      onClick={handleResetForm}
                    >
                      Reset Demo Form
                    </Button>
                  </div>
                </motion.div>
              ) : (
                /* The Consultation Input Form */
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Demo Notification Banner */}
                  <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EAE3D2] flex items-center gap-2 text-xs text-[#78716C]">
                    <Info className="w-4 h-4 text-[#A8875C] shrink-0" />
                    <span>Demo Mode: You can safely test inputting sample values without transmitting real data.</span>
                  </div>

                  {/* Full Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1917] mb-2">
                        Client Name <span className="text-[#C5A880]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Eleanor Vance (Demo)"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        className={`w-full min-h-[46px] px-4 py-3 rounded-xl border text-sm bg-[#FAF8F5] text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition-all ${
                          errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-[#EAE3D2]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1917] mb-2">
                        Phone Number <span className="text-[#C5A880]">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +1 (555) 019-2834"
                        value={formData.phoneNumber}
                        onChange={(e) => {
                          setFormData({ ...formData, phoneNumber: e.target.value });
                          if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: undefined });
                        }}
                        className={`w-full min-h-[46px] px-4 py-3 rounded-xl border text-sm bg-[#FAF8F5] text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition-all ${
                          errors.phoneNumber ? 'border-red-400 bg-red-50/20' : 'border-[#EAE3D2]'
                        }`}
                      />
                      {errors.phoneNumber && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phoneNumber}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email Address & Preferred Consultation Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1917] mb-2">
                        Email Address <span className="text-[#C5A880]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. client@example.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full min-h-[46px] px-4 py-3 rounded-xl border text-sm bg-[#FAF8F5] text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition-all ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#EAE3D2]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1917] mb-2 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#A8875C]" />
                        <span>Preferred Date (Demo)</span>
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full min-h-[46px] px-4 py-3 rounded-xl border border-[#EAE3D2] text-sm bg-[#FAF8F5] text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Required */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1917] mb-2">
                      Service Required <span className="text-[#C5A880]">*</span>
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full min-h-[46px] px-4 py-3 rounded-xl border border-[#EAE3D2] text-sm bg-[#FAF8F5] text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition-all cursor-pointer"
                    >
                      {servicesList.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Property Type & Budget Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1917] mb-2">
                        Property Type
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full min-h-[46px] px-4 py-3 rounded-xl border border-[#EAE3D2] text-sm bg-[#FAF8F5] text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition-all cursor-pointer"
                      >
                        {propertyTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1917] mb-2">
                        Budget Range (Demo Estimates)
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full min-h-[46px] px-4 py-3 rounded-xl border border-[#EAE3D2] text-sm bg-[#FAF8F5] text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition-all cursor-pointer"
                      >
                        {budgetOptions.map((budget) => (
                          <option key={budget} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1917] mb-2">
                      Project Notes (Demo)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Input sample project notes for testing: square footage, room types, favorite textures..."
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#EAE3D2] text-sm bg-[#FAF8F5] text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      variant="primary"
                      size="lg"
                      fullWidth
                      type="submit"
                      icon={<Send className="w-4 h-4 text-[#C5A880]" />}
                    >
                      Test Request Submission (Demo)
                    </Button>
                    <p className="text-[11px] text-[#A8A29E] text-center mt-3">
                      Demonstration only. No inquiries are dispatched or personal information retained.
                    </p>
                  </div>

                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Demo Modal for WhatsApp Prompt */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-[#EAE3D2] shadow-2xl text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mx-auto">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1C1917]">
              Demo Messaging Notice
            </h3>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
              This website is a fictional concept demonstration. WhatsApp and real-time chat links are simulated placeholders to prevent accidental contact with real individuals.
            </p>
            <div className="pt-2">
              <Button
                variant="primary"
                size="sm"
                fullWidth
                onClick={() => setShowDemoModal(false)}
              >
                Close Notice
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
