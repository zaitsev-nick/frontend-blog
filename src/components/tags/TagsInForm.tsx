'use client';

import useSWR from 'swr';
import { fetcher } from '@/lib/swr';
import { TagType } from '@/types/types';
import cx from 'classnames';

type Props = {
  handleTagSelect: (tag: TagType) => void;
  selectedTags?: [];
};

export default function TagsInForm({ handleTagSelect, selectedTags }: Props) {
  const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/tags`, fetcher);

  if (error) return;
  if (isLoading) return 'Loading...';
  return (
   <>
    <div className='flex gap-3 mb-5'>
      {data?.map((tag: TagType) => (
        <div key={tag.id} 
             onClick={() => handleTagSelect(tag)} 
             draggable="true" 
             role="button"  
             title="Hover chip"
             className="h-8 px-3 w-max flex gap-2 items-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 hover:bg-opacity-75 focus:bg-gray-300 focus:text-blue-900 active:text-primary active:bg-blue-100 disabled:bg-gray-100 disabled:text-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:active:text-primary">
          <span className="block text-sm font-medium">{tag.name}</span>
        </div>
      ))}
    </div>
    <hr></hr>
    <div className='flex gap-3 mt-5 mb-20'>
      {selectedTags?.map((tag: TagType) => (
        <div key={tag.id} 
             onClick={() => handleTagSelect(tag)} 
             draggable="true" 
             role="button"  
             title="Hover chip"
             className="h-8 px-3 w-max flex gap-2 items-center rounded-full bg-green-400 text-gray-700 hover:bg-green-600 hover:bg-opacity-75 focus:bg-gray-300 focus:text-blue-900 active:text-primary active:bg-blue-100 disabled:bg-gray-100 disabled:text-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:active:text-primary">
          <span className="block text-sm font-medium">{tag.name}</span>
        </div>
      ))}
    </div>
   </> 
  )
}