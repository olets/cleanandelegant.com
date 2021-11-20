<template>
  <tr :class="trClass">
    <slot></slot>
  </tr>
</template>

<script>
  export default {
    props: {
      index: {
        type: Number,
        required: true,
      },
    },
    computed: {
      trClass() {
        return this.index !== 0
          ? 'relative after:absolute after:bg-gray-500 after:block after:h-px after:left-0 after:top-0 after:w-full after:z-10'
          : null
      }
    }
  }
</script>
