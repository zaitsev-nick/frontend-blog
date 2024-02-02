'use client';

import { useState, useEffect } from 'react';

type PropsType = {
  closeModalHandler: () => void;
};

export default function UploadImageModal({ closeModalHandler }: PropsType) {
  const [imageSrc, setImageSrc] = useState<any>();
  const [uploadData, setUploadData] = useState<any>({});

  function handleFileChange(changeEvent: any) {
    const reader = new FileReader();
    console.log('1')

    reader.onload = function(onLoadEvent: ProgressEvent<FileReader>) {
      setImageSrc(onLoadEvent?.target?.result);
      setUploadData(undefined);
    }
    
    reader.readAsDataURL(changeEvent.target?.files?.[0]);
  }

  async function handleOnSubmit(event: { preventDefault: () => void; currentTarget: any; }) {
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
  
      setImageSrc(data.secure_url);
      setUploadData(data);
    } catch(error) {
      console.log(error)
    }

  }

  return (
    <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
  
          <div className="modal-content py-4 text-left px-6">
              <div className="flex justify-between items-center pb-3">
                  <p className="text-2xl font-bold">Upload image</p>
                  <div className="modal-close cursor-pointer z-50">
                    <a href="#" onClick={() => closeModalHandler()}>X</a>
                  </div>
              </div>
              <form className="" method="post" onSubmit={handleOnSubmit}>
                <div className="relative border-2 border-gray-300 border-dashed rounded-lg p-6 mb-2" id="dropzone2">
                  <input type="file" name="file" accept="image/*" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 z-50" />
                  <div className="text-center">
                      <img className="mx-auto h-12 w-12" src="/image-upload.svg" alt="" />

                      <h3 className="mt-2 text-sm font-medium text-gray-900">
                          <label htmlFor="file-upload2" className="relative cursor-pointer">
                              <span>Drag and drop</span>
                              <span className="text-indigo-600"> or browse </span>
                              <span>to upload article image</span>
                              <input id="file-upload2" name="file-upload2" type="file" className="sr-only" />
                          </label>
                      </h3>
                      <p className="mt-1 text-xs text-gray-500">
                          Any image 
                      </p>
                  </div>

                </div>

                <img src={imageSrc} />

                <br/>
                {uploadData ? <p>{uploadData.url}</p> : null}
                <br/>

                <div className="relative">
                  <button className="group flex h-min items-center disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none  rounded-lg shadow-lg font-semibold font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  bg-violet-500 border-b-violet-700 disabled:border-0 disabled:bg-violet-500 disabled:text-white ring-white text-white border-b-4 active:border-0 hover:text-gray-100 active:bg-violet-800 active:text-gray-300 focus-visible:outline-violet-500 text-sm sm:text-base px-8 py-3">
                    Upload image
                  </button>
                </div>
              </form>

              <div className="mt-4 flex justify-end">
                <button onClick={() => closeModalHandler()} className="modal-close px-4 bg-gray-100 p-3 rounded-lg text-black hover:bg-gray-200">Close</button>
              </div>
          </div>
      </div>
    </div>  
  )
}