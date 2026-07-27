export interface SiteConfig {
  name: string;
  tagline: string;
  accreditation: string;
  establishedYear: number;
  proprietor: string;
  telephone: string[];
  email: string;
  address: {
    street: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
  };
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}

export interface KeyPersonnel {
  sNo: string;
  name: string;
  role: string;
  qual: string;
}

export interface CalibrationParameter {
  title: string;
  icon: string;
  range: string;
  accuracy: string;
  desc: string;
}

export interface ThermalEnvironment {
  title: string;
  icon: string;
  tempRange: string;
  standards: string;
  desc: string;
}

export interface HvacProtocol {
  title: string;
  icon: string;
  standard: string;
  frequency: string;
  desc: string;
}

export interface MasterInstrumentCategory {
  category: string;
  count: string;
  items: string[];
}

export interface MasterInstrument {
  sNo: string;
  parameter: string;
  masterName: string;
  range: string;
  leastCount: string;
  accuracy: string;
  traceability: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  location: string;
  rating: number;
  verified: boolean;
}

export interface WhyChooseUsItem {
  icon: string;
  title: string;
  highlight: string;
  description: string;
  stats: string;
}
