import { useState } from 'react';
import type { Metadata } from 'next';
import UploadForm from './UploadForm';

export const metadata: Metadata = {
  title: 'Upload hentai gif',
  description: 'You can upload and share your favorite gifs',
}

export default function UploadPage() {

  return (
    <div className="p-5 sm:p-8">
      <UploadForm />
    </div>
  )
}