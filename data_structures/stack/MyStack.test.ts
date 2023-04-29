import {MyStack} from './MyStack'

it('should initialize, push, and pop correctly', () => {
  const stack = new MyStack(1, 2)
  stack.push(3)
  stack.push(4)
  expect(stack.pop()).toBe(4)
  expect(stack.pop()).toBe(3)
  expect(stack.pop()).toBe(2)
  expect(stack.pop()).toBe(1)
  expect(stack.pop()).toBe(undefined)
  expect(stack.pop()).toBe(undefined)
})

it('is iterable using spread operator and for...of loop', () => {
  const stack = new MyStack<number>()
  stack.push(11)
  stack.push(22)

  // spread
  expect([...stack]).toEqual([11, 22])

  // for...of
  let concatString = ''
  for (let value of stack) {
    concatString += value
  }
  expect(concatString).toBe('1122')
})
