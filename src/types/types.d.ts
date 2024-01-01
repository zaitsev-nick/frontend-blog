export interface PostType {
  id: Key; 
  title: string; 
  description: string; 
  text: string; 
  image?: string; 
  createdAt: string;
  catSlug: string;
  tags: [number];
}

export interface CategoryType {
  id: Key; 
  name: string;
  slug: string;
  posts: [];
}