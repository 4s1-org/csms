export function updateItemInArray<T extends { id: string }>(arr: T[], id: string, item: T): T[] {
  const idx = arr.findIndex((x) => x.id === id)
  if (idx !== -1) {
    return [...arr.slice(0, idx), Object.assign({}, arr[idx], item), ...arr.slice(idx + 1)]
  } else {
    return arr
  }
}
