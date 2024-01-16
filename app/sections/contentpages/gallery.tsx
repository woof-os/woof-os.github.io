import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Gallery() {
    const [ref, inView] = useInView();
    const mainImage = "/images/2024-01-16_23-04.png"
    const images = [
        "/images/2024-01-16_23-01_1.png",
        "/images/2024-01-16_23-01.png",
        "https://raw.githubusercontent.com/ACuteWoof/dot-files/main/docs/static/s0.png",
        "https://raw.githubusercontent.com/ACuteWoof/dot-files/main/docs/static/s1.png",
        "https://raw.githubusercontent.com/ACuteWoof/dot-files/main/docs/static/s2.png",
        "https://raw.githubusercontent.com/ACuteWoof/dot-files/main/docs/static/s3.png",
    ]

    return <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        }}
        transition={{
            duration: 1,
        }}
        ref={ref}
        className="p-12 h-full w-full">
        <motion.div

            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
            }}
            transition={{
                duration: 1,
            }}
            className="h-full w-full flex justify-center items-center">
            <img src={mainImage} className="h-full w-full" />
        </motion.div>
        <div className="w-full grid md:grid-cols-2 gap-2 mt-2">
            {
                images.map((image, index) => {
                    return <Image src={image} key={index} />
                }
                )
            }
        </div>
    </motion.div>
}

function Image({ src }: { src: string }) {

    const [ref, inView] = useInView();
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    return <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{
            duration: 1,
        }}
        className="h-full w-full flex justify-center items-center">
        <img src={src} className="h-full w-full" />
    </motion.div>
}

