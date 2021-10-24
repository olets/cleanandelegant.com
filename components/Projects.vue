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
          class="group"
        >
          <span class="underline transition-all group-focus:text-blue-400 group-hover:text-blue-400 underline-blue-400">
            {{ record.Name }}
          </span>

          <p v-if="record.Description">{{ record.Description }}</p>
        </a>

        <div v-else>
          {{ record.Name }}

          <p v-if="record.Description">{{ record.Description }}</p>
        </div>
      </TableDataCell>

      <TableDataCell>
        <TagList :tags="toArray(record.Type)" :possible-tags="types"></TagList>
      </TableDataCell>

      <TableDataCell>
        <TagList :tags="toArray(record.Tech)" :possible-tags="techs"></TagList>
      </TableDataCell>
    </TableRow>
  </AirtableTableSection>
</template>

<script setup>
  import { airtableFields } from '@/utility/airtable'
  import { toArray } from '@/utility/to-array'
  import { uniqueFieldValues } from '@/utility/unique-field-values'

  const columnHeadings = [
    'Project',
    'Type',
    'Tech',
  ]
  const heading = 'Select Open Source'
  const table = airtableFields('Projects')
  const themeColor = 'indigo'

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
