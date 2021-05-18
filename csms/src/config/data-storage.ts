import Configstore from 'configstore'
import path from 'path'

/**
 * Wrapperclass for the Configstore
 */
export class DataStorage<T> {
  private config: Configstore

  constructor(projectName: string) {
    this.config = new Configstore(projectName, undefined, {
      configPath: path.join(__dirname, '..', '..', '..', 'data', `${projectName}.json`),
    })
  }

  /**
   * Get a config item.
   */
  public get<K extends keyof T & string>(key: K): T[K] {
    return this.config.get(key)
  }

  /**
   * Set or update a config item.
   */
  public set<K extends keyof T & string>(key: K, value: T[K]): void {
    this.config.set(key, value)
  }

  /**
   * Check if a config item exists.
   */
  public has<K extends keyof T & string>(key: K): boolean {
    return this.config.has(key)
  }

  /**
   * Delete a config item.
   */
  public delete<K extends keyof T & string>(key: K): void {
    this.config.delete(key)
  }

  /**
   * Removes all config item.
   */
  public clear(): void {
    this.config.clear()
  }

  /**
   * Get the count of config items.
   */
  public get count(): number {
    return this.config.size
  }

  /**
   * Get the path to the config file.
   */
  public get path(): string {
    return this.config.path
  }
}
