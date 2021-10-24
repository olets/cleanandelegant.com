<template>
  <ul v-if="tags.length" class="flex flex-wrap">
    <li
      v-for="(tag, i) in tags"
      :key="i"
      :class="getTagClass(tag)"
    >
      {{ tag.trim() }}
    </li>
  </ul>
</template>

<script setup>
  import { tagColorKey, tagColors } from '@/utility/tag-colors'

  export default {
    data() {
      return {
        tagColorKey,
        tagColors,
      }
    },
    props: {
      possibleTags: {
        type: Array,
        required: true,
      },
      tags: {
        type: Array,
        required: true,
      },
    },
    methods: {
      getTagClass(tag) {
        const tagColor = tagColors[Math.floor(tagColors.length / this.possibleTags.length) * this.possibleTags.indexOf(tag.trim())]
        return `bg-${tagColor}-${tagColorKey} m-0.5 px-1.5 rounded whitespace-nowrap`
      },
    },
  }
</script>
