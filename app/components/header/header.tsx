import Expandable from "./expandable";
import Link from "next/link";

export default function Header({ items }: { items: { title: string, link?: string, subpages?: { title: string, link: string }[] }[] }) {
    return <div className="w-full flex justify-center py-8">
        <div
            className="text-slate-200 py-4 m-auto flex gap-6 lg:gap-6 rounded-xl justify-center items-start flex-wrap relative">
            {items &&
                items.map((item, i) => <div key={i} className="flex flex-col">
                    {item.subpages ? <Expandable item={{
                        title: item.title,
                        subpages: item.subpages
                    }} /> : item.link &&
                    <Link target="_blank" href={item.link
                    }>
                        {item.title}
                    </Link>
                    }
                </div>)
            }
        </div>
    </div>
}