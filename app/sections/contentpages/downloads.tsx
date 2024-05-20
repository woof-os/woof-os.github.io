import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Donation from "../../components/donation";

export default function Downloads() {
    const [ref, inView] = useInView();
    const transition = { duration: 0.5 }
    const variants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 }
    }

    return <motion.article
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={transition}
        ref={ref}
        className="prose max-w-none prose-slate prose-invert md:px-12">
        <h1>Download Woof OS Qtile Edition</h1>

        <span className="flex flex-col gap-2 md:flex-row md:gap-12">
            <span>
                <h4>LeWoof Mirror</h4>
                <Link href="https://dl.os.lewoof.xyz/woofos-x86_64.iso" target="_blank">Latest release</Link>
                <br />
                <Link href="https://dl.os.lewoof.xyz/">Browse downloads</Link>
            </span>
            <span>
                <h4>Github Mirror</h4>
                <Link href="https://github.com/woof-os/isos-qtile/releases/latest/download/woofos.iso" target="_blank">Latest release</Link>
                <br />
                <Link href="https://github.com/woof-os/isos-qtile/releases">Browse downloads</Link>
            </span>
        </span>
        <Donation />
    </motion.article>
}
