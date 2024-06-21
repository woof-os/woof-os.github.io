import type { Metadata } from "next";
import { IBM_Plex_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Hero from "./components/hero";
import Header from "./components/header/header";
import ArticleFooter from "./components/articlefooter";

const IBMPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

const IBMPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Woof OS",
  description: "A simple Arch respin by ACuteWoof.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages: {
    title: string;
    link?: string;
    subpages?: { title: string; link: string }[];
  }[] = [
    { title: "Home", link: "/" },
    { title: "Downloads", link: "/downloads" },
    {
      title: "Editions",
      subpages: [
        {
          title: "Qtile (xorg)",
          link: "/qtile",
        },
        {
          title: "Sway",
          link: "/sway",
        },
      ],
    },
    { title: "Pacman", link: "/pacman" },
  ];

  return (
    <html lang="en">
      <body className={"bg-slate-900 hero-bg-image " + IBMPlexMono.className}>
        <main className="min-h-screen overflow-x-hidden">
          <Hero />
          <div className="w-full flex flex-col gap-12 items-center pt-12 pb-12 bg-slate-950 md:bg-transparent md:bg-gradient-to-b md:from-slate-950/50 md:via-slate-950 md:to-slate-950">
            <div className="w-full max-w-screen-2xl flex-grow lg:bg-slate-900 text-slate-200">
              <Header items={pages} />
              <div className={"w-full p-4 lg:p-12 " + IBMPlexSerif.className}>
                {children}
              </div>
            </div>
            <ArticleFooter />
          </div>
          <footer
            className={
              "bg-slate-950 p-4 md:flex md:items-center md:justify-between text-slate-400 md:p-6 text-sm " +
              IBMPlexMono.className
            }
          >
            <span className="sm:text-center">
              © 2023-2024 Vithushan. All Rights Reserved.
            </span>
            <span className="flex gap-6">
              <Link target="_blank" href="https://lewoof.xyz">
                Vithushan (ACuteWoof)
              </Link>
              <Link target="_blank" href="https://github.com/woof-os">
                Github
              </Link>
            </span>
          </footer>
        </main>
      </body>
    </html>
  );
}
