<div class="hero min-h-screen" id="hero__bg--img">
  <div class="hero-overlay bg-opacity-60" />
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-6xl font-bold text-cyan-600">Woof OS</h1>
      <p class="mb-5 text-lg">
        Woof OS is a simple Arch based distribution for users who want a quick
        Arch installation with a comfortable, functional eye candy experience.
      </p>
      <button
        on:click={() =>
          document.getElementById('downloads__element').scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
          })}
        class="btn btn-secondary sm:btn-sm md:btn-md lg:btn-lg">Download</button
      >
    </div>
  </div>
</div>

<style>
  #hero__bg--img {
    background-image: url('../assets/layered-steps-haikei.svg');
  }
</style>
