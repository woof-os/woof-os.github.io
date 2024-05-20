import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function Pacman() {
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
        <div>
            <h1>Woof Pacman Repository</h1>
            <p>
                This pacman repository is used to distribute packages needed for Woof OS, including configuration files, that are not available in the Arch Linux repositories.
            </p>
            <p>
                To use the repository, add the following to your <code>/etc/pacman.conf</code>:
            </p>
            <pre>
                [woof-pacman-repo]
                <br />
                SigLevel = Optional TrustAll
                <br />
                Server = https://repo.os.lewoof.xyz/$arch
            </pre>
            <Link href={"https://repo.os.lewoof.xyz/"}>Browse the repository</Link>
        </div>
    </motion.article>
}
