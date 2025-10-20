import { useStrapi } from "#imports";
import { defineStore } from "pinia";
import type { Article } from "~/types/article";

export const useArticleStore = defineStore("Article", () => {
  const { find } = useStrapi();
  const articles = ref<Article[]>([]);
  const loading = ref(false);
  const error = ref<Error | null>(null);

  const fetchArticles = async () => {
    loading.value = true;
    error.value = null;
    try {
      const { data } = await find<Article>("articles", {
        fields: ["title", "date", "description"],
        populate: ["cover"],
      });
      articles.value = data || [];
    } catch (e) {
      error.value = e as Error;
      console.error("Error fetching articles:", e);
    } finally {
      loading.value = false;
    }
  };

  return {
    articles,
    loading,
    error,
    fetchArticles,
  };
});
