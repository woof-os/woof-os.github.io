"use client"

import Link from "next/link";
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";

export default function Header() {

    const [ref, inView] = useInView();
    const transition = { duration: 0.5 }
    const variant = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 }
    }

    return <div className="w-full flex justify-center py-8">
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variant}
            transition={transition}
            className="text-slate-200 py-4 m-auto flex gap-6 lg:gap-6 rounded-xl justify-center items-center flex-wrap">
            <Link href="/">Home</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/keybinds">Keybinds</Link>
            <Link href="/downloads">Downloads</Link>
            <Link href="/pacman">Pacman</Link>
        </motion.div>
    </div>
}