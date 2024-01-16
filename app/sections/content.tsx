import Header from "../components/header";
import Downloads from "./contentpages/downloads";
import Gallery from "./contentpages/gallery";
import Keybinds from "./contentpages/keybinds";

export default function Content({ page, setPage }: {
    page: number,
    setPage: (page: number) => void
}) {
    return <div className="w-full flex justify-center pt-24 pb-12">
        <div className="min-h-screen max-w-screen-2xl flex-grow lg:bg-slate-900">
            <Header setPage={setPage} />
            <div>
                {
                    page === 0 ? <Gallery /> : page === 1 ? <Downloads /> : page === 2 ? <Keybinds /> : <Gallery />
                }
            </div>
        </div>
    </div>
}