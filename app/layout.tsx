import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import './globals.css'

const ibm_plex_sans = IBM_Plex_Sans({
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
      <body className={ibm_plex_sans.className}>{children}</body>
    </html>
  )
}
