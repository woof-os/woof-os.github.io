"use client"
import { useState } from "react"

export default function Expandable({ item }: { item: { title: string, subpages: { title: string, link: string }[] } }) {
    const [expanded, setExpanded] = useState(false)

    return <div className="flex flex-col w-full">
        <a onClick={
            () => setExpanded(!expanded)
        } className={"cursor-pointer " + (expanded ? "underline" : "")}>{item.title}</a>

        <div className={"bg-slate-950 md:bg-slate-900 w-full absolute top-10 left-0 right-0 flex justify-center py-4 gap-8 " + (expanded ? "block" : "hidden")}>
            {item.subpages.map((subpage, i) =>
                <a key={i} href={subpage.link} >{subpage.title}</a>
            )}
        </div>
    </div>
}