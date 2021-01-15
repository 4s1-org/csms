import 'reflect-metadata'
import { Album } from '@yellowgarbagebag/csms-shared'
import { plainToClass } from 'class-transformer'
// import { Photo2 } from '@yellowgarbagebag/csms-shared'

// export class Photo {
//   id?: number
//   filename?: string

//   public foo(): void {
//     console.log('GEHT DOCH')
//   }
// }

// export class Album {
//   id?: number

//   name?: string

//   // @Type(() => Photo)
//   // photos?: Photo

//   @Type(() => Photo2)
//   photoss?: Photo2
// }

const album = plainToClass(Album, {
  id: 1,
  name: 'foo',
  photos: {
    id: 42,
    filename: 'lorem',
  },
})

console.log(album)
// if (album && album.photos) {
//   album.photos.foo()
// }
if (album && album.photos) {
  album.photos.foo()
}
