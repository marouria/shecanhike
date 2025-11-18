export type HikingSpotSeason = "spring" | "summer" | "fall" | "winter";
import type { Inspiration } from "~/types/inspiration";
import type { Itinerary } from "~/types/itinerary";

export interface StrapiMedia {
  id?: number;
  url: string;
  name?: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: any;
  mime?: string;
  size?: number;
}

export interface HikingSpot {
  // Strapi system fields
  id: number;
  documentId: string;

  // Basic information
  title: string;
  slug: string;
  excerpt: string;
  location: string;
  country: string;
  content: Text;

  // Media
  cover?: StrapiMedia;
  video?: string;

  // Trail characteristics
  inspirations: Inspiration[];
  itineraries: Itinerary[];
  best_season?: HikingSpotSeason;

  // Elevation
  altitude_max?: number;
  altitude_min?: number;

  // SEO
  meta_title?: string;
  meta_description?: string;
  published_date?: string;
}
