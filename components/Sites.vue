<template>
  <section>
    <div class="max-w-screen-md mx-auto text-center">
      <div class="inline-block text-xl uppercase text-slate-400">
        <h2>Sites</h2>

        <span :class="`bg-${themeColor}-700 block w-3/4 opacity-50 h-1.5 w-48 mx-auto mt-6 mb-12`"></span>
      </div>
    </div>

    <div class="overflow-auto border max-h-96">
      <table class="text-sm leading-snug">
        <thead class="sticky top-0 bg-white shadow">
          <tr :class="`bg-${themeColor}-50`">
            <th
              v-for="column in columns"
              :key="column"
              class="py-2 pl-2 align-top"
            >
              {{ column }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(record, i) in table"
            :key="i"
            :class="i !== 0 ? 'border-t' : null"
          >
            <td class="px-4 py-2.5 align-top">
              <a
                v-if="record.Link"
                :href="record.Link"
                class="underline transition-all focus:text-blue-400 hover:text-blue-400 underline-blue-400"
              >
                {{ record.Project }}
              </a>
            </td>

            <td class="px-4 py-2.5 align-top">
              <TagList :tags="record.Roles" :possible-tags="roles"></TagList>
            </td>

            <td class="px-4 py-2.5 align-top">
              <TagList :tags="record.Type.split(',')" :possible-tags="types"></TagList>
            </td>

            <td class="px-4 py-2.5 align-top">
              <TagList :tags="record.Tech.split(',')" :possible-tags="techs"></TagList>
            </td>

            <td class="px-4 py-2.5 align-top">
              <YearRange v-if="record.When" :years="record.When"></YearRange>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
  import { airtableFields } from '@/utility/airtable'

  const columns = [
    'Project',
    'Roles',
    'Type',
    'Tech',
    'When',
  ]

  const table = airtableFields('Sites')

  const themeColor = 'green'

  export default {
    data() {
      return {
        columns,
        table,
      }
    },
    computed: {
      roles() {
        return [...new Set(
          this.table
            .map(site => site.Roles)
            .flat()
        )]
      },
      techs() {
        return [...new Set(
          this.table
            .map(site => site.Tech.split(','))
            .flat()
            .map(el => el.trim())
        )]
      },
      types() {
        return [...new Set(
          this.table
            .map(site => site.Type.split(','))
            .flat()
            .map(el => el.trim())
        )]
      },
    }
  }
</script>
