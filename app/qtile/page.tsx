import Edition from '../components/edition';
import Keybinds from './qtile-keybinds';

export default function Qtile() {
    const mainImage = "/images/qtile/s4.png";
    const images = [
        "/images/qtile/s0.png",
        "/images/qtile/s1.png",
        "/images/qtile/s2.png",
        "/images/qtile/s3.png",
        "/images/qtile/s5.png",
        "/images/qtile/s6.png",
    ];

    const configs: { title: string; link: string; }[] = [
        {
            title: "archiso profile",
            link: "https://github.com/woof-os/iso-profile"
        },
        {
            title: "qtile",
            link: "https://github.com/woof-os/qtile"
        },
        {
            title: "rofi",
            link: "https://github.com/woof-os/rofi"
        },
        {
            title: "dunst",
            link: "https://github.com/woof-os/dunst"
        },
        {
            title: "calamares",
            link: "https://github.com/woof-os/calamares",
        },
        {
            title: "alacritty",
            link: "https://github.com/woof-os/alacritty"
        },
        {
            title: "starship",
            link: "https://github.com/woof-os/starship"
        },
        {
            title: "qt5",
            link: "https://github.com/woof-os/qt5"
        },
        {
            title: "zsh",
            link: "https://github.com/woof-os/zshrc"
        },
        {
            title: "gtk theme",
            link: "https://github.com/woof-os/tokyonight-gtk"
        },
        {
            title: "icons",
            link: "https://github.com/woof-os/icon-config"
        },
        {
            title: "wallpapers",
            link: "https://github.com/woof-os/wallpapers"
        }
    ];

    const title = "Woof OS Qtile Edition";
    const editionId = "qtile";

    return <Edition title={title} mainImage={mainImage} images={images} configs={configs} editionId={editionId} keybinds={<Keybinds />} />;
}
