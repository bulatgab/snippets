/**
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 */
export interface IMySet<T> {
  size: number,

  add: (item: T) => void,

  clear: () => void,

  /**
   * Returns a boolean asserting whether an element was successfully removed or not
   */
  delete: (item: T) => boolean,

  has: (item: T) => boolean,

  /**
   * Different from JS 'Set', returns array instead of iterator
   */
  values: () => T[]

  /**
   * Different from JS 'Set', returns array instead of iterator
   */
  keys: () => T[],

  /**
   * Different from JS 'Set', returns array instead of iterator
   */
  entries: () => [T, T][]

  forEach: (cb: (value: T) => void) => void

  // JS 'Set' methods that are not supported:
  // Set.prototype[@@iterator]()
}
