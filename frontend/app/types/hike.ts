export interface Hike {
  id: number;
  title: string;
  description: string;
  location: string;
  country: string;
  cover?: {
    url: string;
  };
}
