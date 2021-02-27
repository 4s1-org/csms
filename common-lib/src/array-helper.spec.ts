import { updateItemInArray } from './array-helper'

describe('Array helper', () => {
  describe('updateItemInArray()', () => {
    it('Update item', () => {
      // Arrange
      let arr = [{ id: '1', val: 'foo' }]
      const item = { id: '1', val: 'bar' }
      // Act
      arr = updateItemInArray(arr, item, 'id')
      // Assert
      expect(arr).toBeDefined()
      expect(arr).toHaveLength(1)
      expect(arr).toEqual(expect.arrayContaining([item]))
    })

    it('No item match, add it', () => {
      // Arrange
      let arr = [{ id: '4', val: 'foo' }]
      const item = { id: '1', val: 'bar' }
      // Act
      arr = updateItemInArray(arr, item, 'id')
      // Assert
      expect(arr).toBeDefined()
      expect(arr).toHaveLength(2)
      expect(arr).toEqual(expect.arrayContaining([item]))
    })
  })
})
