<template>
  <span class="whitespace-nowrap">{{ yearRange }}</span>
</template>

<script>
export default {
  props: {
    years: {
      type: Array,
      required: false,
      default: null,
    },
  },
  computed: {
    yearRange() {
      if (!this.years) {
        return null;
      }

      if (this.years.length === 1) {
        return this.years[0]
      }

      const yearNumbers = this.years.map(y => Number(y))
      return `${Math.min(...yearNumbers)} — ${Math.max(...yearNumbers)}`
    },
  }
}
</script>
