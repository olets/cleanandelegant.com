const Airtable = require('airtable')

export const airtableFields = (table) => {
  const fields = []
  const base = new Airtable({apiKey: process.env.airtableApiKey}).base(process.env.airtableBase);
  base(table).select()
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
