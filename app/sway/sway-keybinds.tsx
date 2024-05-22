export default function Keybinds() {
    return <section id="keybinds"><h1>Keybinds for Woof OS Sway edition</h1>
        <p>Woof OS Sway edition uses a tiling window manager, sway, mainly controlled using the keyboard.<br /> The keybinds listed here are declared in <code>~/.config/sway/config</code>.</p>
        By default, <kbd>[mod]</kbd> is the <kbd>Super</kbd>/<kbd>mod4</kbd> key, which is the <kbd>⊞ Win</kbd> key on most keyboards, and the <kbd>⌘ Command</kbd> key on Macs.
        <div className="md:grid md:grid-cols-2 md:gap-12 mt-8">
            <div>
                <h2>Focus navigation</h2>
                <ul>
                    <li><kbd>[mod]</kbd> <kbd>H</kbd> moves focus to the <b>left</b></li>
                    <li><kbd>[mod]</kbd> <kbd>L</kbd> moves focus to the <b>right</b></li>
                    <li><kbd>[mod]</kbd> <kbd>J</kbd> moves focus <b>down</b></li>
                    <li><kbd>[mod]</kbd> <kbd>K</kbd> moves focus <b>up</b></li>
                    <li><kbd>[mod]</kbd> <kbd>Space</kbd> toggles focus between the floating area and the tiling area</li>
                    <p>
                        The mouse can also be used to switch focus between windows by simply hovering over them.
                    </p>
                    <li><kbd>[mod]</kbd> <span>{Array.from(Array(9).keys()).map((i) => { return <span key={i}><kbd>{i + 1}</kbd>{i != 8 && "/"}</span> })}
                    </span> moves focus to the workspace assigned to the ID</li>
                </ul>

            </div>
            <div>
                <h2>Window arrangement</h2>
                <ul>
                    <li><kbd>[mod]</kbd> <kbd>Shift</kbd> <kbd>H</kbd> moves focused window to the <b>left</b></li>
                    <li><kbd>[mod]</kbd> <kbd>Shift</kbd> <kbd>L</kbd> moves focused window to the <b>right</b></li>
                    <li><kbd>[mod]</kbd> <kbd>Shift</kbd> <kbd>J</kbd> moves focused window <b>down</b></li>
                    <li><kbd>[mod]</kbd> <kbd>Shift</kbd> <kbd>K</kbd> moves focused window <b>up</b></li>
                    <li><kbd>[mod]</kbd> <kbd>Shift</kbd> <kbd>Return</kbd> toggles between split and unsplit sides of stack</li>
                    <li><kbd>[mod]</kbd> <kbd>Tab</kbd> toggles between layouts</li>
                    <li><kbd>[mod]</kbd> <kbd>Shift</kbd> <span>{Array.from(Array(9).keys()).map((i) => { return <span key={i}><kbd>{i + 1}</kbd>{i != 8 && "/"}</span> })}
                    </span> shifts focused window to the workspace assigned to the ID</li>
                    <li>
                        To resize windows, enter resizing mode by pressing <kbd>[mod]</kbd> <kbd>R</kbd> and use the arrow keys or the relevant vim navigation keys to resize the window.
                        <br />
                        <kbd>Return</kbd> or <kbd>Escape</kbd> exits resize mode.
                    </li>
                </ul>
            </div>
            <div>
                <h2>Layouts</h2>
                <ul>
                    <li><kbd>[mod]</kbd> <kbd>R</kbd> for horizontal splitting</li>
                    <li><kbd>[mod]</kbd> <kbd>V</kbd> for vertical splitting</li>
                    <li><kbd>[mod]</kbd> <kbd>S</kbd> for stacking layout</li>
                    <li><kbd>[mod]</kbd> <kbd>W</kbd> for tabbed layout</li>
                    <li><kbd>[mod]</kbd> <kbd>E</kbd> for toggle split layout</li>
                    <li><kbd>[mod]</kbd> <kbd>F</kbd> for fullscreen layout</li>
                    <li><kbd>[mod]</kbd> <kbd>Shift</kbd> <kbd>Space</kbd> toggles floating mode</li>
                </ul>
            </div>
            <div>
                <h2>Miscellaneous and scratchpad</h2>
                <ul>
                    <li><kbd>[mod]</kbd> <kbd>Shift</kbd> <kbd>-</kbd> moves focused window to the scratchpad</li>
                    <li><kbd>[mod]</kbd> <kbd>-</kbd> shows the next scratchpad window or hides the focused scratchpad window</li>
                    <li><kbd>[mod]</kbd> <kbd>Return</kbd> launches the terminal (alacritty)</li>
                    <li><kbd>[mod]</kbd> <kbd>D</kbd> opens the Rofi run launcher</li>
                    <li><kbd>[mod]</kbd> <kbd>Q</kbd> kills focused window</li>
                    <li><kbd>[mod]</kbd> <kbd>CTRL</kbd> <kbd>C</kbd> refreshes Sway</li>
                    <li><kbd>[mod]</kbd> <kbd>CTRL</kbd> <kbd>Q</kbd> shuts down Sway</li>
                </ul>
            </div>
        </div>
    </section>
}
