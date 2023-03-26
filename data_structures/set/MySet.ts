import {IMySet} from './IMySet'

/**
 * IMySet implementation that uses JS object for storing key-value pairs.
 * For types other than string & number, we need to provide 'keyExtractor' callback in the constructor.
 */
export class MySet<T> implements IMySet<T> {
  // use object without prototype to avoid key collisions
  private items: Record<string | number, T> = Object.create(null)

  // a.k.a. hash function
  private readonly keyExtractor?: (value: T) => string | number

  constructor(keyExtractor?: (value: T) => string | number) {
    this.keyExtractor = keyExtractor ?? JSON.stringify
  }

  get size() {
    // O(n). Can be refactored to be O(1) if we store the size & update it every time
    return Object.keys(this.items).length
  }

  has(value: T) {
    const key = this.keyExtractor(value)
    return (key in this.items)
  }

  add(...values: T[]) {
    values.forEach(value => {
      const key = this.keyExtractor(value)
      this.items[key] = value
    })
  }

  remove(value: T) {
    const key = this.keyExtractor(value)
    delete this.items[key]
  }

  get values() {
    return Object.values(this.items)
  }
}
