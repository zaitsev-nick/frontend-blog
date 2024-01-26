import { Metadata } from 'next';
import AllPosts from '@/components/layout/AllPosts'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tag = await getTag(params);
  console.log(tag)
 
  return {
    title: tag.name,
    description: `Articles tagget with ${tag.name}`,
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
    openGraph: {
      title: tag.name,
      description: `Articles tagget with ${tag.name}`,
      url: `${process.env.NEXT_PUBLIC_URL}/tags/${tag.slug}`,
      siteName: 'JS development',
      locale: 'en_US',
      type: 'website',
    },
  }
}

async function getTag(params: { slug: string }) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tags/${params.slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const data = await response.json();

  return data.tag;
}
 
export default async function AllPostsByTagPage({ params }: Props) {
  const tag = await getTag(params);

  return (
    <AllPosts isByTag={true} slug={tag.slug} />
  )
}