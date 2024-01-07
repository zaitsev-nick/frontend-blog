import { Metadata } from 'next';
import { PostItem } from '@/components/layout/post/PostItem';

type Props = {
  params: { slug: string }
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
      url: `${process.env.NEXT_PUBLIC_URL}/post/${post.slug}`,
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

async function getPost(params: { slug: string }) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${params.slug}`, {
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