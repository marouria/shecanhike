import type {
  HikingSpotTrailType,
  HikingSpotSeason,
} from "~/types/hiking-spot";

/**
 * Composable for hiking spot label translations and formatting
 */
export const useHikingSpotLabels = () => {
  const trailTypeLabels: Record<HikingSpotTrailType, string> = {
    loop: "Loop",
    out_and_back: "Out & Back",
    point_to_point: "Point to Point",
  };

  const seasonLabels: Record<HikingSpotSeason, string> = {
    spring: "Spring",
    summer: "Summer",
    fall: "Fall",
    winter: "Winter",
  };

  const formatTrailType = (type?: HikingSpotTrailType): string | null => {
    if (!type) return null;
    return trailTypeLabels[type] || null;
  };

  const formatSeason = (season?: HikingSpotSeason): string | null => {
    if (!season) return null;
    return seasonLabels[season] || null;
  };

  return {
    formatTrailType,
    formatSeason,
    trailTypeLabels,
    seasonLabels,
  };
};
