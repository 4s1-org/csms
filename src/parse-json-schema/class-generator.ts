import path from "path"
import fs from "fs"
import { SchemaDefinitionPropertyItem } from "./schema-elements/schema-definition-property"
import { kMaxLength } from "buffer"

type EnumsType = {
  [name: string]: EnumItemType
}

type EnumItemType = {
  description?: string
  items: string[]
}

type DtosType = {
  [name: string]: DtoItemType
}

type DtoItemType = {
  description?: string
  items: SchemaDefinitionPropertyItem[]
}

export class ClassGenerator {
  private enums: EnumsType = {}
  private dtos: DtosType = {}

  private static instance: ClassGenerator

  private constructor() {
    // nothing to do
  }

  public static get Instance(): ClassGenerator {
    if (!ClassGenerator.instance) {
      ClassGenerator.instance = new ClassGenerator()
    }
    return ClassGenerator.instance
  }

  public addDto(name: string, description: string | undefined, items: SchemaDefinitionPropertyItem[]): void {
    if (!(name in this.dtos)) {
      this.dtos[name] = { description, items }
    } else {
      const ele = this.dtos[name]
    }
  }

  public addEnum(name: string, items: string[], description: string | undefined): void {
    if (!(name in this.enums)) {
      this.enums[name] = { items, description }
    } else {
      const ele = this.enums[name]
      for (let i = 0; i < ele.items.length; i++) {
        if (ele.items[i] !== items[i]) {
          throw new Error(`${name} Enum: Items are unequal`)
        }
      }
    }
  }

  public generateFiles(): void {
    this.generateEnumFiles()
    this.generateDtosFiles()
  }

  private generateDtosFiles(): void {
    for (const name in this.dtos) {
      const ele = this.dtos[name]
      const file = path.join(__dirname, "generated", "dtos", `${this.filenameFormatter(name)}.dto.ts`)

      const content: string[] = []
      const classValidatorImports: string[] = []

      content.push(`// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!`)
      content.push(``)

      if (ele.items.some(x => !x.isRequired)) {
        classValidatorImports.push("IsOptional")
      }
      if (ele.items.some(x => x.isRequired)) {
        classValidatorImports.push("IsNotEmpty")
      }
      if (ele.items.some(x => x.type === "integer")) {
        classValidatorImports.push("IsInt")
      }
      if (ele.items.some(x => x.type === "number")) {
        classValidatorImports.push("IsNumber")
      }
      if (ele.items.some(x => x.type === "string")) {
        classValidatorImports.push("IsString")
      }
      if (ele.items.some(x => x.type === "boolean")) {
        classValidatorImports.push("IsBoolean")
      }
      if (ele.items.some(x => x.type.endsWith("EnumType"))) {
        classValidatorImports.push("IsEnum")
      }
      if (ele.items.some(x => x.maxLength !== undefined)) {
        classValidatorImports.push("Length")
      }
      if (classValidatorImports.length !== 0) {
        content.push(`import { ${classValidatorImports.join(", ")} } from 'class-validator'`)
      }
      content.push(`import { ApiProperty } from '@nestjs/swagger'`)

      // DTOs importieren
      for (const item of ele.items) {
        if (item.type.endsWith("EnumType")) {
          const type = item.type.substr(0, item.type.length - 8)
          this.pushIfNotExists(content, `import { ${type}Enum } from '../enums/${this.filenameFormatter(type)}.enum'`)
        } else if (item.type.endsWith("Type")) {
          const type = item.type.substr(0, item.type.length - 4)
          this.pushIfNotExists(content, `import { ${type}Dto } from './${this.filenameFormatter(type)}.dto'`)
        }
      }
      content.push(``)

      if (ele.description) {
        content.push(`/**`)
        content.push(` * ${this.descriptionFormatter(ele.description)}`)
        content.push(` */`)
      }
      content.push(`export class ${name}Dto {`)
      content.push(`  public constructor () {`)
      content.push(`    // nothing to do`)
      content.push(`  }`)
      content.push(``)

      let isFirst = true
      for (const item of ele.items) {
        if (!isFirst) {
          content.push(``)
        }

        // ToDo: zweites ! muss noch raus, wenn Property im Konstruktor ist.
        const reqFlag = item.isRequired ? "!" : "!"

        if (item.description) {
          content.push(`  /**`)
          content.push(`   * ${this.descriptionFormatter(item.description)}`)
          content.push(`   */`)
        }
        content.push(`  @ApiProperty()`)
        if (item.isRequired) {
          content.push(`  @IsNotEmpty()`)
        } else {
          content.push(`  @IsOptional()`)
        }
        if (item.maxLength !== undefined) {
          content.push(`  @Length(0, ${item.maxLength})`)
        }
        if (item.type.endsWith("EnumType")) {
          // Enum als Typ
          const type = item.type.substr(0, item.type.length - 8)
          content.push(`  @IsEnum(${type}Enum)`)
          content.push(`  public ${item.name}${reqFlag}: ${type}Enum`)
        } else if (item.type.endsWith("Type")) {
          // DTO als Typ
          // ToDo: Nested Validierung
          const type = item.type.substr(0, item.type.length - 4)
          content.push(`  public ${item.name}${reqFlag}: ${type}Dto`)
        } else {
          // Einfacher Datentyp
          if (item.type === "integer") {
            content.push(`  @IsInt()`)
            content.push(`  public ${item.name}${reqFlag}: number`)
          } else if (item.type === "number") {
            content.push(`  @IsNumber()`)
            content.push(`  public ${item.name}${reqFlag}: number`)
          } else if (item.type === "string") {
            content.push(`  @IsString()`)
            content.push(`  public ${item.name}${reqFlag}: string`)
          } else if (item.type === "boolean") {
            content.push(`  @IsBoolean()`)
            content.push(`  public ${item.name}${reqFlag}: boolean`)
          } else if (item.type === "any") {
            // ToDo: Typ implementieren
            content.push(`  public ${item.name}${reqFlag}: any`)
          } else {
            throw new Error(`Unknown type: ${item.type}`)
          }
        }
        isFirst = false
      }
      content.push(`}`)
      content.push(``)

      this.writeFile(file, content)
    }
  }

