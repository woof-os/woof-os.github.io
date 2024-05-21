

import Link from "next/link";

export default function Header() {
    return <div className="w-full flex justify-center py-8">
        <div
            className="text-slate-200 py-4 m-auto flex gap-6 lg:gap-6 rounded-xl justify-center items-center flex-wrap">
            <Link href="/">Home</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/keybinds">Keybinds</Link>
            <Link href="/downloads">Downloads</Link>
            <Link href="/pacman">Pacman</Link>
        </div>
    </div>
}
