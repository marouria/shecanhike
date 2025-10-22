/**
 * Composable to handle Strapi image URLs
 * Returns the correct image URL based on the environment
 */
export const useStrapiImage = () => {
  const config = useRuntimeConfig();
  const isProduction = process.env.NODE_ENV === "production";
  const strapiUrl = config.public.strapi.url;

  const getImageUrl = (url: string | undefined): string | undefined => {
    if (!url) return undefined;

    // In production, Strapi returns full URLs
    if (isProduction) return url;

    // In development, ensure we have a valid Strapi URL
    if (!strapiUrl) {
      console.warn("STRAPI_URL is not defined in environment variables");
      return url;
    }

    return `${strapiUrl}${url}`;
  };

  return {
    getImageUrl,
  };
};
