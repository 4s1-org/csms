import 'reflect-metadata'
import { Type, plainToClass } from 'class-transformer'

export class Photo {
  id?: number
  filename?: string

  public foo(): void {
    console.log('GEHT DOCH')
  }
}

export class Album {
  id?: number

  name?: string

  @Type(() => Photo)
  photos?: Photo
}

const album = plainToClass(Album, {
  id: 1,
  name: 'foo',
  photos: {
    id: 42,
    filename: 'lorem',
  },
})

console.log(album)
if (album && album.photos) {
  album.photos.foo()
}
