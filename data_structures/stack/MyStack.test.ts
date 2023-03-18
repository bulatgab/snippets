import {MyStack} from './MyStack'

it('should initialize, push, and pop correctly', () => {
  const stack = new MyStack(-1, 0)
  stack.push(1)
  stack.push(2)
  expect(stack.pop()).toBe(2)
  expect(stack.pop()).toBe(1)
  expect(stack.pop()).toBe(0)
  expect(stack.pop()).toBe(-1)
  expect(stack.pop()).toBe(undefined)
  expect(stack.pop()).toBe(undefined)
})
