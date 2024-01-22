 'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PostType } from '@/types/types';
import useSWR from 'swr';
import { fetcher } from '@/lib/swr';
import ArticleCard from '@/components/card/ArticleCard';
import styles from './AllPosts.module.scss';
import cx from 'classnames';
import Loading from '../Loading';

const PAGE_SIZE = 3;

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
  <a className={cx(styles.beforeButton, 'group flex h-min items-center disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none  rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  bg-violet-500 border-b-violet-700 disabled:border-0 disabled:bg-violet-500 disabled:text-white ring-white text-white border-b-4 hover:border-0 active:border-0 hover:text-gray-100 active:bg-violet-800 active:text-gray-300 focus-visible:outline-violet-500 text-sm sm:text-base')}
    href="#">
    Page before
  </a>
  ;

  const nextPage = 
  <a className={cx(styles.nextButton, 'group flex h-min items-center disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none  rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  bg-violet-500 border-b-violet-700 disabled:border-0 disabled:bg-violet-500 disabled:text-white ring-white text-white border-b-4 hover:border-0 active:border-0 hover:text-gray-100 active:bg-violet-800 active:text-gray-300 focus-visible:outline-violet-500 text-sm sm:text-base')}
    href="#">
    Next page 
  </a>
  ;

  return (
    <div className="p-5 sm:p-8">
      {isEmpty ? <p>Yay, no posts found.</p> : null}
      {isLoading ? <Loading spinnerSize={24} /> : 
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
