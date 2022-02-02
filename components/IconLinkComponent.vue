<template>
  <a v-if="href" :class="`mb-4 flex ${className}`"
        :href="href">
    <span class="mt-px mr-2 transition-all font-icon"
          aria-hidden="true">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <span v-html="iconEntity"></span>
    </span>

    <span :class="`transition-all ${textClass}`">{{ text }}</span>
  </a>
  <div v-else :class="`mb-4 flex ${className}`">
    <span class="mt-px mr-2 transition-all font-icon"
          aria-hidden="true">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <span v-html="iconEntity"></span>
    </span>

    <span :class="`transition-all ${textClass}`">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      required: false,
      default: '',
    },
    href: {
      type: String,
      required: false,
      default: '',
    },
    iconEntity: {
      type: String,
      required: true,
    },
    textClass: {
      type: String,
      required: false,
      default: '',
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
