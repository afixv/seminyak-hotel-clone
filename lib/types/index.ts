// Accommodation Types
export interface AccommodationRoom {
  id: string;
  href: string;
  img: string;
  label: string;
}

// Dining Types
export interface DiningItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

// Wellness Types
export interface WellnessItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

// Offers Types
export interface Offer {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

// Reviews Types
export interface Review {
  id: string;
  rating: number;
  text: string;
  author: string;
  date: string;
}

// Events Types
export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

// Gallery Types
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
}

// Instagram Types
export interface InstagramPost {
  id: string;
  image: string;
  link: string;
  caption: string;
}

// Location Types
export interface Location {
  id: string;
  title: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  dropdown?: NavItem[];
}
