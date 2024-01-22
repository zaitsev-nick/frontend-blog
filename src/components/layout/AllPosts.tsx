 'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PostType } from '@/types/types';
import useSWR from 'swr';
import { fetcher } from '@/lib/swr';
import ArticleCard from '@/components/card/ArticleCard';

const PAGE_SIZE = 20;

export default function AllPosts() {
  const router = useRouter();
  const [pageIndex, setPageIndex] = useState(1);

  const { data, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/posts?page=${pageIndex}&per_page=${PAGE_SIZE}`, fetcher);

  function goToPost(id: number) {
    router.push(`${process.env.NEXT_PUBLIC_URL}/posts/${id}`);
    return;
  }

  const posts = data || [];
  const isEmpty = data?.length === 0;
  const isReachingEnd = isEmpty || (data?.length < PAGE_SIZE);

  const spinner = 
    <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
    </div>
  ;

  const prevPage = 
  <a href="#"  className="relative">
    <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
    <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-6 py-2 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500 ">◀&nbsp;&nbsp; Previous</span>
  </a>
  ;

  const nextPage = 
    <a href="#"  className="relative">
      <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
      <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-6 py-2 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500">Next &nbsp;&nbsp;▶</span>
    </a>
  ;

  return (
    <div className="p-5 sm:p-8">
      {isEmpty ? <p>Yay, no posts found.</p> : null}
      {isLoading ? spinner : 
        <>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts && posts.map((item: PostType) => <ArticleCard props={item} key={item.id} />)}
          </div>
          <div className='m-6 mt-12 flex place-content-around'>
            {pageIndex > 1 ? <button onClick={() => setPageIndex(pageIndex - 1)} className='flex'>
              {prevPage}
            </button> : null}

            {isReachingEnd ? null : <button 
              disabled={isReachingEnd}
              onClick={() => setPageIndex(pageIndex + 1)} className='flex'>
              {nextPage}
            </button>}
          </div>
        </>
      }
    </div>
  )
}
