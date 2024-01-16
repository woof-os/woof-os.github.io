"use client"

import Link from "next/link";
import Hero from "./sections/hero";
import Content from "./sections/content"
import { IBM_Plex_Mono } from "next/font/google";
import { useState } from "react";

const IBMPlexMono = IBM_Plex_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ["400"],
})

export default function Home() {
  const [page, setPage] = useState(0);

  return <main className="min-h-screen bg-slate-950 overflow-x-hidden">
    <Hero />
    <Content page={page} setPage={setPage} />
    <footer className={'p-4 md:flex md:items-center md:justify-between text-slate-400 md:p-6 text-sm ' + IBMPlexMono.className}>
      <span className='sm:text-center'>
        © 2023 ACuteWoof. All Rights Reserved.
      </span>
      <span className="flex gap-6">
        <Link href='https://acutewoof.is-a.dev' target="_blank" className="hover:text-white">
          ACuteWoof
        </Link>
        <Link href='https://github.com/woof-os' target="_blank" className="hover:text-white">
          Github
        </Link>
      </span>
    </footer>
  </main>
}
