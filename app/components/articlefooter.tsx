import Link from "next/link";

function ArticleFooter() {
    return (
        <div className="max-w-screen-2xl flex-grow p-4 lg:p-12 lg:bg-slate-900 text-slate-200">
            <div
                className="prose max-w-none prose-slate prose-invert md:px-12 md:grid md:grid-cols-2">
                <section id="contact">
                    <h2>Contact</h2>
                    <ul>
                        <li>
                            Email:&nbsp;
                            <Link href="mailto:sutharshanvithushan@gmail.com">
                                sutharshanvithushan@gmail.com
                            </Link>
                        </li>
                        <li>
                            Matrix:&nbsp;
                            <Link href="https://matrix.to/#/#woof-os:matrix.org">
                                #woof-os:mx.lewoof.xyz
                            </Link>{" | "}
                            <Link href="https://matrix.to/#/@acutewoof:matrix.org">
                                @acutewoof:mx.lewoof.xyz
                            </Link>
                        </li>
                        <li>
                            Discord:&nbsp;
                            <Link href="https://discord.gg/2G2yGUAXUS">
                                Woof OS
                            </Link>
                        </li>
                    </ul></section>
                <section id="donate">
                    <h2>Donate</h2>
                    <ul>
                        <li>
                            <strong>Monero: </strong>
                            <span className="text-wrap break-all">88Ftpu3ncRyLv7Z2c14b9L4MsyWscEqLBJhENxviYtmtRfidDx6G9y3Xyd8aYF8NRV2c2dF5QZiyTfHwuWLH9qmsSpskLhj</span>
                        </li>
                        <li>
                            <strong>BuyMeACoffee: </strong>
                            <Link href="https://buymeacoffee.com/acutewoof">acutewoof</Link>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default ArticleFooter;
