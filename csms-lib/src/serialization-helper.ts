import { ClassConstructor, serialize, deserialize, deserializeArray } from 'class-transformer'

export abstract class SerializationHelper {
  public static serialize<T>(value: T, groups?: string[]): string {
    return serialize(value, { groups })
  }

  public static deserialize<T>(cls: ClassConstructor<T>, json: string, groups?: string[]): T {
    return deserialize(cls, json, { groups })
  }

  public static deserializeArray<T>(cls: ClassConstructor<T>, json: string, groups?: string[]): T[] {
    return deserializeArray(cls, json, { groups })
  }
}
