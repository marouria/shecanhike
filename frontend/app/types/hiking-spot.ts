export type HikingSpotDifficulty = "easy" | "moderate" | "hard" | "expert";
export type HikingSpotTrailType = "loop" | "out_and_back" | "point_to_point";
export type HikingSpotSeason = "spring" | "summer" | "fall" | "winter";
import type { Inspiration } from "~/types/inspiration";

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
  difficulty: HikingSpotDifficulty;
  trail_type?: HikingSpotTrailType;
  best_season?: HikingSpotSeason;

  // Duration & distance
  duration_days?: number;
  duration_hours?: number;
  distance_km?: number;

  // Elevation
  elevation_gain?: number;
  elevation_loss?: number;
  altitude_max?: number;
  altitude_min?: number;

  // Trailhead
  trailhead_start?: string;
  trailhead_end?: string;

  // Amenities
  accomodation?: boolean;
  camping?: boolean;
  public_transportation?: boolean;

  // SEO
  meta_title?: string;
  meta_description?: string;
  published_date?: string;
}
