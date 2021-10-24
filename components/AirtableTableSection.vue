<template>
  <section class="my-20">
    <div class="max-w-screen-md mx-auto text-center">
      <div class="inline-block text-xl uppercase text-slate-400">
        <h2>{{ heading }}</h2>

        <span :class="`bg-${themeColor}-700 block w-3/4 opacity-50 h-1.5 w-48 mx-auto mt-6 mb-12`"></span>
      </div>
    </div>

    <div class="overflow-auto border max-h-96">
      <table class="text-sm leading-snug">
        <thead class="sticky top-0 bg-white shadow">
          <tr :class="`bg-${themeColor}-50`">
            <th
              v-for="columnHeading in columnHeadings"
              :key="columnHeading"
              class="py-2 pl-2 align-top"
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
      themeColor: {
        type: String,
        required: true,
      },
    },
  }
</script>
