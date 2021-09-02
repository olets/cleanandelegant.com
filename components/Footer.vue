<template>
  <footer>
    <div class="grid grid-cols-3 leading-relaxed mb-14">
      <div>
        <Links :heading="links.experience.heading"
              :links="links.experience.links"
              :sr-only-heading="true">
        </Links>

        <Links :heading="links.contact.heading"
              :links="links.contact.links"
              :sr-only-heading="true">
        </Links>
      </div>

      <Links :heading="links.profile.heading"
            :links="links.profile.links"
            :sr-only-heading="true">
      </Links>
    </div>

    <div class="text-xs leading-loose">
      <p>
        Site copyright &copy; {{ year }} Henry Bley-Vroman.
        <br>
        Photo copyright &copy; 2016 Bradley Aaron Photography.
        <br>
        All rights reserved
      </p>
    </div>
  </footer>
</template>

<script>
  import { links } from '../constants/links'

  export default {
    data() {
      return {
        links,
        year: new Date().getFullYear(),
      }
    },
  }
</script>
