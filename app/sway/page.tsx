import Edition from '../components/edition';
import Keybinds from './sway-keybinds';

export default function Qtile() {
    const configs: { title: string; link: string; }[] = [
        {
            title: "archiso profile",
            link: "https://github.com/woof-os/iso-profile-sway"
        },
        {
            title: "sway",
            link: "https://github.com/woof-os/sway-waybar-akirapearl"
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
            link: "https://github.com/woof-os/calamares-sway",
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
            title: "sddm",
            link: "https://github.com/woof-os/tokyo-night-sddm"
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

    const title = "Woof OS Sway Edition";
    const editionId = "sway";

    return <Edition title={title} configs={configs} editionId={editionId} keybinds={<Keybinds />} />;
}
