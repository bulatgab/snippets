import {MyMap} from './MyMap'

it('should insert, remove, and find correctly', () => {
  const map = new MyMap<number>()

  map.add('a', 1)
  expect(map.get('a')).toBe(1)
  expect(map.get('wrongKey')).toBe(undefined)

  map.remove('a')
  expect(map.get('a')).toBe(undefined)
})

it('is iterable using spread operator and for...of loop', () => {
  const map = new MyMap<number>()
  map.add('a', 1)
  map.add('b', 2)

  // spread
  expect([...map]).toEqual([['a', 1], ['b', 2]])

  // for...of
  let concatString = ''
  for (let [key, value] of map) {
    concatString += key
    concatString += value
  }
  expect(concatString).toBe('a1b2')
})
