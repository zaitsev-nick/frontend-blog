import { Metadata } from 'next';
import AllPosts from '@/components/layout/AllPosts';

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params);
 
  return {
    title: 'JS development articles',
    description: 'JS development / Watch & Read Articles',
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
    openGraph: {
      title: 'JS development articles',
      description: 'JS development / Watch & Read Articles',
      url: `${process.env.NEXT_PUBLIC_URL}/posts`,
      siteName: 'JS development',
      locale: 'en_US',
      type: 'website',
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
    <AllPosts />
  )
}