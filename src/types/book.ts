export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  publishYear: number;
  genre: string;
  buyLinks: {
    amazon?: string;
    flipkart?: string;
    Notionpress?: string;
    other?: Array<{ name: string; url: string }>;
  };
}
