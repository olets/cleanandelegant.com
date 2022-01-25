<template>
  <section class="my-20">
    <div class="max-w-screen-md mx-auto text-center">
      <div class="inline-block text-xl uppercase text-slate-400">
        <h2>{{ heading }}</h2>

        <span
          :class="`bg-${themeColor}-700 mx-auto mt-6 mb-12 block h-1.5 w-3/4 w-48 opacity-50`"
        ></span>
      </div>
    </div>

    <p v-if="summary" class="max-w-screen-lg mx-auto mb-10 text-center">
      {{ summary }}
    </p>

    <div class="relative border min-h-60">
      <div
        class="absolute left-1/2 top-1/2 -ml-6 -mt-6 mt-0.5 h-12 w-12 animate-spin rounded-full border-[6px] border-gray-300 border-r-blue-400 animation-duration-2s"
      ></div>

      <div class="relative w-full">
        <div class="overflow-x-auto">
          <table class="relative w-full text-sm leading-snug bg-white">
            <thead class="sticky bg-white shadow">
              <tr :class="`bg-${themeColor}-50`">
                <th
                  v-for="columnHeading in columnHeadings"
                  :key="columnHeading"
                  class="px-4 py-2 text-left align-top"
                >
                  {{ columnHeading }}
                </th>
              </tr>
            </thead>
            <tbody>
              <slot></slot>
            </tbody>
          </table>
        </div>

        <div
          class="absolute top-0 right-0 w-40 h-full bg-gradient-to-r from-white/0 to-white"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup>
export default {
  props: {
    columnHeadings: {
      type: Array,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: false,
      default: '',
    },
    themeColor: {
      type: String,
      required: true,
    },
  },
}
</script>
