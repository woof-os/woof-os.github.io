import Image from "next/image";

export default function Gallery() {
    const mainImage = "/images/2024-01-16_23-04.png"
    const images = [
        "/images/2024-01-16_23-01_1.png",
        "/images/2024-01-16_23-01.png",
        "https://raw.githubusercontent.com/ACuteWoof/dot-files/main/docs/static/s0.png",
        "https://raw.githubusercontent.com/ACuteWoof/dot-files/main/docs/static/s1.png",
        "https://raw.githubusercontent.com/ACuteWoof/dot-files/main/docs/static/s2.png",
        "https://raw.githubusercontent.com/ACuteWoof/dot-files/main/docs/static/s3.png",
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

