import Link from 'next/link'
import { IBM_Plex_Mono } from 'next/font/google'

const mono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['400'],
})

export default function Configs({ items }: { items: { title: string, link: string }[] }) {
    return <section id="configs">
        <h2>Configs</h2>
        <ul className={"md:grid md:grid-cols-2 " + mono.className}>
            {items.map(item => <li key={item.link}><Link
                href={item.link}>{item.title}</Link></li>)}
        </ul>
    </section>
}