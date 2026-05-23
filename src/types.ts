export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  startingPrice: string;
  category: 'web-app' | 'automation' | 'enterprise' | 'marketing';
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tech: string[];
  liveUrl?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}
