"use client"

import Link from "next/link";
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";

export default function Header() {

    const [ref, inView] = useInView();
    const transition = { duration: 0.5 }
    const variants = [{
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 }
    }, {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    }, {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0 }
    }]

    return <div className="w-full flex justify-center py-8">
        <motion.div
            ref={ref}
            className="text-slate-200 py-4 m-auto flex gap-6 lg:gap-6 rounded-xl justify-center items-center flex-wrap">
            <motion.span
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants[0]}
                transition={transition}
            ><Link href="/">Gallery</Link></motion.span>
            <motion.span
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants[1]}
                transition={transition}
            ><Link href="/downloads">Downloads</Link></motion.span>
            <motion.span
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants[2]}
                transition={transition}
            ><Link href="keybinds">Keybinds</Link></motion.span>
        </motion.div>
    </div>
}

function NavOption({ children, onClick }: { children: React.ReactNode, onClick: () => void }) {
    return <button onClick={onClick} className="text-slate-400 hover:text-slate-100 transition-all duration-300">{children}</button>
}