export interface PostType {
  id: Key; 
  title: string; 
  description: string; 
  text: string; 
  image: string; 
  createdAt: string,
  categories: [],
}

export interface CategoryType {
  id: Key; 
  name: string; 
  posts: [],
}