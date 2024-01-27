'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { PostType, TagType } from '@/types/types';
import Loading from '@/components/Loading';
import TagsInForm from '@/components/tags/TagsInForm';
import UploadImageModal from '@/components/modal/UploadImageModal';

export default function UploadForm() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [modalVisibility, setModalVisibility] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<any>();
  const [uploadData, setUploadData] = useState();
  const [title, setTitle] = useState<EventTarget & HTMLInputElement | string>();
  const [slug, setSlug] = useState<EventTarget & HTMLInputElement | any>('');
  const [description, setDescription] = useState<EventTarget & HTMLInputElement | string>();
  const [text, setText] = useState<EventTarget & HTMLInputElement | string>();
  const [tags, setTags] = useState<any>([]);


  const addToDatabase = async (data: any) => {
    const { secure_url } = data;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          slug,
          title, 
          description,
          text,
          image: secure_url,
          tags,
        }),
      });
      const data = await response.json();

      if(data) {
        router.push(`${process.env.NEXT_PUBLIC_URL}/posts/${data?.post?.slug}`)
      } else {
        console.log('failed upload')
      }
    } catch(error) {
      console.log(error)
    }
  }

  function handleFileChange(changeEvent: any) {
    const reader = new FileReader();

    reader.onload = function(onLoadEvent: ProgressEvent<FileReader>) {
      setImageSrc(onLoadEvent?.target?.result);
      setUploadData(undefined);
    }
    
    reader.readAsDataURL(changeEvent.target?.files?.[0]);
  }

  async function handleOnSubmit(event: { preventDefault: () => void; currentTarget: any; }) {
    setLoading(true);
    event.preventDefault();

    const form = event.currentTarget;
    const fileInput = Array.from<any>(form.elements).find(({ name }: any) => name === 'file');

    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append('file', file);
    }

    formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_PRESET as string);

    try {
      const data = await fetch(process.env.NEXT_PUBLIC_CLOUDINARY_URL as string, {
        method: 'POST',
        body: formData
      }).then(response => response.json());

      addToDatabase(data);
  
      setImageSrc(data.secure_url);
      setUploadData(data);
    } catch(error) {

    }

  }

  const handleTagSelect = (tag: TagType) => {
    const alredySelected = tags.find((element: TagType) => element.id === tag.id);

    if(alredySelected) {
      const updatedTags = tags.filter((element: TagType) => element.id !== tag.id);
      setTags(updatedTags);
    } else {
      setTags([...tags, tag]);
    }
  }

  const handleTitleBlur = (value: string) => {
    setSlug(value.trim().toLowerCase().split(' ').join('-'));
  }

  return (
    <>
      {loading ? (<Loading />) : (
        <div className="mt-6 m-auto space-y-6 w-full sm:w-8/12 md:w-7/12">
  
        <form className="" method="post" onSubmit={handleOnSubmit}>
        <div className="relative border-2 border-gray-300 border-dashed rounded-lg p-6 mb-2" id="dropzone">
          <input type="file" name="file" accept="image/*" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 z-50" />
          <div className="text-center">
              <img className="mx-auto h-12 w-12" src="/image-upload.svg" alt="" />

              <h3 className="mt-2 text-sm font-medium text-gray-900">
                  <label htmlFor="file-upload" className="relative cursor-pointer">
                      <span>Drag and drop</span>
                      <span className="text-indigo-600"> or browse </span>
                      <span>to upload article image</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                  Any image 
              </p>
          </div>

        </div>

        <img src={imageSrc} />

        <div className="bg-white py-4 rounded">
          <div className="relative bg-inherit">
            <input type="text" id="title" name="title" className=" peer bg-transparent w-full rounded text-gray-900 placeholder-transparent ring-2 px-2 ring-violet-700 focus:outline-none focus:border-violet-700" onChange={(e) => setTitle(e.target.value)}  onBlur={(e) => handleTitleBlur(e.target.value)} placeholder="Title"/>
            <label htmlFor="title" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-gray-500 peer-focus:text-sm transition-all">Title</label>
          </div>
        </div>

        <div className="bg-white py-4 rounded">
          <div className="relative bg-inherit">
            <input value={slug} type="text" id="slug" name="slug" className=" peer bg-transparent w-full rounded text-gray-900 placeholder-transparent ring-2 px-2 ring-violet-700 focus:outline-none focus:border-violet-700" onChange={(e) => setSlug(e.target.value)} placeholder="Slug"/>
            <label htmlFor="slug" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-gray-500 peer-focus:text-sm transition-all">Slug</label>
          </div>
        </div>

        <div className="bg-white py-4 rounded">
          <div className="relative bg-inherit">
            <textarea id="description" name="description" className=" peer bg-transparent w-full rounded text-gray-900 placeholder-transparent ring-2 px-2 ring-violet-700 focus:outline-none focus:border-violet-700" onChange={(e) => setDescription(e.target.value)} placeholder="Description"/>
            <label htmlFor="description" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-gray-500 peer-focus:text-sm transition-all">Description</label>
          </div>
        </div>
        
        <div className="bg-white py-4 rounded">
          <div className="relative bg-inherit">
            <textarea id="text" name="text" className=" peer bg-transparent w-full rounded text-gray-900 placeholder-transparent ring-2 px-2 ring-violet-700 focus:outline-none focus:border-violet-700" rows={20} onChange={(e) => setText(e.target.value)} placeholder="Post text"/>
            <label htmlFor="text" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-gray-500 peer-focus:text-sm transition-all">Text</label>
          </div>
        </div>
        <div className='mb-4 p-4'>
          <a href='#' className='font-bold' onClick={() => setModalVisibility(true)}>Add image</a>
        </div>

        <div className='bg-gray-300 p-5 mb-5'>
          <p>{`<  = &lt;   >  = &gt; `}</p>
          <p>{`<span>code in text</span>`}</p>
          <p>{`<pre class="language-javascript"><code> language -css -javascript -typescript etc </code></pre>`}</p>
          <p></p>

        </div>

        <TagsInForm handleTagSelect={handleTagSelect} selectedTags={tags} />

        <div className="relative">
          <button className="group flex h-min items-center disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none  rounded-lg shadow-lg font-semibold font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  bg-violet-500 border-b-violet-700 disabled:border-0 disabled:bg-violet-500 disabled:text-white ring-white text-white border-b-4 active:border-0 hover:text-gray-100 active:bg-violet-800 active:text-gray-300 focus-visible:outline-violet-500 text-sm sm:text-base px-8 py-3">
            Add Post
          </button>
        </div>

        </form>
      </div>
      )}
        
      {modalVisibility ? <UploadImageModal /> : null}
    
        
    </>
  )
}