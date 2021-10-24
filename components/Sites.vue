<template>
  <AirtableTableSection
    :column-headings="columnHeadings"
    :heading="heading"
    :theme-color="themeColor"
  >
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
  </AirtableTableSection>
</template>

<script setup>
  import { airtableFields } from '@/utility/airtable'

  const columnHeadings = [
    'Project',
    'Roles',
    'Type',
    'Tech',
    'When',
  ]

  const heading = "Sites"

  const table = airtableFields('Sites')

  const themeColor = 'green'

  export default {
    data() {
      return {
        columnHeadings,
        heading,
        table,
        themeColor,
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
