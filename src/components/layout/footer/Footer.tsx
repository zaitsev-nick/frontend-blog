import ShareButtonsFooter from '@/components/share/ShareButtonsFooter';
import Link from 'next/link';

export function Footer() {

  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-purple-400 dark:from-purple-700 dark:to-indigo-700 py-4" >
      <div className='container mx-auto flex flex-wrap flex-col md:flex-row items-center font-bold justify-between'>
        <Link href='/' className='flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0 text-white'>
          <span className='ml-3 text-xl'>&lt; JS Dev /&gt;</span>
        </Link> 
        <div></div>
      </div>
    </footer>
  )
}