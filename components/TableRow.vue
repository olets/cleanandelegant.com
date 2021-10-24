<template>
  <tr :class="index !== 0 ? 'border-t' : null">
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
  }
</script>
