export interface PostType {
  id: Key; 
  slug: string; 
  title: string; 
  description: string; 
  text: string; 
  image?: string; 
  createdAt: string;
  tags: [];
}

export interface TagType {
  id: Key; 
  name: string;
  slug: string;
}