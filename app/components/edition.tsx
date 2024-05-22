import Image from 'next/image';
import Link from 'next/link';
import Gallery from '../components/gallery';
import Download from '../components/download';
import Configs from '../components/configs';
import React from 'react';
import { IBM_Plex_Mono } from 'next/font/google';

const mono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['400'],
})

export default function Edition({ title, mainImage, images, configs, editionId, keybinds }: { title: string, mainImage?: string, images?: string[], configs: { title: string, link: string }[], editionId: string, keybinds: React.ReactNode }) {
    return <div className="flex flex-col gap-8">
        <article>
            <h1>{title}</h1>
            <div className={"flex gap-4 " + mono.className}>
                <Link target="_self" href="#download">Download</Link>
                <Link target="_self" href="#keybinds">Keybinds</Link>
                <Link target="_self" href="#configs">Configs</Link>
                {mainImage && images && <Link target="_blank" href="#gallery">Gallery</Link>}
            </div>
            {mainImage && <><hr />
                <Image src={mainImage} alt="main image" width={1920} height={1080} /></>}
            <hr />
            <Download editionId={editionId} />
            <hr />
            {keybinds}
            <hr />
            <Configs items={configs} />
            {mainImage && images &&
                <>
                    <hr />
                    <Gallery mainImage={mainImage} images={images} />
                </>
            }
        </article>
    </div>;
}
