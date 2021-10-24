<template>
  <section>
    <div class="max-w-screen-md mx-auto text-center">
      <div class="inline-block text-xl uppercase text-slate-400">
        <h2>Sites</h2>

        <span :class="`bg-${themeColor}-700 block w-3/4 opacity-50 h-1.5 w-48 mx-auto mt-6 mb-12`"></span>
      </div>
    </div>

    <div class="overflow-auto border max-h-96">
      <table class="leading-snug">
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
            <td class="align-top pl-2 py-2">
              <a
                v-if="record.Link"
                :href="record.Link"
                class="underline transition-all focus:text-blue-400 hover:text-blue-400 underline-blue-400"
              >
                {{ record.Project }}
              </a>
            </td>

            <td class="align-top pl-2 py-2">
              <ul v-if="Array.isArray(record.Roles)" class="flex flex-wrap">
                <li
                  v-for="(role, r) in record.Roles"
                  :key="role + '_' + r"
                  :class="`bg-${colors[(Math.floor(colors.length / roles.length)) * roles.indexOf(role.trim())]}-200 m-0.5 px-1.5 rounded whitespace-nowrap`"
                >
                  {{ role }}
                </li>
              </ul>
            </td>

            <td class="align-top pl-2 py-2">
              <ul v-if="record.Type.split(',').length" class="flex flex-wrap">
                <li
                  v-for="(type, r) in record.Type.split(',')"
                  :key="type + '_' + r"
                  :class="`bg-${colors[(Math.floor(colors.length / types.length)) * types.indexOf(type.trim())]}-200 m-0.5 px-1.5 rounded whitespace-nowrap`"
                >
                  {{ type.trim() }}
                </li>
              </ul>
            </td>

            <td class="align-top pl-2 py-2">
              <ul v-if="record.Tech.split(',').length" class="flex flex-wrap">
                <li
                  v-for="(tech, r) in record.Tech.split(',')"
                  :key="tech + '_' + r"
                  :class="`bg-${colors[(Math.floor(colors.length / techs.length)) * techs.indexOf(tech.trim())]}-200 m-0.5 px-1.5 rounded whitespace-nowrap`"
                >
                  {{ tech.trim() }}
                </li>
              </ul>
            </td>

            <td class="align-top pl-2 py-2">
              <YearRange v-if="record.When" :years="record.When"></YearRange>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
  import { airtableFields } from '../utility/airtable'

  const table = airtableFields('Sites')
    .sort((a,b) => a.Project.localeCompare(b.Project))
  const allColors = require('tailwindcss/colors')
  const colors = Object.entries(allColors)
    .map(([name, value]) => value['400'] ? name : null)
    .filter(i => i)

  const columns = [
    'Project',
    'Roles',
    'Type',
    'Tech',
    'When',
  ]

  const themeColor = 'green'

  export default {
    data() {
      return {
        colors,
        columns,
        table,
        themeColor,
      }
    },
    computed: {
      fields() {
        return [...new Set(
          this.table
            .map(site => Object.keys(site))
            .flat()
        )]
      },
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
