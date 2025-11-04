export interface Article {
  id: number;
  documentId: string;
  title: string;
  description: string;
  content: string;
  date: string;
  publishedAt: string;
  cover: {
    url: string;
  };
}
