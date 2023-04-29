import {IMyStack} from './IMyStack'

export class MyStack<T> implements IMyStack<T>, Iterable<T> {
  private readonly stack: T[]

  constructor(...values: T[]) {
    this.stack = values
  }

  pop() {
    return this.stack.pop()
  }

  push(value: T) {
    return this.stack.push(value)
  }

  [Symbol.iterator](): Iterator<T> {
    let i = 0

    // save stack to local var because 'this.stack' will be unavailable inside iterator.next()
    const stack = this.stack

    // noinspection UnnecessaryLocalVariableJS
    const iterator: Iterator<T, null> = {
      next(): IteratorResult<T, null> {
        if (i < stack.length) {
          return {done: false, value: stack[i++]}
        } else {
          return {done: true, value: null}
        }
      }
    }

    return iterator
  }
}
