export function find<T>(array: T[], cb: (item: T) => boolean): T | undefined {
  for (let i = 0; i < array.length; i++) {
    const item = array[i]
    if (cb(item)) {
      return item
    }
  }
  return undefined
}

export function filter<T>(array: T[], cb: (item: T) => boolean): T[] {
  const filteredItems = []
  for (let i = 0; i < array.length; i++) {
    const item = array[i]
    if (cb(item)) {
      filteredItems.push(item)
    }
  }
  return filteredItems
}

export function map<T, R>(array: T[], cb: (item: T) => R): R[] {
  const mappedItems = []
  for (let i = 0; i < array.length; i++) {
    const item = array[i]
    mappedItems.push(cb(item))
  }
  return mappedItems
}

export function forEach<T>(array: T[], cb: (item: T) => void): void {
  for (let i = 0; i < array.length; i++) {
    const item = array[i]
    cb(item)
  }
}

export function reduce<T, R>(array: T[], cb: (acc: R, item: T) => R, initialAcc: R): R {
  let acc = initialAcc
  for (let i = 0; i < array.length; i++) {
    acc = cb(acc, array[i])
  }
  return acc
}
