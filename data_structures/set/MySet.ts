import {IMySet} from './IMySet'

/**
 * IMySet implementation that uses JS object for storing key-value pairs.
 * For types other than string & number, we need to provide 'keyExtractor' callback in the constructor.
 */
export class MySet<T> implements IMySet<T> {
  // use object without prototype to avoid key collisions
  private items: Record<string | number, T> = Object.create(null)

  private readonly keyExtractor?: (value: T) => string | number

  constructor(keyExtractor?: (value: T) => string | number) {
    this.keyExtractor = keyExtractor
  }

  private toKey(value: T) {
    if (this.keyExtractor !== undefined) {
      return this.keyExtractor(value)
    } else if (typeof value === 'string' || typeof value === 'number') {
      // use the value as a key if keyExtractor is not provided - good for strings & numbers
      return value
    } else {
      throw new Error(`Cannot use MySet with value ${value} if keyExtractor is not provided'`)
    }
  }

  get size() {
    // O(n). Can be refactored to be O(1) if we store the size & update it every time
    return Object.keys(this.items).length
  }

  has(value: T) {
    const key = this.toKey(value)
    return (key in this.items)
  }

  add(...values: T[]) {
    values.forEach(value => {
      const key = this.toKey(value)
      this.items[key] = value
    })
  }

  clear() {
    this.items = Object.create(null)
  }

  delete(value: T) {
    const key = this.toKey(value)
    if (key in this.items) {
      delete this.items[key]
      return true
    } else {
      return false
    }
  }

  values() {
    return Object.values(this.items)
  }

  /** An alias of {@link values} */
  keys() {
    return this.values()
  }

  entries() {
    return this.values().map(value => [value, value] as [T, T])
  }

  forEach(cb) {
    this.values().forEach(cb)
  }
}
