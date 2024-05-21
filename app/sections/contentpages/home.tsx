import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return <article
       className="prose max-w-none prose-slate prose-invert md:px-12">
        <div>
            <h1>Woof OS</h1>
            <p>
                Woof OS is a simple respin of Arch Linux with a focus on simplicity and speed. The main focus was to recreate my personal setup (only applies to the Qtile edition) in a way that is easy for install and get up and running quickly. The distro is designed to be a daily driver for those who want a system close to Arch Linux without the hassle of setting up everything from scratch.
            </p>
            <p>
                The configuration files and any packages outside the Arch Linux repositories used in Woof OS are also available to install through our pacman repository. You can find the repository information on the <Link href="/pacman">pacman</Link> page.
            </p>

            <h2>Editions</h2>
            <p>
                The XFCE4 edition is no longer available and Woof OS is now only available in the Qtile edition. If you would like to contribute to the project for me to release more editions, you can <Link href="#contact">get in touch with me</Link>, or <Link href="#donate">donate</Link> to the project (information at the bottom of the page).
            </p>
            <h2>Information about Qtile edition</h2>
            <ul>
                <li>
                    Packages installed by default: <Link href="https://github.com/woof-os/iso-profile/blob/main/archlive/packages.x86_64">packages.x86_64</Link>
                </li>
                <li>
                    ISO profile: <Link href="https://github.com/woof-os/iso-profile">view on GitHub</Link>
                </li>
                <li>
                    Qtile config: <Link href="https://github.com/woof-os/qtile/">view on GitHub</Link>
                </li>
            </ul>

        </div>
        <hr /><Image src="/images/2024-01-16_23-04.png" alt="Woof OS" width={1920} height={1080} />
    </article>
}
