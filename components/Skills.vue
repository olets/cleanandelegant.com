<template>
  <section>
    <div class="max-w-screen-md mx-auto text-center">
      <div class="inline-block text-xl uppercase text-slate-400">
        <h2>Skills</h2>

        <span class="bg-green-700 block w-3/4 opacity-50 h-1.5 w-48 mx-auto mt-6 mb-12"></span>
      </div>
    </div>

    <div class="relative px-8 md:px-0">
      <div class="absolute -ml-6 -mt-6 left-1/2 top-1/2 animate-spin animation-duration-2s border-[6px] border-gray-300 border-r-blue-400 h-12 rounded-full w-12"></div>
      <table>
        <thead>
          <tr>
            <th v-for="(field, i) in Object.keys(skills[0])" :key="i">{{ field }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(skill, i) in skills" :key="i">
            <td v-for="(field, j) in Object.keys(skills[0])" :key="j">{{ skill[field] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
  import { airtableFields } from '../utility/airtable'
  const skills = airtableFields('Skills')

  export default {
    data() {
      return {
        skills,
      }
    },
  }
</script>
