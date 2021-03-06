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
            class="underline transition-all decoration-blue-400 group-hover:text-blue-400 group-focus:text-blue-400"
          >
            {{ record.Name }}
          </span>

          <p v-if="record.Description">{{ record.Description }}</p>
        </a>

        <div v-else>
          {{ record.Name }}

          <p v-if="record.Description">{{ record.Description }}</p>
        </div>
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
    </TableRowComponent>
  </TableSectionComponent>
</template>

<script setup>
import { airtableFields } from '@/utility/airtable'
import { toArray } from '@/utility/to-array'
import { uniqueFieldValues } from '@/utility/unique-field-values'

const columnHeadings = ['Project', 'Type(s)', 'Tech']
const heading = 'Select Open Source'
const summary = 'Sorted by type and then alphabetically.'
const table = airtableFields('Projects', {
  sort: [
    {
      field: 'Type',
      direction: 'asc',
    },
    {
      field: 'Name',
      direction: 'asc',
    },
  ],
})
const themeColor = 'indigo'

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
