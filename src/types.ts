export type Page = 'home' | 'properties' | 'services' | 'about' | 'contact';

export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  area: string;
  bedrooms: string;
  facing?: string;
  plotSize?: string;
  zoning?: string;
  access?: string;
  configuration?: string;
  amenities?: string;
  status?: string;
  specialty?: string;
  type: 'Luxury Villa' | 'Investment Land' | 'Gated Community' | 'Commercial Property';
  image: string;
  alt: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  number: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  photo: string;
  property: string;
  rating: number;
  text: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Faq {
  question: string;
  answer: string;
}
