import {MySet} from './MySet'

it('should work with numbers and strings', () => {
  const set = new MySet<number>()
  expect(set.size).toBe(0)
  expect(set.values).toEqual([])

  set.add(1, 2, 1, 1)
  expect(set.has(1)).toBe(true)
  expect(set.has(2)).toBe(true)
  expect(set.has(100)).toBe(false)
  expect(set.size).toBe(2)
  expect(set.values).toEqual([1, 2])

  set.remove(1)
  expect(set.has(1)).toBe(false)
  expect(set.size).toBe(1)
  expect(set.values).toEqual([2])
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

  const set = new MySet<Item>(obj => obj.id)
  set.add(...items)

  expect(set.has(items[0])).toBe(true)
  expect(set.has(items[2])).toBe(true)
  expect(set.has({id: 100})).toBe(false)
  expect(set.size).toBe(2)
  expect(set.values).toEqual([items[0], items[1]])

  set.remove(items[0])
  expect(set.has(items[0])).toBe(false)
  expect(set.size).toBe(1)
  expect(set.values).toEqual([items[1]])
})

it('is iterable using spread operator and for...of loop', () => {
  const set = new MySet<number>()
  set.add(11, 22)

  // spread
  expect([...set]).toEqual([11, 22])

  // for...of
  let concatString = ''
  for (let value of set) {
    concatString += value
  }
  expect(concatString).toBe('1122')
})



