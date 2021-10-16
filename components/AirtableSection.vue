<template>
  <section>
    <div class="max-w-screen-md mx-auto text-center">
      <div class="inline-block text-xl uppercase text-slate-400">
        <h2>{{ heading }}</h2>

        <span :class="`block w-3/4 opacity-50 h-1.5 w-48 mx-auto mt-6 mb-12 ${ dividerClassName }`"></span>
      </div>
    </div>

    <p :if="summary" class="max-w-screen-lg mx-auto mb-10 text-center">
      {{ summary }}
    </p>

    <div class="relative px-8 md:px-0">
      <div class="absolute -ml-6 -mt-6 left-1/2 top-1/2 animate-spin animation-duration-2s border-[6px] border-gray-300 border-r-blue-400 h-12 rounded-full w-12"></div>

      <iframe :src="src"
            :title="airtableEmbedTitle"
            class="relative airtable-embed"
            frameborder="0"
            onmousewheel=""
            width="100%"
            height="533"
            tabindex="-1"
            style="background: transparent; border: 1px solid #ccc;">
      </iframe>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      heading: {
        type: String,
        required: true,
      },
      dividerClassName: {
        type: String,
        required: true,
      },
      airtableEmbedId: {
        type: String,
        required: true,
      },
      summary: {
        type: String,
        required: false,
        default: null,
      },
      airtableEmbedTitle: {
        type: String,
        required: true,
      },
    },
    computed: {
      src() {
        const url = `https://airtable.com/embed/${this.airtableEmbedId}?backgroundColor=teal`
        return url
      }
    }
  }
</script>
