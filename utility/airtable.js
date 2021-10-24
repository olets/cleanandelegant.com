const Airtable = require('airtable')

export const airtableFields = (table, config = {}) => {
  const fields = []
  const base = new Airtable({apiKey: 'keyo6KR00X6wS4DUS'}).base('appZ2chc7ofUIoLuN');
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
