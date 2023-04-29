export interface IMyMap<T> {
  add(key: string, item: T): void
  remove(key: string): void
  get(key: string): T | undefined

  // todo: getter? + setter (if 0 -> clear)
  size: number,
}
