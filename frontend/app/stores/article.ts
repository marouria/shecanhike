import type { Article } from "~/types/article";

export const useArticleStore = defineStore("Article", () => {
  const articles = ref<Article[]>([]);
  const article = ref<Article | null>(null);

  const loading = ref(false);
  const error = ref<Error | null>(null);

  const fetchArticles = async () => {
    loading.value = true;
    error.value = null;
    try {
      const { find } = useStrapi();
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

  const fetchArticleById = async (id: string | undefined) => {
    loading.value = true;
    error.value = null;
    article.value = null;
    try {
      const { findOne } = useStrapi();
      const data = await findOne<Article>("articles", id, {
        fields: ["title", "date", "description"],
        populate: ["cover"],
      });
      article.value = (data as any)?.data || data || null;
    } catch (e) {
      error.value = e as Error;
      console.log("error:", error);
      console.error("Error fetching article:", e);
    } finally {
      loading.value = false;
    }
  };

  return {
    articles,
    article,
    loading,
    error,
    fetchArticles,
    fetchArticleById,
  };
});
