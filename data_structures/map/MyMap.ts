import {IMyMap} from './IMyMap'

export class MyMap<T> implements IMyMap<T> {
  items: Record<string, T> = {}

  get size() {
    // O(n). Can be refactored to be O(1) if we store the size & update it every time
    return Object.keys(this.items).length
  }

  add(key: string, item: T) {
    this.items[key] = item
  }

  remove(key: string) {
    delete this.items[key]
  }

  find(key: string): T | undefined {
    return this.items[key]
  }
}
