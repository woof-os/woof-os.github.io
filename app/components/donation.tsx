import Link from "next/link";

function Donation() {
    return (
        <div>
            <hr />
            <h2>Donate</h2>
            <p>
                <strong className="text-wrap break-all">Monero: </strong>
                88Ftpu3ncRyLv7Z2c14b9L4MsyWscEqLBJhENxviYtmtRfidDx6G9y3Xyd8aYF8NRV2c2dF5QZiyTfHwuWLH9qmsSpskLhj
            </p>
            <p>
                <strong>BuyMeACoffee: </strong>
                <Link href="https://buymeacoffee.com/acutewoof">acutewoof</Link>
            </p>
        </div>
    );
}

export default Donation;
