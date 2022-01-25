<template>
  <TableSectionComponent
    :column-headings="columnHeadings"
    :heading="heading"
    :summary="summary"
    :theme-color="themeColor"
  >
    <TableRowComponent v-for="(record, i) in table" :key="i" :index="i">
      <TableDataCellComponent>
        <a v-if="getUrl(record)" :href="getUrl(record)" class="group">
          <span
            class="underline transition-all decoration-blue-400 group-hover:text-blue-400 group-focus:text-blue-400"
          >
            {{ record.Title }}
          </span>
        </a>

        <div v-else>
          {{ record.Title }}
        </div>
      </TableDataCellComponent>

      <TableDataCellComponent>
        <TagListComponent
          :tags="toArray(record.Topics)"
          :possible-tags="topics"
        ></TagListComponent>
      </TableDataCellComponent>

      <TableDataCellComponent>
        {{ record.Year }}
      </TableDataCellComponent>
    </TableRowComponent>
  </TableSectionComponent>
</template>

<script setup>
import { airtableFields } from '@/utility/airtable'
import { toArray } from '@/utility/to-array'
import { uniqueFieldValues } from '@/utility/unique-field-values'

const columnHeadings = ['Title', 'Topic(s)', 'Year']
const heading = 'Select Writings'
const summary = 'Sorted by date, descending.'
const table = airtableFields('Writings', {
  sort: [
    {
      field: 'Year',
      direction: 'desc',
    },
  ],
})
const themeColor = 'sky'

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
  methods: {
    getUrl(record) {
      return record.Link || record.Open[0].url || null
    },
  },
  computed: {
    topics() {
      return uniqueFieldValues(this.table, 'Topics')
    },
  },
  created() {
    this.toArray = toArray
  },
}
</script>
