import { EnumSkeleton } from './skeletons/enum-skeleton'
import { ClassSkeleton } from './skeletons/class-skeleton'
import { SkeletonBase } from './skeletons/skeleton-base'
import path from 'path'
import fs from 'fs'

export class ClassGenerator {
  private enumSkeletons: EnumSkeleton[] = []
  private classSkeletons: ClassSkeleton[] = []
  private generatedFolderIndex: [string, string][] = []
  private jsonSchemaData: [string, string][] = []

  private static _instance: ClassGenerator

  private constructor() {
    // nothing to do
  }

  public static get instance(): ClassGenerator {
    if (!ClassGenerator._instance) {
      ClassGenerator._instance = new ClassGenerator()
    }
    return ClassGenerator._instance
  }

  public addJsonSchema(filenameWithoutExt: string, pathWithFilename: string): void {
    this.jsonSchemaData.push([filenameWithoutExt, pathWithFilename])
  }

  public addClass(skeleton: ClassSkeleton): void {
    // ToDo: Hier könnte man noch schauen, ob die vorhandene genau gleich ist.
    if (this.classSkeletons.filter((x) => x.fullName === skeleton.fullName).length === 0) {
      this.classSkeletons.push(skeleton)
    }
  }

  public addEnum(skeleton: EnumSkeleton): void {
    // ToDo: Hier könnte man noch schauen, ob die vorhandene genau gleich ist.
    if (this.enumSkeletons.filter((x) => x.fullName === skeleton.fullName).length === 0) {
      this.enumSkeletons.push(skeleton)
    }
  }

  public generateFiles(): void {
    this._generateBaseDtoClasses([__dirname, '..', '..', 'src', 'generated'], 'Request')
    this._generateBaseDtoClasses([__dirname, '..', '..', 'src', 'generated'], 'Response')
    this._generateBaseDtoClasses([__dirname, '..', '..', 'src', 'generated'], 'Datatype')

    this._generateMessageTypes(
      [__dirname, '..', '..', 'src', 'generated'],
      'Request',
      this.classSkeletons.filter((x) => x.isMessage && x.isRequest),
    )
    this._generateMessageTypes(
      [__dirname, '..', '..', 'src', 'generated'],
      'Response',
      this.classSkeletons.filter((x) => x.isMessage && x.isResponse),
    )

    this._generateFiles([__dirname, '..', '..', 'src', 'enumerations'], this.enumSkeletons)
    this._generateFiles(
      [__dirname, '..', '..', 'src', 'messages'],
      this.classSkeletons.filter((x) => x.isMessage),
    )
    this._generateFiles(
      [__dirname, '..', '..', 'src', 'datatypes'],
      this.classSkeletons.filter((x) => !x.isMessage),
    )

    this._generateMessageEnumList(
      [__dirname, '..', '..', 'src', 'generated'],
      this.classSkeletons.filter((x) => x.isMessage).map((x) => x.nameWithoutReqOrRes),
    )

    this._generateActionDtoMapping(
      [__dirname, '..', '..', 'src', 'generated'],
      'Request',
      this.classSkeletons.filter((x) => x.isMessage && x.isRequest),
    )
    this._generateActionDtoMapping(
      [__dirname, '..', '..', 'src', 'generated'],
      'Response',
      this.classSkeletons.filter((x) => x.isMessage && x.isResponse),
    )

    this._generateJsonSchemaIndex([__dirname, '..', '..', 'src', 'generated'])

    this._generateRequestToResponseType(
      [__dirname, '..', '..', 'src', 'generated'],
      this.classSkeletons.filter((x) => x.isMessage),
    )

    // Muss als letztes erfolgen
    this._generateGeneratedFolderIndex([__dirname, '..', '..', 'src', 'generated'])
  }

  private _generateJsonSchemaIndex(folders: string[]): void {
    const data: string[] = []
    data.push(`// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!`)
    data.push(``)
    for (const item of this.jsonSchemaData) {
      data.push(`import ${item[0]} from './${item[1]}'`)
    }
    data.push(``)
    data.push(`export const jsonSchemas:{ [key: string]: any } = {`)
    for (const item of this.jsonSchemaData) {
      data.push(`  ${item[0]},`)
    }
    data.push(`}`)
    data.push(``)

    const fileName = path.join(...folders, 'json-schema-imports.ts')
    fs.writeFileSync(fileName, data.join('\n'), { encoding: 'utf-8' })
  }

  private _generateGeneratedFolderIndex(folders: string[]): void {
    const data: string[] = []
    data.push(`// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!`)
    data.push(``)
    for (const file of this.generatedFolderIndex) {
      data.push(`export { ${file[0]} } from './${file[1]}'`)
    }
    data.push(``)

    const fileName = path.join(...folders, 'index.ts')
    fs.writeFileSync(fileName, data.join('\n'), { encoding: 'utf-8' })
  }

