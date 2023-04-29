import {IMyMap} from './IMyMap'

export class MyMap<T> implements IMyMap<T>, Iterable<[string, T]> {
  private items: Record<string, T> = {}

  get size() {
    // O(n). Can be refactored to be O(1) if we store the size & update it every time
    return Object.keys(this.items).length
  }

  // todo: set? JS? etc. Throw new Error('key already exists')? replace arg?
  add(key: string, item: T) {
    this.items[key] = item
  }

  remove(key: string) {
    delete this.items[key]
  }

  get(key: string): T | undefined {
    return this.items[key]
  }

  // todo: has

  [Symbol.iterator](): Iterator<[string, T]> {
    const entries = Object.entries(this.items)
    let i = 0

    // noinspection UnnecessaryLocalVariableJS
    const iterator: Iterator<[string, T]> = {
      next(): IteratorResult<[string, T]> {
        if (i < entries.length) {
          return {done: false, value: entries[i++]}
        } else {
          return {done: true, value: null}
        }
      }
    }
    return iterator
  }
}
