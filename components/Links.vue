<template>
  <div>
    <h3 :class="srOnlyHeading ? 'sr-only' : ''">
      {{ heading }}
    </h3>

    <ul class="mb-2 ml-6">
      <li v-for="(link, i) in links"
            :key="i"
            class="my-2">
        <a class="flex transition-colors duration-300 xitems-center group hover:text-black"
              :href="link.href">
          <span :class="`mt-px mr-2 duration-300 font-icon group-hover:text-${link.hoverColor}`">
            <span class="sr-only">{{ `icon: ${link.iconName}` }}</span>
            <span aria-hidden v-html="link.iconEntity"></span>
          </span>

          {{ link.text }}
        </a>
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
        required: false,
        default: () => [],
      },
      srOnlyHeading: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
  }
</script>