  private writeFile(file: string, content: string[]): void {
    let data = content.join("\n")
    data = data.replace(/\r\n/g, "\n")
    fs.writeFileSync(file, data, { encoding: "utf-8" })
  }

  private pushIfNotExists(content: string[], text: string): void {
    if (content.indexOf(text) === -1) {
      content.push(text)
    }
  }

  private generateEnumFiles(): void {
    for (const name in this.enums) {
      const ele = this.enums[name]
      const file = path.join(__dirname, "generated", "enums", `${this.filenameFormatter(name)}.enum.ts`)

      const content: string[] = []
      if (ele.description) {
        content.push(`/**`)
        content.push(` * ${this.descriptionFormatter(ele.description)}`)
        content.push(` */`)
      }
      content.push(`export enum ${name}Enum {`)
      for (const item of ele.items) {
        const propName = item.includes("-") || item.includes(".") ? `"${item}"` : item
        content.push(`  ${propName} = "${item}",`)
      }
      content.push(`}`)
      content.push()

      this.writeFile(file, content)
    }
  }

  private descriptionFormatter(description: string): string {
    description = description.replace(/&lt;/g, "<")
    description = description.replace(/&gt;/g, ">")
    return description.trim()
  }

  private filenameFormatter(name: string): string {
    name = name.replace(/OCPP/g, "Ocpp")
    name = name.replace(/OCSP/g, "Ocsp")
    name = name.replace(/EVSE/g, "Evse")
    name = name.replace(/VPN/g, "Vpn")
    name = name.replace(/APN/g, "Apn")
    name = name.replace(/EV/g, "Ev")
    name = name.replace(/AC/g, "Ac")
    name = name.replace(/DC/g, "Dc")

    let result = name[0].toLocaleLowerCase()
    for (let i = 1; i < name.length; i++) {
      if (name[i].match(/[A-Z]/) !== null) {
        result += "-" + name[i].toLowerCase()
      } else {
        result += name[i]
      }
    }
    return result
  }
}
