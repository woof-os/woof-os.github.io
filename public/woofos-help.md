## Woof OS Qtile Edition
Woof OS uses a tiling window manager Qtile which is mainly controlled using the
keyboard. For further configuration of Qtile and it's many keybinds you can find the
confid located in `~/.config/qtile/config.py` on the system and information on the
many config options for Qtile at https://docs.qtile.org/en/stable/.

### Keybinds
By default in the config `[mod]` is the `Super`/`mod4` key, commonly known as the
`Windows` key on most keyboards except for on Macs and Apple keyboards as they have a
`Command` key instead, but both keys functions the same with WoofOS.

Tiling window managers are different from common desktops environments as they operate
with the concept of opening a window in the max size available to it while also
intelligently dividing the screen space to accommodate any new windows you open.
When closing a window, whatever applications you may have left will be resized to take
advantage of the new screen space now available to them. As Qtile uses the keyboard for
the main navigation and manipulation of the graphical work-spaces, it's important to
fully understand the controls which are laid out below; but also keep in mind that
these controls can be changed in the config file if they don't work for you in their
current configuration.

#### Focused navigation
* `[mod] + h` moves focus to the left.
* `[mod] + l` moves focus to the right.
* `[mod] + j` moves focus down.
* `[mod] + k` moves focus up.
* `[mod] + Spacebar` moves focus to the next window.
* `[mod] + .` moves focus to the next screen.

*The mouse can also be used to switch focus between windows by simply hovering the
cursor over them; but once you get used to the keyboard controls you'll find them to
be much faster to use in most situations.*

Tiling window managers have tabbed work-spaces which are another powerful tool you'll
find yourself using more over time. They allow the user to arrange their applications in
a manner fitting to their style and needs, while also allowing the user to switch to a
new workspace for more room to work in without effecting the positioning of applications
in the previous workspace, allowing the user to save screen space while using the system
and also save time in the process.

* `[mod] + 1-9` switches active work-spaces.

#### Window arrangement and sizing
The user is able to manipulate the size and position of the active window, and is also
able to fully rearrange the window layout as they feel the need or desire to do so using
the keybinds listed below.

* `[mod] + Shift + h` moves focused window to the left.
* `[mod] + Shift + l` moves focused window to the right.
* `[mod] + Shift + j` moves focused window down.
* `[mod] + Shift + k` moves focused window up.

* `[mod] + Shift + Return` toggles between split and stacked layout modes.
* `[mod] + Shift + Tab` shifts windows through different position layouts.
* `[mod] + shift + 1-9` shifts focused windows to specified workspace ID.

* `[mod] + CTRL + h` resizes window to the left.
* `[mod] + CTRL + l` resizes window to the right.
* `[mod] + CTRL + j` resizes window downwards.
* `[mod] + CTRL + k` resizes window upwards.
* `[mod] + CTRL + n` resets all window sizes.

#### Miscellaneous and launching programs
* `[mod] + Return` launches the terminal (default is alacritty).
* `[mod] + r` opens the Rofi run launcher (this allows you to launch applications by name).
* `[mod] + b` launches the web browser (defualt is Firefox).
* `[mod] + c` launches the file manager (default is Vifm).
* `[mod] + z` opens a copied PDF URL in Zanthura.
* `[mod] + y` opens a copied YouTube URL in MPV (using yt-dlp).
* `[mod] + f` opens the Flameshot GUI.
* `[mod] + s` takes a screenshot (using Scrot).
* `[mod] + t` spawns a command using a prompt.
* `[mod] + v` shows the active windows through Rofi.
* `[mod] + d` sends a notification including the current date and time.
* `[mod] + q` kills focused window.
* `[mod] + CTRL + p` opens the Rofi power menu (for accessing computer power options).
* `[mod] + CTRL + r` restarts Qtile.
* `[mod] + CTRL + q` shuts down Qtile (**Does not turn off the computer**).

### Managing packages and updating the system
The following commands are run in the terminal.

* `sudo pacman -S name-of-package` installs the specified package onto your system.
* `sudo pacman -Rs name-of-package` uninstalls the specified package and its dependencies
   unused by other packages on the system.

* `sudo pacman -syu` upgrades all installed packages on the system.

Users are expected to follow the guidance in the System maintenance#Upgrading the system
section of the ArchWiki to upgrade their systems regularly and not blindly run the
previously stated command.
For more info: https://wiki.archlinux.org/title/System_maintenance#Upgrading_the_system

For more info on pacman:
* `man pacman` will open the locally available reference manual for pacman.
* https://wiki.archlinux.org/title/pacman is the ArchWiki section for pacman.

For more info on Arch Linux which WoofOS is built on, check out the ArchWiki:
* https://wiki.archlinux.org

### Contact for WoofOS
* Email: sutharshanvithushan@gmail.com
* Matrix: #woof-os:mx.lewoof.xyz | @acutewoof:mx.lewoof.xyz
* Discord: [https://discord.gg/2G2yGUAXUS](Woof OS)

### Donate
* Monero: 
88Ftpu3ncRyLv7Z2c14b9L4MsyWscEqLBJhENxviYtmtRfidDx6G9y3Xyd8aYF8NRV2c2dF5QZiyTfHwuWLH9qmsSpskLhj
* BuyMeACoffee: [https://buymeacoffee.com/acutewoof](acutewoof)
