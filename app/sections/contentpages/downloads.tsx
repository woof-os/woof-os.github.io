import Link from "next/link";

export default function Downloads() {
    return <article className="prose max-w-none prose-slate prose-invert md:px-12">
        <h1>Where are the downloads?</h1>
        <p>{"Well, it's been a while since I've started this project, and the team is no longer active. However, I'll try my best to keep Woof OS, as a project, running and alive. So, where are the downloads? They're not here yet as I'm still working on Woof OS and a place to host the ISOs. The old ISOs (be warned that many of the ISOs are broken) can be found as release artifcats of "}<Link href="https://github.com/woof-os/isos-qtile" target="_blank">the isos-qtile repository</Link>.
        </p>
        <p>
            While you wait, consider, <Link href="https://buymeacoffee.com/acutewoof" target="_blank">buying me a coffee</Link> and joining the <Link href="https://discord.gg/p6qNduqwWM" target="_blank">Woof OS Discord server</Link> to get notified when the ISOs are released.
        </p>
        <hr />
        <p>
            Sincerely,
            <br />
            <Link href="https://acutewoof.is-a.dev" target="_blank">Vithushan (ACuteWoof)</Link>
        </p>
    </article>
}