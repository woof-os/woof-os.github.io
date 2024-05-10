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
        <h1>Where are the downloads?</h1>
        <p>{"Well, it's been a while since I've started this project, and the team is no longer active. However, I'll try my best to keep Woof OS, as a project, running and alive. So, where are the downloads? They're not here yet as I'm still working on Woof OS' installer as Calamares (with all due respect) has been a pain in the ass to maintain Woof OS with. Once the project is complete, downloads will be available here."}
        </p>
        <p>
            Sincerely,
            <br />
            <Link href="https://lewoof.xyz" target="_blank">Vithushan (ACuteWoof)</Link>
        </p>
        <Donation />
    </motion.article>
}
