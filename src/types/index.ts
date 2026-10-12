export interface BusinessInfo {
  name: string;
  tagline: string;
  eyebrow: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  workingHours: string;
  rating: number;
  reviewCount: number;
  whatsapp: string;
  googleMapsShareUrl: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: 'home' | 'building' | 'layout' | 'box' | 'key';
  deliverables: string[];
  idealFor: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential' | 'Living Room' | 'Bedroom' | 'Kitchen' | 'Commercial';
  categoryLabel: string;
  location: string;
  description: string;
  fullStory: string;
  image: string;
  galleryImages?: string[];
  palette: string[];
  features: string[];
  isConcept: boolean;
  area?: string;
  duration?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  projectType: string;
  location: string;
  rating: number;
  avatar: string;
  verifiedSource?: string;
}

export interface ConsultationFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  serviceRequired: string;
  propertyType: string;
  budgetRange: string;
  preferredDate: string;
  projectDetails: string;
}
