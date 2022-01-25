<template>
  <TableSectionComponent
    :column-headings="columnHeadings"
    :heading="heading"
    :summary="summary"
    :theme-color="themeColor"
  >
    <TableRowComponent v-for="(record, i) in table" :key="i" :index="i">
      <TableDataCellComponent>
        <a v-if="record.Link" :href="record.Link" class="group">
          <span
            class="block underline transition-all whitespace-nowrap decoration-blue-400 group-hover:text-blue-400 group-focus:text-blue-400"
          >
            {{ record.Name }}
          </span>

          <span v-if="record.Description" class="whitespace-nowrap"
            >({{ record.Description }})</span
          >
        </a>

        <div v-else>
          {{ record.Name }}

          <div v-if="record.Description" class="whitespace-nowrap">
            ({{ record.Description }})
          </div>
        </div>
      </TableDataCellComponent>

      <TableDataCellComponent>
        <TagListComponent
          :tags="toArray(record.Roles)"
          :possible-tags="roles"
        ></TagListComponent>
      </TableDataCellComponent>

      <TableDataCellComponent>
        <TagListComponent
          :tags="toArray(record.Type)"
          :possible-tags="types"
        ></TagListComponent>
      </TableDataCellComponent>

      <TableDataCellComponent>
        <TagListComponent
          :tags="toArray(record.Tech)"
          :possible-tags="techs"
        ></TagListComponent>
      </TableDataCellComponent>

      <TableDataCellComponent>
        <YearRangeComponent
          v-if="record.When"
          :years="record.When"
        ></YearRangeComponent>
      </TableDataCellComponent>
    </TableRowComponent>
  </TableSectionComponent>
</template>

<script setup>
import { airtableFields } from '@/utility/airtable'
import { toArray } from '@/utility/to-array'
import { uniqueFieldValues } from '@/utility/unique-field-values'

const columnHeadings = ['Project', 'Role(s)', 'Type(s)', 'Tech', 'Year(s)']
const heading = 'Select Client Projects'
const summary =
  'Sorted by year, descending, with ongoing projects first; and then alphabetically.'
const table = airtableFields('Sites', {
  sort: [
    {
      field: 'Current',
      direction: 'desc',
    },
    {
      field: 'When',
      direction: 'desc',
    },
    {
      field: 'Name',
      direction: 'asc',
    },
  ],
})
const themeColor = 'green'

export default {
  data() {
    return {
      columnHeadings,
      heading,
      summary,
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
