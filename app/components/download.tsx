import Link from "next/link";

export default function Download({ editionId }: { editionId: string }) {
    return <section id="download">
        <h1>Download</h1>
        <span className="flex flex-col gap-2 md:flex-row md:gap-12">
            <span>
                <h2>LeWoof Mirror</h2>
                <Link href={`https://dl.os.lewoof.xyz/${editionId}/woofos-x86_64.iso`} target="_blank">Latest release</Link>
                <br />
                <Link href={`https://dl.os.lewoof.xyz/${editionId}/`}>Browse downloads</Link>
            </span>
            <span>
                <h2>Github Mirror</h2>
                <Link href={`https://github.com/woof-os/isos-${editionId}/releases/latest/download/woofos${editionId === "qtile" ? "" : `-${editionId}`
                    }.iso`} target="_blank">Latest release</Link>
                <br />
                <Link href={`https://github.com/woof-os/isos-${editionId}/releases`}>Browse downloads</Link>
            </span>
        </span>
    </section>
}