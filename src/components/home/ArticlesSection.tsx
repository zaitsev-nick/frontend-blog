'use client';

import { PostType } from '@/types/types';
import useSWRInfinite from 'swr/infinite';
import { fetcher } from '@/lib/swr';
import ArticleCard from '@/components/card/ArticleCard';
import Loading from '@/components/Loading';

const PAGE_SIZE = 6;

export default function ArticlesSection() {

  const {
    data,
    mutate,
    size,
    setSize,
    isValidating,
    isLoading 
  } = useSWRInfinite(
    (index) => `${process.env.NEXT_PUBLIC_API_URL}/posts?per_page=${PAGE_SIZE}&page=${index + 1}`, fetcher
  );

  const posts = data ? [].concat(...data) : [];
  const isLoadingMore = isLoading || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);
  const isRefreshing = isValidating && data && data?.[0]?.length === size;


  const viewMore = 
    <div className="fter:h-px my-24 flex items-center before:h-px before:flex-1  before:bg-gray-300 before:content-[''] after:h-px after:flex-1 after:bg-gray-300  after:content-['']">
      <div className="flex items-center rounded-full border border-gray-300 bg-secondary-50 px-3 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100">
          <img src="more.svg" className="mr-1 h-4 w-4"></img>
          View More
      </div>
    </div>
  ;

  return (
  <div className="relative mx-auto max-w-7xl mt-16 mb-16">
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The latest articles and guides.</h2>
      <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
      Useful articles from the world of Web development.</p>
    </div>
    <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">

    {isEmpty ? <p>Yay, no articles found.</p> : null}
    {posts && posts.map((item: PostType) => <ArticleCard props={item} key={item.id} />)}

    </div>

    <div className='my-16 flex place-content-center'>
      <button className='relative'
        disabled={isLoadingMore || isReachingEnd}
        onClick={(event) => {event.preventDefault(); setSize(size + 1)}}
      >
      {isLoadingMore
        ? <Loading spinnerSize={12} />
        : isReachingEnd
        ? null
        : viewMore
      }
      </button>
    </div>
  </div>
  )
}