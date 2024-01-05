'use client';

import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { fetcher } from '@/lib/swr';
import { TagType } from '@/types/types';

type Props = {
  handleTagSelect: (tag: TagType) => void;
  selectedTags?: [];
};

export default function TagsInForm({ handleTagSelect, selectedTags }: Props) {
  const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/tags`, fetcher);

  console.log(selectedTags)

 
  if (error) return;
  if (isLoading) return 'Loading...';
  return (
   <>
      {data.map((tag: TagType) => (
        <div key={tag.id} onClick={() => handleTagSelect(tag)} draggable="true" role="button" title="Hover chip" className="h-8 px-3 w-max flex gap-2 items-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 hover:bg-opacity-75 focus:bg-gray-300 focus:text-blue-900 active:text-primary active:bg-blue-100 disabled:bg-gray-100 disabled:text-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:active:text-primary">
          <span className="block text-sm font-medium">{tag.name}</span>
        </div>
      ))}
   </> 
  )
}