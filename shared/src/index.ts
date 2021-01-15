export * from "./enumerations"
export * from "./messages"
export * from "./datatypes"
export * from "./custom"
export * from "./utils"
export * from "./generated"

import 'reflect-metadata'
import { Type } from 'class-transformer'

export class Photo {
  id?: number
  filename?: string

  public foo(): void {
    console.log('GEHT DOCH!!!')
  }
}

export class Album {
  id?: number

  name?: string

  @Type(() => Photo)
  photos?: Photo
}
