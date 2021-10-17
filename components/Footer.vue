<template>
  <footer>
    <div class="leading-loose">
      <p>
        Site copyright &copy; {{ year }} Henry Bley-Vroman.
        See the source at <a class="underline transition-all focus:text-pink-500 hover:text-pink-500 underline-pink-500" href="https://github.com/olets/cleanandelegant.com">https://github.com/olets/cleanandelegant.com</a>
        <br>
        Photo copyright &copy; 2016 Bradley Aaron Photography.
        <br>
        All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        year: new Date().getFullYear(),
      }
    },
  }
</script>
