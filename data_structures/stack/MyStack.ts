import {IMyStack} from './IMyStack'

export class MyStack<T> implements IMyStack<T> {
  private stack: T[]

  constructor(...values: T[]) {
    this.stack = values
  }

  pop() {
    return this.stack.pop()
  }

  push(value: T) {
    return this.stack.push(value)
  }
}
