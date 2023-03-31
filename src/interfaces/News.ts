export interface News {
  author: null | string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: null | string;
}

export interface NewsList {
  articles: News[];
  status: "ok" | "error";
}
