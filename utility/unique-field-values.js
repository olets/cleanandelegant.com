export const uniqueFieldValues = (array, field) => {
  return [
    ...new Set(
      array
        .map((site) => site[field])
        .flat()
        .map((el) => el.trim())
    ),
  ]
}
