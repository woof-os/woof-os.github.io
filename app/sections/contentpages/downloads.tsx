import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
        <p>{"Well, it's been a while since I've started this project, and the team is no longer active. However, I'll try my best to keep Woof OS, as a project, running and alive. So, where are the downloads? They're not here yet as I'm still working on Woof OS and a place to host the ISOs. The old ISOs (be warned that many of the ISOs are broken) can be found as release artifacts of "}<Link href="https://github.com/woof-os/isos-qtile" target="_blank">the isos-qtile repository</Link>.
        </p>
        <p>
            While you wait, consider, <Link href="https://buymeacoffee.com/acutewoof" target="_blank">buying me a coffee</Link> and joining the <Link href="https://discord.gg/p6qNduqwWM" target="_blank">Woof OS Discord server</Link> to get notified when the ISOs are released.
        </p>
        <hr />
        <p>
            Sincerely,
            <br />
            <Link href="https://acutewoof.is-a.dev" target="_blank">Vithushan (ACuteWoof)</Link>
        </p>
    </motion.article>
}
