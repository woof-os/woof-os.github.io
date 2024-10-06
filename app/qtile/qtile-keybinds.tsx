export default function Keybinds() {
  return (
    <section id="keybinds">
      <h1>Keybinds for Woof OS Qtile edition</h1>
      <p>
        Woof OS uses a tiling window manager, qtile, mainly controlled using the
        keyboard.
        <br /> The keybinds listed here are declared in{" "}
        <code>~/.config/qtile/config.py</code>.
      </p>
      By default, <kbd>[mod]</kbd> is the <kbd>Super</kbd>/<kbd>mod4</kbd> key,
      which is the <kbd>⊞ Win</kbd> key on most keyboards, and the{" "}
      <kbd>⌘ Command</kbd> key on Macs.
      <div className="md:grid md:grid-cols-2 md:gap-12 mt-8">
        <div>
          <h2>Focus navigation</h2>
          <ul>
            <li>
              <kbd>[mod]</kbd> <kbd>H</kbd> moves focus to the <b>left</b>
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>L</kbd> moves focus to the <b>right</b>
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>J</kbd> moves focus <b>down</b>
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>K</kbd> moves focus <b>up</b>
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>Space</kbd> moves focus to the{" "}
              <b>next window</b>
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>.</kbd> moves focus to the{" "}
              <b>next screen</b>
            </li>
            <p>
              The mouse can also be used to switch focus between windows by
              simply hovering over them.
            </p>
            <li>
              <kbd>[mod]</kbd>{" "}
              <span>
                {Array.from(Array(9).keys()).map((i) => {
                  return (
                    <span key={i}>
                      <kbd>{i + 1}</kbd>
                      {i != 8 && "/"}
                    </span>
                  );
                })}
              </span>{" "}
              moves focus to the workspace assigned to the ID
            </li>
          </ul>
        </div>
        <div>
          <h2>Window arrangement</h2>
          <ul>
            <li>
              <kbd>[mod]</kbd> <kbd>Shift</kbd> <kbd>H</kbd> moves focused
              window to the <b>left</b>
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>Shift</kbd> <kbd>L</kbd> moves focused
              window to the <b>right</b>
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>Shift</kbd> <kbd>J</kbd> moves focused
              window <b>down</b>
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>Shift</kbd> <kbd>K</kbd> moves focused
              window <b>up</b>
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>Shift</kbd> <kbd>Return</kbd> toggles
              between split and unsplit sides of stack
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>Tab</kbd> toggles between layouts
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>Shift</kbd>{" "}
              <span>
                {Array.from(Array(9).keys()).map((i) => {
                  return (
                    <span key={i}>
                      <kbd>{i + 1}</kbd>
                      {i != 8 && "/"}
                    </span>
                  );
                })}
              </span>{" "}
              shifts focused window to the workspace assigned to the ID
            </li>
          </ul>
        </div>
        <div>
          <h2>Window sizing</h2>
          <ul>
            <li>
              <kbd>[mod]</kbd> <kbd>CTRL</kbd> <kbd>H</kbd> grows window to the{" "}
              <b>left</b>
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>CTRL</kbd> <kbd>L</kbd> grows window to the{" "}
              <b>right</b>
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>CTRL</kbd> <kbd>J</kbd> grows window{" "}
              <b>down</b>
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>CTRL</kbd> <kbd>K</kbd> grows window{" "}
              <b>up</b>
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>N</kbd> resets all window sizes
            </li>
          </ul>
        </div>
        <div>
          <h2>Miscellaneous and launching programs</h2>
          <ul>
            <li>
              <kbd>[mod]</kbd> <kbd>Return</kbd> launches the terminal
              (alacritty)
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>R</kbd> opens the Rofi run launcher
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>B</kbd> launches the web browser (brave)
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>C</kbd> launches the file manager (vifm)
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>Z</kbd> opens copied PDF URL in Zathura
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>Y</kbd> opens copied YouTube URL in MPV
              (using yt-dlp)
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>F</kbd> opens the Flameshot GUI
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>S</kbd> takes a full screenshot using Scrot
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>T</kbd> spawns a command using a prompt
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>V</kbd> shows the active windows through
              Rofi
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>D</kbd> sends a notification including the
              current date and time
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>Q</kbd> kills focused window
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>CTRL</kbd> <kbd>P</kbd> opens the Rofi power menu
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>CTRL</kbd> <kbd>R</kbd> restarts Qtile
            </li>
            <li>
              <kbd>[mod]</kbd> <kbd>CTRL</kbd> <kbd>Q</kbd> shuts down Qtile
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
