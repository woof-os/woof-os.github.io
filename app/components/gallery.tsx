import Image from "next/image";

export default function Gallery({ mainImage, images }: { mainImage: string, images: string[] }) {
    return <section id="gallery">
        <h1>Gallery</h1>
        <div
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
        </div></section>
}

function CustImage({ src }: { src: string }) {
    return <div className="h-full w-full flex justify-center items-center">
        <Image src={src} alt="screenshot" width={1920} height={1080} />
    </div>
}

