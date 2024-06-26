import Link from "next/link";

export default function Pacman() {
    return <article
    >
        <div>
            <h1>Woof Pacman Repository</h1>
            <p>
                This pacman repository is used to distribute packages needed for Woof OS, including configuration files, that are not available in the Arch Linux repositories.
            </p>
            <p>
                To use the repository, add the following to your <code>/etc/pacman.conf</code>:
            </p>
            <pre>
                [woof-pacman-repo]
                <br />
                SigLevel = Optional TrustAll
                <br />
                Server = https://repo.os.lewoof.xyz/$arch
                <br />
                Server = https://woof-os.github.io/$repo/$arch
            </pre>
            <Link target="_blank" href={"https://repo.os.lewoof.xyz/"}>Browse the repository</Link>
        </div>
    </article>
}
