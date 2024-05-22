import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return <article>
        <div>
            <h1>Woof OS</h1>
            <p>
                Woof OS is a simple respin of Arch Linux with a focus on simplicity and speed. The main focus was to recreate my personal setup (only applies to the Qtile edition) in a way that is easy for install and get up and running quickly. The distro is designed to be a daily driver for those who want a system close to Arch Linux without the hassle of setting up everything from scratch.
            </p>
            <p>
                The configuration files and any packages outside the Arch Linux repositories used in Woof OS are also available to install through our pacman repository. You can find the repository information on the <Link target="_self" href="/pacman">pacman</Link> page.
            </p>

            <h2>Editions</h2>
            <p>
                Woof OS Sway edition is now under development thanks to <Link target="_blank" href="https://github.com/akirapearl">Akirapearl</Link>.
            </p>
            <p>
                If you would like to contribute to the project for me to release more editions, you can <Link target="_self" href="#contact">get in touch with me</Link>, or <Link target="_self" href="#donate">donate</Link> to the project (information at the bottom of the page).
            </p>
        </div>
        <hr /><Image src="/images/main.png" alt="Woof OS" width={1920} height={1080} />
    </article>
}
