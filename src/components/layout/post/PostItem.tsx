'use client';

import ShareButtons from '@/components/share/ShareButtons';
import { useEffect } from 'react';
import { PostType } from '@/types/types';
import styles from './PostItem.module.scss';
import cx from 'classnames';
import parse from 'html-react-parser';
import { TagType } from '@/types/types';
import { ScrollTop } from '@/components/layout/post/ScrollTop';
import Prism from "prismjs";
//start:load the languages you need for your blog here
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
//end:load the languages you need for your blog here
import "prismjs/themes/prism-tomorrow.min.css";

export function PostItem({ props }: { props: PostType }) {
  let { image, title, description, text, id, createdAt, tags, likes, slug } = props;

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <>
      <article className="relative mt-5">
        <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" >
          <img src={image} className=" left-0 top-0 w-full h-full z-0 object-cover" />
          <h1 className="px-4 lg:px-0 mt-5 text-2xl md:text-4xl font-semibold text-gray-900 leading-tight">
            {title}
          </h1>
        </div>

        <div className="px-4 lg:px-0 mt-6 text-gray-800 max-w-screen-md mx-auto text-xl leading-relaxed">
          {description}
        </div>

        <hr className="mt-5 border-gray-300" />

        <div className={cx(styles.article, "px-4 lg:px-0 mt-6 text-gray-800 max-w-screen-md mx-auto text-lg leading-relaxed")}>
          {parse(text)}
        </div>
      </article>
    
      <div className="text-center">
        <ShareButtons 
          shareUrl={`${process.env.NEXT_PUBLIC_URL}/posts/${slug}`}
          title={title}
          image={image}
        />
      </div>
      <div className='flex gap-3 my-16 justify-center'>
        {tags?.map((tag: TagType) => (
          <div key={tag.id} 
               draggable="true" 
               role="button"  
               title={tag.name}
               className="h-8 px-3 w-max flex gap-2 items-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 hover:bg-opacity-75 focus:bg-gray-300 focus:text-blue-900 active:text-primary active:bg-blue-100 disabled:bg-gray-100 disabled:text-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:active:text-primary">
            <a href={`/tags/${tag.slug}`} className="block text-sm font-medium">{tag.name}</a>
          </div>
        ))}
      </div>

      <ScrollTop />

    </>
  )
}