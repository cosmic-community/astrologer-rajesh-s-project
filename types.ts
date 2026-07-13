// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Image structure returned by Cosmic file metafields
export interface CosmicImage {
  url: string;
  imgix_url: string;
}

// Astrologer object type
export interface Astrologer extends CosmicObject {
  type: 'astrologers';
  metadata: {
    name?: string;
    bio?: string;
    profile_photo?: CosmicImage;
    specialties?: string[];
    years_of_experience?: number;
    hourly_rate?: number;
    rating?: number;
    available_now?: boolean;
    languages?: string[];
  };
}

// Horoscope object type
export interface Horoscope extends CosmicObject {
  type: 'horoscopes';
  metadata: {
    zodiac_sign?: string;
    time_period?: string;
    prediction?: string;
    lucky_number?: number;
    lucky_color?: string;
    mood?: string;
    astrologer?: Astrologer;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards
export function isAstrologer(obj: CosmicObject): obj is Astrologer {
  return obj.type === 'astrologers';
}

export function isHoroscope(obj: CosmicObject): obj is Horoscope {
  return obj.type === 'horoscopes';
}