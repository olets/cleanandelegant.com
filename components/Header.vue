<template>
  <header class="text-center">
    <div class="relative inline-block mb-10 overflow-hidden rounded-full bg-slate-300 group h-44 w-44">
      <nuxt-img alt="Henry Bley-Vroman headshot"
            class="block"
            height="176"
            src="/images/portrait.jpg"
            width="176" />

      <nuxt-img alt=""
            class="absolute top-0 left-0 block w-full h-full transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            height="176"
            src="/images/portrait-fun.jpg"
            width="176" />
    </div>

    <h1 class="mb-4 font-serif text-4xl text-slate-500">Henry Bley-Vroman</h1>

    <div class="inline-block text-2xl leading-loose uppercase text-slate-400">
      Front-End Developer at <a class="underline transition-all focus:text-blue-400 hover:text-blue-400 underline-blue-400" href="https://www.viget.com/work/">Viget</a>

      <span class="w-48 w-3/4 mx-auto mt-6 mb-12 h-1.5 block bg-maroon-400"></span>
    </div>
  </header>
</template>
