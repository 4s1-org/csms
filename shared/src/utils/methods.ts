import { plainToClass } from 'class-transformer'

export declare type ClassConstructor<T> = {
  new (...args: any[]): T
}

export function toClass<T, V>(cls: ClassConstructor<T>, plain: V): T {
  return plainToClass(cls, plain)
}
