import Link from "next/link";

export default function Downloads() {
  return (
    <article>
      <h1>Download Woof OS</h1>
      <div className="flex flex-col md:flex-row gap-16 flex-wrap">
        <div>
          <h2>Qtile Edition</h2>
          <span className="flex flex-col gap-2 md:flex-row md:gap-12">
            <span>
              <h4>LeWoof Mirror (Temporarily Offline)</h4>
              <Link
                target="_blank"
                href="https://dl.os.lewoof.xyz/woofos-x86_64.iso"
              >
                Latest release
              </Link>
              <br />
              <Link target="_blank" href="https://dl.os.lewoof.xyz/">
                Browse downloads
              </Link>
            </span>
            <span>
              <h4>Github Mirror</h4>
              <Link
                target="_blank"
                href="https://github.com/woof-os/isos-qtile/releases/latest/download/woofos.iso"
              >
                Latest release
              </Link>
              <br />
              <Link
                target="_blank"
                href="https://github.com/woof-os/isos-qtile/releases"
              >
                Browse downloads
              </Link>
            </span>
          </span>
        </div>
        <div>
          <h2>Sway Edition</h2>
          <span className="flex flex-col gap-2 md:flex-row md:gap-12">
            <span>
              <h4>LeWoof Mirror (Temporarily Offline)</h4>
              <Link
                target="_blank"
                href="https://dl.os.lewoof.xyz/sway/woofos-sway-x86_64.iso"
              >
                Latest release
              </Link>
              <br />
              <Link target="_blank" href="https://dl.os.lewoof.xyz/sway">
                Browse downloads
              </Link>
            </span>
            <span>
              <h4>Github Mirror</h4>
              <Link
                target="_blank"
                href="https://github.com/woof-os/isos-sway/releases/latest/download/woofos-sway.iso"
              >
                Latest release
              </Link>
              <br />
              <Link
                target="_blank"
                href="https://github.com/woof-os/isos-sway/releases"
              >
                Browse downloads
              </Link>
            </span>
          </span>
        </div>
      </div>
    </article>
  );
}
