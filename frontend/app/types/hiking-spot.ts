export interface HikingSpot {
  id: number;
  documentId: string;
  title: string;
  description: string;
  location: string;
  country: string;
  highlight: string;
  excerpt: string;
  cover?: {
    url: string;
  };
}
