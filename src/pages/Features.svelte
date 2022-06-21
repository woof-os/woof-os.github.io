<script>
  import Fa from 'svelte-fa/src/fa.svelte';
  import {
    faDisplay,
    faFaceGrinHearts
  } from '@fortawesome/free-solid-svg-icons/index.es';
</script>

<div class="py-12 bg-gray-900" id="features__element">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2 class="text-indigo-600 font-semibold tracking-wide uppercase text-lg">
        Features
      </h2>
      <p
        class="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl"
      >
        A beautiful desktop experience.
      </p>
      <p class="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
        Woof OS has the latest config files and the team always tries to make
        the best looking desktop experience.
      </p>
    </div>

    <div class="mt-10">
      <dl
        class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
      >
        <div class="relative">
          <dt>
            <div
              class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
            >
              <!-- Heroicon name: fa-solid fa-face-grin-hearts -->
              <Fa icon={faFaceGrinHearts} scale={1.3} />
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-indigo-400">
              Beautiful & lightweight
            </p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-slate-300">
            Woof OS has been made with looks and small resource consumption in
            mind from the ground up, with each release Woof OS config files are
            optimized and improved for the best UX.
          </dd>
        </div>

        <div class="relative">
          <dt>
            <div
              class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
            >
              <!-- Heroicon name: outline/scale -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-indigo-400">
              Free and Open-Source
            </p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-slate-300">
            Every single part of Woof OS is 100% FOSS, every ISO profile is
            licensed under the GNU General Public License v3.0, utilities and
            websites are licensed under the MIT license.
          </dd>
        </div>

        <div class="relative">
          <dt>
            <div
              class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
            >
              <!-- Heroicon name: outline/lightning-bolt -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-indigo-400">
              It's super fast
            </p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-slate-300">
            Due to Woof OS being based on Arch Linux, that makes it super fast
            accordingly! The combination of the Arch base and lightweight
            DEs/WMs makes for a snappy OS.
          </dd>
        </div>

        <div class="relative">
          <dt>
            <div
              class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
            >
              <!-- Heroicon name: fa-solid fa-display -->
              <Fa icon={faDisplay} scale={1.1} />
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-indigo-400">
              User friendly
            </p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-slate-300">
            Woof OS uses the Calamares graphical installer which makes
            installing it super easy! But power users have not been left aside!
            We offer both the easier to use XFCE desktop and a Qtile WM edition.
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>
