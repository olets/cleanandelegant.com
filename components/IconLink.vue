<template>
  <a :class="`mb-4 flex transition-colors duration-300 group hover:text-black`"
        :href="href">
    <span :class="`mt-px mr-2 duration-300 font-icon group-hover:text-${hoverColor}`"
          aria-hidden="true">
      <span v-html="iconEntity"></span>
    </span>

    <span :class="className">{{ text }}</span>
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
    hoverColor: {
      type: String,
      required: false,
      default: null,
    },
    iconEntity: {
      type: String,
      required: true,
    },
    className: {
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
