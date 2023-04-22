import {filter, find, forEach, map, reduce} from '.'

const testItems = [
  {id: 1, title: 'AAA'},
  {id: 2, title: 'AAA'},
  {id: 3, title: 'BBB'},
  {id: 4, title: 'CC'},
  {id: 5, title: 'DD'},
]

test('find returns the first match', () => {
  const match = find(testItems, item => item.title === 'AAA')
  expect(match).toEqual({id: 1, title: 'AAA'})
})

test('find returns undefined if nothing is found', () => {
  const match = find(testItems, item => item.title === 'XXX')
  expect(match).toBe(undefined)
})

test('filter works', () => {
  const filteredItems = filter(testItems, item => item.title.length === 2)
  expect(filteredItems).toEqual([
    {id: 4, title: 'CC'},
    {id: 5, title: 'DD'},
  ])
})

test('map works', () => {
  const mappedItems = map(testItems, item => item.id)
  expect(mappedItems).toEqual([1, 2, 3, 4, 5])
})

test('forEach works', () => {
  let concatenatedIds = ''
  forEach(testItems, item => {
    concatenatedIds += `${item.id}`
  })
  expect(concatenatedIds).toBe('12345')
})

test('reduce works', () => {
  const concatenatedIds = reduce(testItems, (acc, item) => acc + `${item.id}`, '')
  expect(concatenatedIds).toBe('12345')
})


