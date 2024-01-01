export interface PostType {
  id: Key; 
  title: string; 
  description: string; 
  text: string; 
  image: string; 
  createdAt: string,
  category: string,
  catSlug: string,
  tags: [number],
}

export interface CategoryType {
  id: Key; 
  name: string; 
  posts: [],
}