import Link from "next/link";

export default function Downloads() {
    return <article
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
    </article>
}
