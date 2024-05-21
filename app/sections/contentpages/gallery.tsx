import Image from "next/image";

export default function Gallery() {
    const mainImage = "/images/s4.png"
    const images = [
        "/images/s6.png",
        "/images/s5.png",
        "/images/s3.png",
        "/images/s2.png",
        "/images/s1.png",
        "/images/s0.png",
    ]

    return <div
        className="h-full w-full">
        <div
            className="h-full w-full flex justify-center items-center">
            <Image src={mainImage} className="h-full w-full" alt="main image" width={1920} height={1080} />
        </div>
        <div className="w-full grid md:grid-cols-2 gap-2 mt-2">
            {
                images.map((image, index) => {
                    return <CustImage src={image} key={index} />
                }
                )
            }
        </div>
    </div>
}

function CustImage({ src }: { src: string }) {
    return <div className="h-full w-full flex justify-center items-center">
        <Image src={src} alt="screenshot" className="h-full w-full" width={1920} height={1080} />
    </div>
}

