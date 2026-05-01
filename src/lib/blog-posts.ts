export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
  keywords: string[];
}

/**
 * Blog posts for The DRIPBaR Kokapet.
 * AI-generated entries land here via JJS Marketing OS ContentAgent.
 * Each post: slug, title, excerpt, category, date, readTime, content (HTML), keywords.
 */
export const blogPosts: BlogPost[] = [
];
