'use client';

import ShareButtons from '@/components/share/ShareButtons';
import { PostType } from '@/types/types';


export function PostItem({ props }: { props: PostType }) {
  const { image, title, description, text, id, createdAt, categories } = props;

  return (
    <div className="mt-6 mb-12 m-auto space-y-6 w-full sm:w-8/12 md:w-7/12">
      <h1 className='text-2xl'>{title}</h1>
      <img src={image} alt={title} />
      <p>{text}</p>
      <ShareButtons props={{
          shareUrl: `${process.env.NEXT_PUBLIC_URL}/post/${id}`,
          title: title,
          image: image,
        }} />
    </div>
  )
}