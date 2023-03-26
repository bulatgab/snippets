export interface IMyMap<T> {
  add(key: string, item: T): void
  remove(key: string): void
  find(key: string): T | undefined
  size: number,
}
