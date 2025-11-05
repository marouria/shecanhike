import { useStrapi } from "#imports";
import { defineStore } from "pinia";
import type { HikingSpot } from "~/types/hiking-spot";

export const useHikingSpotStore = defineStore("hiking-spot", () => {
  const { find } = useStrapi();
  const hikingSpots = ref<HikingSpot[]>([]);
  const hikingSpot = ref<HikingSpot | null>();
  const loading = ref(false);
  const error = ref<Error | null>(null);

  const fetchHikingSpots = async () => {
    loading.value = true;
    error.value = null;
    try {
      const { data } = await find<HikingSpot>("hiking-spots", {
        fields: ["title", "excerpt", "location", "country"],
        populate: ["cover"],
      });
      hikingSpots.value = data || [];
    } catch (e) {
      error.value = e as Error;
      console.error("Error fetching hikingSpots:", e);
    } finally {
      loading.value = false;
    }
  };

  const fetchHikingSpotById = async (id: string | undefined) => {
    loading.value = true;
    error.value = null;
    hikingSpot.value = null;
    try {
      const { findOne } = useStrapi();
      const data = await findOne<HikingSpot>("hiking-spots", id, {
        fields: ["title", "description", "highlight"],
        populate: ["cover"],
      });
      hikingSpot.value = (data as any)?.data || data || null;
    } catch (e) {
      error.value = e as Error;
      console.log("error:", error);
      console.error("Error fetching article:", e);
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
    fetchHikingSpotById,
  };
});
