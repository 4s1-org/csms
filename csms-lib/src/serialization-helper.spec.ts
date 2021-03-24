import { Expose } from 'class-transformer'
import { SerializationHelper } from './serialization-helper'

class Foo {
  @Expose({ name: '_bar', groups: ['bar'] })
  public bar = []
}

describe('SerializationHelper', () => {
  describe('Arrays', () => {
    it('Simple Object', () => {
      // Arrange
      const item = { foo: [] }
      // Act
      const str = SerializationHelper.serialize(item)
      // Assert
      expect(str).toBe('{"foo":[]}')
    })

    it('Class with annotations', () => {
      // Arrange
      const item = new Foo()
      // Act
      const str = SerializationHelper.serialize(item, ['bar'])
      // Assert
      expect(str).toBe('{"_bar":[]}')
    })
  })
})
