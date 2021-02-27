export function updateItemInArray<T>(arr: T[], item: T, keyField: keyof T): T[] {
  const idx = arr.findIndex((x) => x[keyField] === item[keyField])
  if (idx !== -1) {
    return [...arr.slice(0, idx), Object.assign({}, arr[idx], item), ...arr.slice(idx + 1)]
  } else {
    arr.push(item)
    return arr
  }
}
