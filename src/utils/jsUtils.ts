export function sortBy<T>(array: T[], getter: (item: T) => string | number | boolean): T[] {
  const sortedArray = [...array]
  sortedArray.sort((a, b) => (getter(a) > getter(b) ? 1 : -1))
  return sortedArray
}

export function toggleListItem<T>(list: T[], item: T): T[] {
  const itemIndex = list.indexOf(item)
  if (itemIndex === -1) {
    return list.concat(item)
  }
  else {
    const newList = [...list]
    newList.splice(itemIndex, 1)
    return newList
  }
}

export function upperFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
