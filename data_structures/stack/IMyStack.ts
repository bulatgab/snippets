export interface IMyStack<T> {
  /**
   * Returns null if the stack is empty
   */
  pop: () => T | null,

  push: (value: T) => void,
}
