import ShareButtonsFooter from '@/components/share/ShareButtonsFooter';
import Link from 'next/link';

export function Footer() {

  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-purple-400 dark:from-purple-700 dark:to-indigo-700 py-4" >
      <div className='container mx-auto flex flex-wrap flex-col md:flex-row items-center font-bold justify-between'>
        <Link href='/' className='flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0 text-white'>
          <span className='ml-3 text-xl'>&#10100; JS Dev &#10101;</span>
        </Link> 
        <a href='https://zaitsau.pro/' target='_blank' className='flex text-gray-100' aria-label='developed by Mick Zaitsau'>
          <img src="/code.svg" className='px-2'></img> 
          Mick Z.
        </a>
      </div>
    </footer>
  )
}