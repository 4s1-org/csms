import { Expose, Transform } from 'class-transformer'
import { SerializationHelper } from './serialization-helper'

class Foo {
  @Expose({ name: '_bar', groups: ['bar'] })
  @Transform(({ value }) => value || [], { toClassOnly: true })
  public bar = []
}

describe('SerializationHelper', () => {
  describe('serialize', () => {
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
  describe('deserialize', () => {
    describe('Arrays', () => {
      it('Simple Object', () => {
        // Arrange
        const str = '{}'
        // Act
        const item = SerializationHelper.deserialize(Foo, str)
        // Assert
        expect(item.bar).not.toBeUndefined()
        expect(Array.isArray(item.bar)).toBe(true)
      })
    })
  })
})
