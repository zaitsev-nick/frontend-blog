import styles from './Header.module.scss';
import Link from 'next/link';
import cx from 'classnames';

export function Header() {

  return (
    <header className={cx(styles.header, "bg-gradient-to-r from-purple-400 to-indigo-600 dark:from-purple-700 dark:to-indigo-700 py-4")}>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-between'>
        <Link href='/' className='flex md:w-2/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0'>
        <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
          &lt; JS Dev /&gt;
        </button>
        </Link> 
        <Link href='/upload' className='relative'>
        <div className="flex h-12 justify-center gap-x-6">
            <a className="group flex h-min items-center disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none  rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  bg-violet-500 border-b-violet-700 disabled:border-0 disabled:bg-violet-500 disabled:text-white ring-white text-white border-b-4 hover:border-0 active:border-0 hover:text-gray-100 active:bg-violet-800 active:text-gray-300 focus-visible:outline-violet-500 text-sm sm:text-base"
                href="">
                Looking for developer?
            </a>
            <a className="group flex h-min ring-none items-center justify-center hover:opacity-95 disabled:opacity-50  rounded-lg py-2 px-4 font-dm focus:outline-none !ring-transparent text-violet-800 border border-violet-500 border-b-violet-400 border-b-4 hover:border active:border bg-white hover:text-violet-900 hover:bg-gray-50  active:bg-gray-100 active:text-violet-600 focus-visible:outline-violet-600 focus-visible:ring-violet-700 text-sm sm:text-base"
                href="">
                <svg aria-hidden="true" className="h-3 w-3 flex-none fill-violet-600 group-active:fill-current">
                    <path
                        d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z">
                    </path>
                </svg>
                <span className="ml-3">Watch & Read</span>
            </a>
        </div>
        </Link>
      </div>
    </header>
  )
}