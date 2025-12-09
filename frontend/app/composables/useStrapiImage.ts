/**
 * Composable to handle Strapi image URLs
 * Returns the correct image URL based on the environment
 */
export const useStrapiImage = () => {
  const config = useRuntimeConfig();
  const strapiUrl = config.public.strapi.url;

  const getImageUrl = (url: string | undefined): string | undefined => {
    if (!url) return undefined;
    return `${strapiUrl}${url}`;
  };

  return {
    getImageUrl,
  };
};
