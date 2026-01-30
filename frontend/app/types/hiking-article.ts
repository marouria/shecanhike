export interface StrapiMedia {
  id?: number;
  url: string;
  name?: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: any;
  mime?: string;
  size?: number;
}

export interface HikingArticle {
  // Strapi system fields
  id: number;
  documentId: string;

  // Basic information
  title: string;
  slug: string;
  excerpt: string;
  content: Text;

  // Media
  cover?: StrapiMedia;
  video?: string;

  // SEO
  meta_title?: string;
  meta_description?: string;
  published_date?: string;
}
