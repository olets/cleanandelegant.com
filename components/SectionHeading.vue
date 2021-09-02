<template>
  <div class="max-w-screen-md mx-auto text-center">
    <div class="inline-block text-xl uppercase text-slate-400">
      <h2>{{ text }}</h2>

      <!-- background classes must be safelisted in tailwind.config.js -->
      <span :class="`block w-3/4 bg-${ dividerColor } opacity-50 h-1.5 w-48 mx-auto mt-6 mb-12`"></span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      dividerColor: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    }
  }
</script>
