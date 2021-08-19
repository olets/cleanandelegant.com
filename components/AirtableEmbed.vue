<template>
  <iframe :src="src"
        :title="title"
        class="airtable-embed"
        frameborder="0"
        onmousewheel=""
        width="100%"
        height="533"
        style="background: transparent; border: 1px solid #ccc;">
  </iframe>
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        required: true,
      },
      showViewControls: {
        type: Boolean,
        required: false,
        default: false,
      },
      title: {
        type: String,
        required: true,
      },
    },
    computed: {
      src() {
        let url = `https://airtable.com/embed/${this.id}?backgroundColor=teal`
        if (this.showViewControls) {
          url += '&viewControls=on'
        }
        return url
      }
    }
  }
</script>
