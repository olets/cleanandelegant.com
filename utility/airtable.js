const Airtable = require('airtable')

export const airtableFields = (table, config = {}) => {
  const fields = []
  const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE);
  base(table).select(config)
    .eachPage(function page(records, fetchNextPage) {
      records.forEach((r) => fields.push(r.fields))
      fetchNextPage();
  }, function done(err) {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });

  return fields
}
