import type { Metadata } from 'next'
import { IBM_Plex_Serif, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Hero from './sections/hero'
import Header from './components/header'
import ArticleFooter from './components/articlefooter'

const IBMPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400'],
})

const IBMPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Woof OS',
  description: 'A simple Arch respin by ACuteWoof.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={IBMPlexMono.className}>
        <main className="min-h-screen bg-slate-950 overflow-x-hidden">
          <Hero />
          <div className="w-full flex flex-col items-center pt-24 pb-12">
            <div className="min-h-screen w-full max-w-screen-2xl flex-grow lg:bg-slate-900 text-slate-200">
              <Header />
              <div className={"w-full p-4 lg:p-12 " + IBMPlexSerif.className}>
                {children}
              </div>
            </div>
            <ArticleFooter />
          </div>
          <footer className={'p-4 md:flex md:items-center md:justify-between text-slate-400 md:p-6 text-sm ' + IBMPlexMono.className}>
            <span className='sm:text-center'>
              © 2023-2024 ACuteWoof. All Rights Reserved.
            </span>
            <span className="flex gap-6">
              <Link href='https://lewoof.xyz' target="_blank" className="hover:text-white">
                ACuteWoof
              </Link>
              <Link href='https://github.com/woof-os' target="_blank" className="hover:text-white">
                Github
              </Link>
            </span>
          </footer>
        </main>
      </body>
    </html>
  )
}
