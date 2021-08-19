<template>
  <footer>
    <div class="leading-relaxed grid grid-cols-3 mb-14">
      <div>
        <ExperienceLinks :sr-only-heading="srOnlyHeading"></ExperienceLinks>

        <ContactLinks :sr-only-heading="srOnlyHeading"></ContactLinks>
      </div>

      <ProfileLinks :sr-only-heading="srOnlyHeading"></ProfileLinks>
    </div>

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
        srOnlyHeading: true,
        year: new Date().getFullYear(),
      }
    },
  }
</script>
