export type DifficultyLevel = 'Easy' | 'Moderate' | 'Challenging' | 'Strenuous' | 'Extreme';

export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'AUD' | 'NPR';
export type AltitudeUnit = 'm' | 'ft';

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  elevationGain?: string;
  sleepAltitudeMeters: number;
  distanceKm?: number;
  walkingHours?: string;
  highlights?: string[];
}

export interface PackingItem {
  id: string;
  name: string;
  category: 'Clothing' | 'Footwear' | 'Alpine Gear' | 'Health & Med' | 'Tech & Docs';
  essential: boolean;
  notes?: string;
}

export interface AvailableDeparture {
  id: string;
  startDate: string;
  endDate: string;
  availableSlots: number;
  maxSlots: number;
  leadGuide: string;
  priceUSD: number;
  status: 'Guaranteed' | 'Filling Fast' | 'Limited Seats' | 'Closed';
}

export interface TrekReview {
  id: string;
  author: string;
  country: string;
  date: string;
  rating: number;
  comment: string;
  trekName: string;
  verified: boolean;
}

export interface TrekFAQ {
  question: string;
  answer: string;
}

export interface Trek {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  regionId: string;
  regionName: string;
  country: string;
  difficulty: DifficultyLevel;
  durationDays: number;
  maxAltitudeMeters: number;
  bestSeasons: string[];
  priceUSD: number;
  originalPriceUSD?: number;
  rating: number;
  reviewCount: number;
  featured: boolean;
  heroImage: string;
  galleryImages: string[];
  overview: string;
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: ItineraryDay[];
  departures: AvailableDeparture[];
  faqs: TrekFAQ[];
  routeSummary: {
    startPoint: string;
    endPoint: string;
    accommodation: string;
    meals: string;
    transportation: string;
    permitRequired: string[];
  };
}

export interface Region {
  id: string;
  slug: string;
  name: string;
  country: string;
  heroImage: string;
  shortDescription: string;
  fullDescription: string;
  peakHighlight: string;
  highestPointMeters: number;
  trekCount: number;
  bestMonths: string;
  highlights: string[];
  permitNotes: string;
}

export interface BookingLeadContact {
  fullName: string;
  email: string;
  phone: string;
  nationality: string;
  passportNumber: string;
  dateOfBirth?: string;
  emergencyName: string;
  emergencyPhone: string;
  emergencyRelation: string;
  dietaryRequirements: string;
  medicalConditions: string;
  trekkingExperience: string;
}

export interface BookingAddOns {
  privatePorter: boolean;
  downJacketRental: boolean;
  sleepingBagRental: boolean;
  singleRoomSupplement: boolean;
  airportPickup: boolean;
  helicopterReturn: boolean;
}

export interface BookingRecord {
  id: string;
  bookingRef: string;
  trekId: string;
  trekName: string;
  departureDate: string;
  durationDays: number;
  paxCount: number;
  leadContact: BookingLeadContact;
  addOns: BookingAddOns;
  subtotalUSD: number;
  discountUSD: number;
  addOnsTotalUSD: number;
  totalUSD: number;
  currency: CurrencyCode;
  paymentMethod: 'credit_card' | 'bank_wire' | 'crypto' | 'paypal';
  paymentStatus: 'Paid (Deposit)' | 'Pending' | 'Confirmed';
  createdAt: string;
}

export interface InquiryFormState {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  interestedTrekId: string;
  travelDate: string;
  groupSize: number;
  experienceLevel: string;
  message: string;
}
