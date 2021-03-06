import path from 'path'
import fs from 'fs'

export abstract class SkeletonBase {
  private _comment: string[] = []
  private _importsClassValidator: string[] = []
  private _importsClassTransformer: string[] = []
  private _importsOwnClasses: [string, string][] = []

  public constructor(public readonly name: string, public readonly nameSuffix: 'Dto' | 'Enum' | '' = '') {
    // nothing to do
  }

  public setComment(value: string | undefined): void {
    this._comment = []
    if (value) {
      value = value.trim()
      value = value.replace(/&lt;/g, '<')
      value = value.replace(/&gt;/g, '>')

      this._comment.push('/**')
      for (const line of value.split('\r\n')) {
        this._comment.push(` * ${line}`)
      }
      this._comment.push(' */')
    }
  }

  /**
   * @deprecated
   */
  public getComment(): string[] {
    return this._comment
  }

  public formatFilename(name: string): string {
    let result = name[0].toLocaleLowerCase()
    for (let i = 1; i < name.length; i++) {
      if (name[i].match(/[A-Z]/) !== null) {
        result += '-' + name[i].toLowerCase()
      } else {
        result += name[i]
      }
    }
    return result
  }

  /**
   * Klassennamen bzw. Enumnamen
   */
  public get fullName(): string {
    return this.name + this.nameSuffix
  }

  public get fileNameWithoutExt(): string {
    return `${this.formatFilename(this.name)}.${this.nameSuffix.toLowerCase()}`
  }

  public get importClassValidator(): string[] {
    // class-validator deaktiviert, weil ich JSON-Schema nutze (#44).
    return []
    // return this._importsClassValidator
  }

  public addImportClassTransformer(value: string): void {
    this._importsClassTransformer.push(value)
  }

  public get importClassTransformer(): string[] {
    return this._importsClassTransformer
  }

  public addImportClassValidatior(value: string): void {
    this._importsClassValidator.push(value)
  }

  public get imporOwnClass(): [string, string][] {
    return this._importsOwnClasses
  }

  public addImportOwnClass(name: string, suffix: 'Dto' | 'Enum', path: string): void {
    this._importsOwnClasses.push([name + suffix, path])
  }

  public abstract toString(): string[]

  public writeFile(folders: string[]): void {
    const folderpath = path.join(...folders)
    if (!fs.existsSync(folderpath)) {
      fs.mkdirSync(folderpath, { recursive: true })
    }

    const filepath = path.join(folderpath, `${this.fileNameWithoutExt}.ts`)

    let data = this.toString().join('\n')
    data = data.replace(/\r\n/g, '\n')
    fs.writeFileSync(filepath, data, { encoding: 'utf-8' })
  }
}
