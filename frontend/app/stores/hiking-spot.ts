import { useStrapi } from "#imports";
import { defineStore } from "pinia";
import type { HikingSpot } from "~/types/hiking-spot";

export const useHikingSpotStore = defineStore("hiking-spot", () => {
  const { find } = useStrapi();
  const hikingSpots = ref<HikingSpot[]>([]);
  const hikingSpot = ref<HikingSpot | null>();
  const loading = ref(false);
  const error = ref<Error | null>(null);
  const { locale } = useI18n();

  const fetchHikingSpots = async () => {
    loading.value = true;
    error.value = null;
    try {
      const { data } = await find<HikingSpot>("hiking-spots", {
        fields: ["title", "slug", "excerpt", "location", "country"],
        populate: ["cover"],
        locale: locale.value,
      });
      hikingSpots.value = data || [];
    } catch (e) {
      error.value = e as Error;
      console.error("Error fetching hikingSpots:", e);
    } finally {
      loading.value = false;
    }
  };

  const fetchHikingSpotBySlug = async (slug: string | undefined) => {
    loading.value = true;
    error.value = null;
    hikingSpot.value = null;

    if (!slug) {
      error.value = new Error("Slug is required");
      loading.value = false;
      return;
    }

    try {
      const { data } = await find<HikingSpot>("hiking-spots", {
        filters: {
          slug: {
            $eq: slug,
          },
        },
        fields: [
          "title",
          "location",
          "country",
          "best_season",
          "altitude_max",
          "altitude_min",
          "content",
        ],
        populate: {
          cover: {
            fields: ["url", "alternativeText"],
          },
          inspirations: {
            fields: ["title", "icon"],
          },
          itineraries: {
            fields: [
              "title",
              "description",
              "duration_hours",
              "difficulty",
              "distance_km",
              "elevation_gain",
              "elevation_loss",
              "trail_type",
              "accomodation",
              "camping",
              "public_transportation",
              "trailhead_start",
              "trailhead_end",
            ],
          },
        },
        locale: locale.value,
      });
      hikingSpot.value = data?.[0] || null;
    } catch (e) {
      error.value = e as Error;
      console.log("error:", error);
      console.error("Error fetching hiking spot by slug:", e);
    } finally {
      loading.value = false;
    }
  };

  return {
    hikingSpots,
    hikingSpot,
    loading,
    error,
    fetchHikingSpots,
    fetchHikingSpotBySlug,
  };
});
