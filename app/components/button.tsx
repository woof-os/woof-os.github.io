export default function Button(props: {
    children: React.ReactNode
    className?: string
    onClick?: () => void
}) {
    return <button onClick={props.onClick} className={"border focus:outline-none font-medium rounded-full text-sm px-6 py-2 bg-slate-950/80 text-white border-slate-600 hover:bg-slate-950/35 hover:border-slate-600 transition-all duration-150 " + props.className}>{props.children}</button>
} 