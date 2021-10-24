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

        <span v-else>{{ record.Name }}</span>
      </TableDataCell>

      <TableDataCell>
        <TagList :tags="record.Roles" :possible-tags="roles"></TagList>
      </TableDataCell>

      <TableDataCell>
        <TagList :tags="record.Type" :possible-tags="types"></TagList>
      </TableDataCell>

      <TableDataCell>
        <TagList :tags="record.Tech" :possible-tags="techs"></TagList>
      </TableDataCell>

      <TableDataCell>
        <YearRange v-if="record.When" :years="record.When"></YearRange>
      </TableDataCell>
    </TableRow>
  </AirtableTableSection>
</template>

<script setup>
  import { airtableFields } from '@/utility/airtable'
  import { uniqueFieldValues } from '@/utility/unique-field-values'

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
        return uniqueFieldValues(this.table, 'Roles')
      },
      techs() {
        return uniqueFieldValues(this.table, 'Tech')
      },
      types() {
        return uniqueFieldValues(this.table, 'Type')
      },
    }
  }
</script>
