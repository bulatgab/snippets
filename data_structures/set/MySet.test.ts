import {MySet} from './MySet'

it('should work with numbers and strings', () => {
  const set = new MySet<number>()
  set.add(1, 2, 1, 1, 3, 4)
  expect(set.size).toBe(4)
  expect(set.keys()).toEqual([1, 2, 3, 4])
})

it('should work with objects', () => {
  type ObjectWithId = {
    id: string | number,
    [key: string]: unknown,
  }

  const myObjects: ObjectWithId[] = [
    {id: 0, someData: 'AAA'},
    {id: 1, someData: 'BBB'},
    {id: 2, someData: 'CCC'},
  ]

  const set = new MySet<ObjectWithId>(obj => obj.id)
  set.add(myObjects[0])
  set.add(myObjects[1], myObjects[2])

  // size, keys, values, entries
  expect(set.size).toBe(3)
  expect(set.keys()).toEqual(myObjects)
  expect(set.values()).toEqual(myObjects)
  expect(set.entries()).toEqual(myObjects.map(obj => [obj, obj]))

  // forEach
  let sum = 0
  set.forEach(obj => {
    sum += obj.id
  })
  expect(sum).toBe(3)

  // has, delete
  expect(set.has(myObjects[0])).toBe(true)
  set.delete(myObjects[0])
  expect(set.has(myObjects[0])).toBe(false)

  // clear
  set.clear()
  expect(set.size).toBe(0)
})




