import {MySet} from './MySet'

it('should work with numbers and strings', () => {
  const mySet = new MySet<number>()
  expect(mySet.size).toBe(0)
  expect(mySet.values).toEqual([])

  mySet.add(1, 2, 1, 1)
  expect(mySet.has(1)).toBe(true)
  expect(mySet.has(2)).toBe(true)
  expect(mySet.has(100)).toBe(false)
  expect(mySet.size).toBe(2)
  expect(mySet.values).toEqual([1, 2])

  mySet.remove(1)
  expect(mySet.has(1)).toBe(false)
  expect(mySet.size).toBe(1)
  expect(mySet.values).toEqual([2])
})

it('should work with objects', () => {
  type Item = {
    id: string | number,
    [key: string]: unknown,
  }

  const items: Item[] = [
    {id: 0, someData: 'AAA'},
    {id: 2, someData: 'CCC'},
    {id: 2, someData: 'CCC'},
    {id: 2, someData: 'CCC'},
  ]

  const mySet = new MySet<Item>(obj => obj.id)
  mySet.add(...items)

  expect(mySet.has(items[0])).toBe(true)
  expect(mySet.has(items[2])).toBe(true)
  expect(mySet.has({id: 100})).toBe(false)
  expect(mySet.size).toBe(2)
  expect(mySet.values).toEqual([items[0], items[1]])

  mySet.remove(items[0])
  expect(mySet.has(items[0])).toBe(false)
  expect(mySet.size).toBe(1)
  expect(mySet.values).toEqual([items[1]])
})




