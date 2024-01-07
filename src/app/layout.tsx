import type { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import Script from 'next/script'
import './globals.scss';

import LayoutMain from '@/components/layout/LayoutMain';

const inter = Inter({ subsets: ['latin'] });

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export const metadata: Metadata = {
  title: 'JS Dev',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={inter.className}>
      <LayoutMain>
        {children}
      </LayoutMain>
      </body>
      {/*<GoogleTagManager gtmId="G-D9V5VE179P" />*/}
      <Script src="/prism.js" />
    </html>
  )
}
