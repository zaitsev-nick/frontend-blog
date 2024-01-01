import { useState } from 'react';
import type { Metadata } from 'next';
import UploadForm from './UploadForm';

export const metadata: Metadata = {
  title: 'Upload Post',
  description: '',
}

export default function UploadPage() {

  return (
    <div className="p-5 sm:p-8">
      <UploadForm />
    </div>
  )
}