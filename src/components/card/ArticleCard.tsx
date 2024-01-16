import { PostType } from '@/types/types';
import { useRouter } from 'next/navigation';

export default function ArticleCard({ props }: { props: PostType }) {
  const router = useRouter();
  const { image, title, description, id, createdAt, likes, slug } = props;

  function goToPostPage(slug: string) {
    router.push(`${process.env.NEXT_PUBLIC_URL}/posts/${slug}`);
    return;
  }

  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
    <div className="flex-shrink-0">
      <img className="h-48 w-full object-cover cursor-pointer" src={image} alt={title} onClick={() => goToPostPage(slug)} />
    </div>
    <div className="flex flex-1 flex-col justify-between bg-white p-6">
      <div className="flex-1">
        <a href={`${process.env.NEXT_PUBLIC_URL}/posts/${slug}`} className="mt-2 block">
          <p className="text-xl font-semibold text-gray-900">{title}</p>
          <p className="mt-3 text-base text-gray-500">{description}</p>
        </a>
      </div>
      <div className="hidden mt-6 flex items-center">
        <div className="flex-shrink-0">
          <a href="#">
            <span className="sr-only">Roel Aufderehar</span>
            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
          </a>
        </div>
        <div className=" ml-3">
          <p className="text-sm font-medium text-gray-900">
            <a href="#" className="hover:underline">Roel Aufderehar</a>
          </p>
          <div className="flex space-x-1 text-sm text-gray-500">
            <time dateTime="2020-03-16">Mar 16, 2020</time>
            <span aria-hidden="true">·</span>
            <span>6 min read</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}