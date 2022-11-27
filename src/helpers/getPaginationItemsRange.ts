export const getPaginationItemsRange = (
  offset: number,
  itemsPerPage: number,
  itemsCount: number
) => {
  const start = offset + 1
  const end = offset + itemsPerPage
  if (offset + itemsPerPage > itemsCount) {
    return `${start}-${itemsCount} of ${itemsCount}`
  } else {
    return `${start}-${end} of ${itemsCount}`
  }
}
