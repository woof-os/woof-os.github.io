import Button from "./button";
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";

export default function Header({ setPage }: { setPage: (page: number) => void }) {

    const [ref, inView] = useInView();
    const transition = { duration: 1 }
    const variants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    }

    return <div className="w-full flex justify-center py-8">
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={transition}
            className="text-slate-200 py-4 m-auto flex gap-4 lg:gap-6 rounded-xl justify-center items-center flex-wrap">
            <Button onClick={() => { setPage(0) }}>Gallery</Button>
            <Button onClick={() => { setPage(1) }}>Downloads</Button>
            <Button onClick={() => { setPage(2) }}>Keybinds</Button>
        </motion.div>
    </div>
}