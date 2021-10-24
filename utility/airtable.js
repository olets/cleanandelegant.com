const Airtable = require('airtable')

const dotenv = require('dotenv')
dotenv.config()

export const airtableFields = (table, config = {}) => {
  const fields = []
  const base = new Airtable({apiKey: process.env.airtableApiKey}).base(process.env.airtableBase);
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
