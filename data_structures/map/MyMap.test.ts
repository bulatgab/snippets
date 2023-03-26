import {MyMap} from './MyMap'

it('should insert, remove, and find correctly', () => {
  const map = new MyMap<number>()

  map.add('myKey', 111)
  expect(map.find('myKey')).toBe(111)
  expect(map.find('wrongKey')).toBe(undefined)

  map.remove('myKey')
  expect(map.find('myKey')).toBe(undefined)
})
