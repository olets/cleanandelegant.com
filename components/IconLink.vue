<template>
  <a :class="`mb-4 flex transition-colors duration-300 group hover:text-black`"
        :href="href">
    <span :class="`mt-px mr-2 duration-300 font-icon ${iconClass}`"
          aria-hidden="true">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <span v-html="iconEntity"></span>
    </span>

    <span :class="textClass">{{ text }}</span>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: false,
      default: null,
    },
    iconClass: {
      type: String,
      required: false,
      default: null,
    },
    iconEntity: {
      type: String,
      required: true,
    },
    textClass: {
      type: String,
      required: false,
      default: null,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
