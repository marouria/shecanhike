import { useStrapi } from "#imports";
import { defineStore } from "pinia";
import type { HikingArticle } from "~/types/hiking-article";

export const useHikingArticleStore = defineStore("hiking-article", () => {
  const { find } = useStrapi();
  const hikingArticles = ref<HikingArticle[]>([]);
  const hikingArticle = ref<HikingArticle | null>();
  const loading = ref(false);
  const error = ref<Error | null>(null);
  const { locale } = useI18n();

  const fetchHikingArticles = async () => {
    loading.value = true;
    error.value = null;
    try {
      const { data } = await find<HikingArticle>("articles", {
        fields: ["title", "slug", "excerpt"],
        populate: ["cover"],
        locale: locale.value,
      });
      hikingArticles.value = data || [];
    } catch (e) {
      error.value = e as Error;
      console.error("Error fetching hikingArticles:", e);
    } finally {
      loading.value = false;
    }
  };

  const fetchHikingArticleBySlug = async (slug: string | undefined) => {
    loading.value = true;
    error.value = null;
    hikingArticle.value = null;

    if (!slug) {
      error.value = new Error("Slug is required");
      loading.value = false;
      return;
    }

    try {
      const { data } = await find<HikingArticle>("articles", {
        filters: {
          slug: {
            $eq: slug,
          },
        },
        populate: ["cover"],
        locale: locale.value,
      });
      hikingArticle.value = data?.[0] || null;
    } catch (e) {
      error.value = e as Error;
      console.log("error:", error);
      console.error("Error fetching hiking article by slug:", e);
    } finally {
      loading.value = false;
    }
  };

  return {
    hikingArticles,
    hikingArticle,
    loading,
    error,
    fetchHikingArticles,
    fetchHikingArticleBySlug,
  };
});
