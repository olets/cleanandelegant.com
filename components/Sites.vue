<template>
  <TableSection
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
          class="group"
        >
          <span class="block underline transition-all whitespace-nowrap group-focus:text-blue-400 group-hover:text-blue-400 underline-blue-400">
            {{ record.Name }}
          </span>

          <span v-if="record.Description" class="whitespace-nowrap">({{ record.Description }})</span>
        </a>

        <div v-else>
          {{ record.Name }}

          <div v-if="record.Description" class="whitespace-nowrap">({{ record.Description }})</div>
        </div>
      </TableDataCell>

      <TableDataCell>
        <TagList :tags="toArray(record.Roles)" :possible-tags="roles"></TagList>
      </TableDataCell>

      <TableDataCell>
        <TagList :tags="toArray(record.Type)" :possible-tags="types"></TagList>
      </TableDataCell>

      <TableDataCell>
        <TagList :tags="toArray(record.Tech)" :possible-tags="techs"></TagList>
      </TableDataCell>

      <TableDataCell>
        <YearRange v-if="record.When" :years="record.When"></YearRange>
      </TableDataCell>
    </TableRow>
  </TableSection>
</template>

<script setup>
  import { airtableFields } from '@/utility/airtable'
  import { toArray } from '@/utility/to-array'
  import { uniqueFieldValues } from '@/utility/unique-field-values'

  const columnHeadings = [
    'Project',
    'Roles',
    'Type',
    'Tech',
    'Year(s)',
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
    },
    created() {
      this.toArray = toArray
    },
  }
</script>