  private _generateFiles(folders: string[], skeletons: SkeletonBase[]): void {
    const data: string[] = []
    data.push(`// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!`)
    data.push(``)
    for (const skeleton of skeletons) {
      skeleton.writeFile(folders)
      data.push(`export { ${skeleton.fullName} } from './${skeleton.fileNameWithoutExt}'`)
    }
    data.push(``)

    const fileName = path.join(...folders, 'index.ts')
    fs.writeFileSync(fileName, data.join('\n'), { encoding: 'utf-8' })
  }

  private _generateMessageEnumList(folders: string[], messages: string[]): void {
    // Make unique
    messages = [...new Set(messages)]

    const className = `OcppActionEnum`

    const data: string[] = []
    data.push(`// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!`)
    data.push(``)
    data.push(`export enum ${className} {`)
    for (const message of messages) {
      data.push(`  ${message} = '${message}',`)
    }
    data.push(`}`)
    data.push(``)

    const fileNameWithoutExt = `ocpp-action.enum`
    const fileName = path.join(...folders, `${fileNameWithoutExt}.ts`)
    fs.writeFileSync(fileName, data.join('\n'), { encoding: 'utf-8' })

    this.generatedFolderIndex.push([className, fileNameWithoutExt])
  }

  private _generateActionDtoMapping(folders: string[], type: 'Request' | 'Response', skeletons: ClassSkeleton[]): void {
    const data: string[] = []

    const className = `action${type}DtoMapping`

    data.push(`// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!`)
    data.push(``)
    for (const skeleton of skeletons) {
      data.push(`import { ${skeleton.name}${skeleton.nameSuffix} } from '../messages/${skeleton.fileNameWithoutExt}'`)
    }
    data.push(`import { ${type}BaseDto } from './${type.toLowerCase()}-base.dto'`)

    data.push(``)
    data.push(`export const ${className}: { [key: string]: { new (...args: any[]): ${type}BaseDto } } = {`)
    for (const skeleton of skeletons) {
      const name = skeleton.nameWithoutReqOrRes
      data.push(`  ${name}: ${name}${type}Dto,`)
    }
    data.push(`}`)
    data.push(``)

    const fileNameWithoutExt = `action-${type.toLowerCase()}-dto-mapping`
    const fileName = path.join(...folders, `${fileNameWithoutExt}.ts`)
    fs.writeFileSync(fileName, data.join('\n'), { encoding: 'utf-8' })

    this.generatedFolderIndex.push([className, fileNameWithoutExt])
  }

  private _generateBaseDtoClasses(folders: string[], type: 'Request' | 'Response' | 'Datatype'): void {
    const data: string[] = []

    const className = `${type}BaseDto`

    data.push(`// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!`)
    data.push(``)
    data.push(`export abstract class ${className} {`)
    data.push(`  private _baseClassName: "${className}" = "${className}"`)
    data.push(`}`)
    data.push(``)

    const fileNameWithoutExt = `${type.toLocaleLowerCase()}-base.dto`
    const fileName = path.join(...folders, `${fileNameWithoutExt}.ts`)
    fs.writeFileSync(fileName, data.join('\n'), { encoding: 'utf-8' })

    this.generatedFolderIndex.push([className, fileNameWithoutExt])
  }

  private _generateMessageTypes(folders: string[], type: 'Request' | 'Response', skeletons: ClassSkeleton[]): void {
    const data: string[] = []

    data.push(`// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!`)
    data.push(``)
    for (const skeleton of skeletons) {
      data.push(`import { ${skeleton.fullName} } from '../messages/${skeleton.fileNameWithoutExt}'`)
    }
    const className = `${type}MessageType`
    data.push(`export type ${className} =`)
    data.push(`  ` + skeletons.map((x) => x.fullName).join(' | \n  '))
    data.push(``)

    const fileNameWithoutExt = `${type.toLocaleLowerCase()}-message.type`
    const fileName = path.join(...folders, `${fileNameWithoutExt}.ts`)
    fs.writeFileSync(fileName, data.join('\n'), { encoding: 'utf-8' })

    this.generatedFolderIndex.push([className, fileNameWithoutExt])
  }

  private _generateRequestToResponseType(folders: string[], skeletons: ClassSkeleton[]): void {
    const data: string[] = []

    data.push(`// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!`)
    data.push(``)
    for (const skeleton of skeletons) {
      data.push(`import { ${skeleton.fullName} } from '../messages/${skeleton.fileNameWithoutExt}'`)
    }
    data.push(``)

    const className = `RequestToResponseType`
    data.push(`export type ${className}<T> =`)
    for (const skeleton of skeletons.filter((x) => x.isRequest)) {
      data.push(`  T extends ${skeleton.name}Dto ? ${skeleton.nameWithoutReqOrRes}ResponseDto :`)
    }
    data.push(`  never`)
    data.push(``)

    const fileNameWithoutExt = `request-to-response.type`
    const fileName = path.join(...folders, `${fileNameWithoutExt}.ts`)
    fs.writeFileSync(fileName, data.join('\n'), { encoding: 'utf-8' })

    this.generatedFolderIndex.push([className, fileNameWithoutExt])
  }
}
