<template>
  <header class="text-center">
    <div class="relative inline-block mb-10 overflow-hidden rounded-full group w-44 h-44 bg-slate-300">
      <img alt="Henry Bley-Vroman headshot"
            class="block"
            height="176"
            :src="imageSrc"
            width="176">

      <img alt=""
            class="absolute top-0 left-0 block w-full h-full transition-opacity duration-500 opacity-0 group-hover:opacity-100 bg-"
            height="176"
            :src="hoverImageSrc"
            width="176">
    </div>

    <h1 class="mb-4 font-serif text-4xl text-slate-500">Henry Bley-Vroman</h1>

    <div class="inline-block text-xl uppercase text-slate-400">
      {{ tagline}}

      <span class="block w-3/4 bg-maroon-400 h-1.5 w-48 mx-auto mt-6 mb-12"></span>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      hoverImageSrc: 'https://cleanandelegant.com/images/portrait-fun.jpg',
      imageSrc: 'https://cleanandelegant.com/images/portrait.jpg',
      tagline: 'Experienced Front-End Developer',
    }
  }
}
</script>
