import { add } from './sample'

describe('Sample unit test.', () => {
  test('1 + 2 equals 3', () => {
    expect(add(1, 2)).toBe(3)
  })
})
