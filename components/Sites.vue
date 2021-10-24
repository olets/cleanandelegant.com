<template>
  <AirtableTableSection
    :column-headings="columnHeadings"
    :heading="heading"
    :theme-color="themeColor"
  >
    <TableRow
      v-for="(record, i) in table"
      :key="i"
      :index="i"
    >
      <TableDataCell>
        <a
          v-if="record.Link"
          :href="record.Link"
          class="underline transition-all focus:text-blue-400 hover:text-blue-400 underline-blue-400"
        >
          {{ record.Project }}
        </a>
      </TableDataCell>

      <TableDataCell>
        <TagList :tags="record.Roles" :possible-tags="roles"></TagList>
      </TableDataCell>

      <TableDataCell>
        <TagList :tags="record.Type.split(',')" :possible-tags="types"></TagList>
      </TableDataCell>

      <TableDataCell>
        <TagList :tags="record.Tech.split(',')" :possible-tags="techs"></TagList>
      </TableDataCell>

      <TableDataCell>
        <YearRange v-if="record.When" :years="record.When"></YearRange>
      </TableDataCell>
    </TableRow>
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
  const heading = 'Select Client Projects'
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
