<template>
  <footer>
    <div class="text-xs leading-loose">
      <p>
        Site copyright &copy; {{ year }} Henry Bley-Vroman.
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
