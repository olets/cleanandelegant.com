<template>
  <div>
    <span class="sr-only">{{ heading }}</span>

    <ul class="ml-6 leading-snug">
      <li v-for="(link, index) in links"
            :key="index"
            class="my-2">
        <IconLinkComponent v-bind="link"></IconLinkComponent>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      heading: {
        type: String,
        required: true,
      },
      links: {
        type: Array,
        required: true,
      }
    },
  }
</script>
