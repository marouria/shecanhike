export type HikingSpotDifficulty = "easy" | "moderate" | "hard" | "expert";
export type HikingSpotTrailType = "loop" | "out_and_back" | "point_to_point";

export interface Itinerary {
  // Strapi system fields
  id: number;
  documentId: string;

  // Basic information
  title: string;
  description: string;

  // Technical characteristics
  difficulty: HikingSpotDifficulty;
  trail_type?: HikingSpotTrailType;

  // Duration & distance
  duration_hours?: number;
  distance_km?: number;

  // Elevation
  elevation_gain?: number;
  elevation_loss?: number;

  // Trailhead
  trailhead_start?: string;
  trailhead_end?: string;

  // Amenities
  accomodation?: boolean;
  camping?: boolean;
  public_transportation?: boolean;
}
