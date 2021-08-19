<template>
  <div class="mx-auto text-center max-w-screen-md">
    <div class="inline-block text-xl uppercase text-slate-300">
      <h2>{{ text }}</h2>

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
