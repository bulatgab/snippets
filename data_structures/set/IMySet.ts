/**
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 */
export interface IMySet<T> {
  add(item: T): void,
  remove(item: T): void,
  has(item: T): boolean,
  values: T[],
  size: number,
}
