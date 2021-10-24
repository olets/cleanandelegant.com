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
          v-if="getUrl(record)"
          :href="getUrl(record)"
          class="group"
        >
          <span class="underline transition-all group-focus:text-blue-400 group-hover:text-blue-400 underline-blue-400">
            {{ record.Title }}
          </span>
        </a>

        <div v-else>
          {{ record.Title }}
        </div>
      </TableDataCell>

      <TableDataCell>
        <TagList :tags="toArray(record.Topics)" :possible-tags="topics"></TagList>
      </TableDataCell>

      <TableDataCell>
        {{ record.Year}}
      </TableDataCell>
    </TableRow>
  </TableSection>
</template>

<script setup>
  import { airtableFields } from '@/utility/airtable'
  import { toArray } from '@/utility/to-array'
  import { uniqueFieldValues } from '@/utility/unique-field-values'

  const columnHeadings = [
    'Title',
    'Topics',
    'Year',
  ]
  const heading = 'Select Writings'
  const table = airtableFields('Writings')
  const themeColor = 'sky'

  export default {
    data() {
      return {
        columnHeadings,
        heading,
        table,
        themeColor,
      }
    },
    methods: {
      getUrl(record) {
        return record.Link || record.Open[0].url || null
      }
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
