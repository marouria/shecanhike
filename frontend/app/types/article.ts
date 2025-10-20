export interface Article {
  id: number;
  title: string;
  description: string;
  content: string;
  date: string;
  publishedAt: string;
  cover: {
    url: string;
  };
}
