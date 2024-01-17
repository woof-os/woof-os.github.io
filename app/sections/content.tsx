import Header from "../components/header";
import Downloads from "./contentpages/downloads";
import Gallery from "./contentpages/gallery";
import Keybinds from "./contentpages/keybinds";
import { IBM_Plex_Serif } from "next/font/google"

const ibm_plex_serif = IBM_Plex_Serif({
    subsets: ['latin'],
    weight: ['400'],
})


export default function Content({ page, setPage }: {
    page: number,
    setPage: (page: number) => void
}) {
    return <div className="w-full flex justify-center pt-24 pb-12">
        <div className="min-h-screen max-w-screen-2xl flex-grow lg:bg-slate-900 text-slate-200">
            <Header setPage={setPage} />
            <div className={"p-4 lg:p-12 " + ibm_plex_serif.className}>
                {
                    page === 0 ? <Gallery /> : page === 1 ? <Downloads /> : page === 2 ? <Keybinds /> : <Gallery />
                }
            </div>
        </div>
    </div>
}