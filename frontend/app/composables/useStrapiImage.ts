/**
 * Composable to handle Strapi image URLs
 * Returns the correct image URL based on the environment
 */
export const useStrapiImage = () => {
  const isProduction = process.env.NODE_ENV === "production";
  const strapiUrl = process.env.STRAPI_URL;

  const getImageUrl = (url: string | undefined): string | undefined => {
    if (!url) return undefined;
    return isProduction ? url : `${strapiUrl}${url}`;
  };

  return {
    getImageUrl,
  };
};
