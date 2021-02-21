import Configstore from 'configstore'
import path from 'path'

export class DataStorage<T> {
  private config: Configstore

  constructor(projectName: string) {
    this.config = new Configstore(projectName, undefined, {
      configPath: path.join(__dirname, '..', '..', 'datastorage.json'),
    })
  }

  public get<K extends keyof T & string>(key: K): T[K] {
    return this.config.get(key)
  }

  public set<K extends keyof T & string>(key: K, value: T[K]): void {
    this.config.set(key, value)
  }

  public has<K extends keyof T & string>(key: K): boolean {
    return this.config.has(key)
  }

  public delete<K extends keyof T & string>(key: K): void {
    this.config.delete(key)
  }

  public clear(): void {
    this.config.clear()
  }

  public get count(): number {
    return this.config.size
  }

  public get path(): string {
    return this.config.path
  }
}
