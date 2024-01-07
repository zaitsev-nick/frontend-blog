export interface PostType {
  id: Key; 
  slug: string; 
  title: string; 
  description?: string; 
  text: string; 
  image?: string; 
  createdAt: string;
  tags: [];
  likes: number;
}

export interface TagType {
  id: Key; 
  name: string;
  slug: string;
}