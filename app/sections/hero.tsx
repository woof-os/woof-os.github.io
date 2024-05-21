import { Major_Mono_Display } from "next/font/google";

const major_mono_display = Major_Mono_Display({ subsets: ['latin'], weight: ['400'] })

export default function Hero() {
    return <div className="h-[50vh] hero-bg-image">
        <div className="h-full w-full bg-gradient-to-b from-transparent to-slate-950 flex flex-col justify-center items-center">
            <div className="text-white text-center">
                <h1 className={"text-6xl lg:text-8xl flex flex-wrap gap-8 justify-center " + major_mono_display.className}>Woof OS</h1>
            </div></div></div>;
}
