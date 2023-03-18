export interface IMyStack<T> {
  /**
   * Returns undefined if the stack is empty
   */
  pop: () => T | undefined,

  push: (value: T) => void,
}
