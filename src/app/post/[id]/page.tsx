import { Metadata } from 'next';
import { PostItem } from '@/components/layout/post/PostItem';

//  Return a list of `params` to populate the [id] dynamic segment
/*export async function generateStaticParams() {
  const posts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`).then((res) => res.json());
 
  return posts.map((post: { id: number }) => ({
    id: `${post.id}`,
  }));
}*/

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params);
 
  return {
    title: post.title,
    description: post.description,
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${process.env.NEXT_PUBLIC_URL}/post/${post.id}`,
      siteName: 'JS development',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
  }
}

async function getPost(params: { id: string }) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${params.id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const data = await response.json();

  return data.post;
}
 
export default async function PostPage({ params }: Props) {
  const post = await getPost(params);

  return (
    <PostItem props={post} />
  )
}