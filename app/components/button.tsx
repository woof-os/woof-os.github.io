export default function Button(props: {
    children: React.ReactNode
    className?: string
    onClick?: () => void
}) {
    return <button onClick={props.onClick} className={"text-slate-900 bg-white border border-slate-300 focus:outline-none hover:bg-slate-100 font-medium rounded-full text-sm px-6 py-2 dark:bg-slate-950/80 dark:text-white dark:border-slate-600 dark:hover:bg-slate-950/35 dark:hover:border-slate-600 transition-all duration-150 " + props.className}>{props.children}</button>
} 