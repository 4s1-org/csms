import path from "path"
import fs from "fs"
import { EnumSkeleton } from "./skeletons/enum-skeleton"
import { ClassSkeleton } from "./skeletons/class-skeleton"

export class ClassGenerator {
  private enumSkeletons: EnumSkeleton[] = []
  private classSkeletons: ClassSkeleton[] = []

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

  public addClass(skeleton: ClassSkeleton): void {
    this.classSkeletons.push(skeleton)
  }


  public addEnum(skeleton: EnumSkeleton): void {
    this.enumSkeletons.push(skeleton)
  }

  public generateFiles(): void {
    for (const item of this.enumSkeletons) {
      item.writeFile([__dirname, "generated", "enums"], "enum")
    }

    for (const item of this.classSkeletons.filter(x => x.isRoot)) {
      item.writeFile([__dirname, "generated", "dtos"], "dto")
    }
    for (const item of this.classSkeletons.filter(x => !x.isRoot)) {
      item.writeFile([__dirname, "generated", "dtos"], "dto")
    }
  }

  // private generateDtosFiles(): void {
  //   for (const name in this.dtos) {
  //     const ele = this.dtos[name]
  //     const file = path.join(__dirname, "generated", "dtos", `${this.filenameFormatter(name)}.dto.ts`)

  //     const header: string[] = []
  //     const props: string[] = []
  //     const constructorParas: string[] = []
  //     const constructorAssignments: string[] = []
  //     const classValidatorImports: string[] = []

  //     header.push(`// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!`)
  //     header.push(``)

  //     if (ele.items.some(x => !x.isRequired)) {
  //       classValidatorImports.push("IsOptional")
  //     }
  //     if (ele.items.some(x => x.isRequired)) {
  //       classValidatorImports.push("IsNotEmpty")
  //     }
  //     if (ele.items.some(x => x.type === "integer")) {
  //       classValidatorImports.push("IsInt")
  //     }
  //     if (ele.items.some(x => x.type === "number")) {
  //       classValidatorImports.push("IsNumber")
  //     }
  //     if (ele.items.some(x => x.type === "string")) {
  //       classValidatorImports.push("IsString")
  //     }
  //     if (ele.items.some(x => x.type === "boolean")) {
  //       classValidatorImports.push("IsBoolean")
  //     }
  //     if (ele.items.some(x => x.type.endsWith("EnumType"))) {
  //       classValidatorImports.push("IsEnum")
  //     }
  //     if (ele.items.some(x => x.maxLength !== undefined)) {
  //       classValidatorImports.push("Length")
  //     }
  //     if (classValidatorImports.length !== 0) {
  //       header.push(`import { ${classValidatorImports.join(", ")} } from 'class-validator'`)
  //     }
  //     header.push(`import { ApiProperty } from '@nestjs/swagger'`)

  //     // DTOs importieren
  //     for (const item of ele.items) {
  //       if (item.type.endsWith("EnumType")) {
  //         const type = item.type.substr(0, item.type.length - 8)
  //         this.pushIfNotExists(header, `import { ${type}Enum } from '../enums/${this.filenameFormatter(type)}.enum'`)
  //       } else if (item.type.endsWith("Type")) {
  //         const type = item.type.substr(0, item.type.length - 4)
  //         this.pushIfNotExists(header, `import { ${type}Dto } from './${this.filenameFormatter(type)}.dto'`)
  //       }
  //     }
  //     header.push(``)

  //     if (ele.description) {
  //       header.push(`/**`)
  //       header.push(` * ${this.descriptionFormatter(ele.description)}`)
  //       header.push(` */`)
  //     }
  //     header.push(`export class ${name}Dto {`)

  //     let isFirst = true
  //     for (const item of ele.items) {
  //       const reqFlag = item.isRequired ? "" : "!"

  //       if (!isFirst) {
  //         props.push(``)
  //       }

  //       if (item.description) {
  //         props.push(`  /**`)
  //         props.push(`   * ${this.descriptionFormatter(item.description)}`)
  //         props.push(`   */`)
  //       }
  //       props.push(`  @ApiProperty()`)
  //       if (item.isRequired) {
  //         props.push(`  @IsNotEmpty()`)
  //       } else {
  //         props.push(`  @IsOptional()`)
  //       }
  //       if (item.maxLength !== undefined) {
  //         props.push(`  @Length(0, ${item.maxLength})`)
  //       }
  //       if (item.type.endsWith("EnumType")) {
  //         // Enum als Typ
  //         const type = item.type.substr(0, item.type.length - 8)
  //         props.push(`  @IsEnum(${type}Enum)`)
  //         props.push(`  public ${item.name}${reqFlag}: ${type}Enum`)
  //         if (item.isRequired) {
  //           constructorParas.push(`    ${item.name}: ${type}Enum`)
  //           constructorAssignments.push(`    this.${item.name} = ${item.name}`)
  //         }
  //       } else if (item.type.endsWith("Type")) {
  //         // DTO als Typ
  //         // ToDo: Nested Validierung
  //         const type = item.type.substr(0, item.type.length - 4)
  //         props.push(`  public ${item.name}${reqFlag}: ${type}Dto`)
  //         if (item.isRequired) {
  //           constructorParas.push(`    ${item.name}: ${type}Dto`)
  //           constructorAssignments.push(`    this.${item.name} = ${item.name}`)
  //         }
  //       } else {
  //         // Einfacher Datentyp
  //         if (item.type === "integer") {
  //           props.push(`  @IsInt()`)
  //           props.push(`  public ${item.name}${reqFlag}: number`)
  //           if (item.isRequired) {
  //             constructorParas.push(`    ${item.name}: number`)
  //             constructorAssignments.push(`    this.${item.name} = ${item.name}`)
  //           }
  //         } else if (item.type === "number") {
  //           props.push(`  @IsNumber()`)
  //           props.push(`  public ${item.name}${reqFlag}: number`)
  //           if (item.isRequired) {
  //             constructorParas.push(`    ${item.name}: number`)
  //             constructorAssignments.push(`    this.${item.name} = ${item.name}`)
  //           }
  //         } else if (item.type === "string") {
  //           props.push(`  @IsString()`)
  //           props.push(`  public ${item.name}${reqFlag}: string`)
  //           if (item.isRequired) {
  //             constructorParas.push(`    ${item.name}: string`)
  //             constructorAssignments.push(`    this.${item.name} = ${item.name}`)
  //           }
  //         } else if (item.type === "boolean") {
  //           props.push(`  @IsBoolean()`)
  //           props.push(`  public ${item.name}${reqFlag}: boolean`)
  //           if (item.isRequired) {
  //             constructorParas.push(`    ${item.name}: boolean`)
  //             constructorAssignments.push(`    this.${item.name} = ${item.name}`)
  //           }
  //         } else if (item.type === "any") {
  //           // ToDo: Typ implementieren
  //           props.push(`  public ${item.name}${reqFlag}: any`)
  //           if (item.isRequired) {
  //             constructorParas.push(`    ${item.name}: any`)
  //             constructorAssignments.push(`    this.${item.name} = ${item.name}`)
  //           }
  //         } else {
  //           throw new Error(`Unknown type: ${item.type}`)
  //         }
  //       }
  //       isFirst = false
  //     }

  //     let content: string[] = []
  //     content = content.concat(header)
  //     if (constructorParas.length === 0) {
  //       content.push(`  public constructor() {`)
  //       content.push(`    // nothing to do`)
  //       content.push(`  }`)
  //     } else {
  //       content.push(`  public constructor(`)
  //       content.push(constructorParas.join(",\n"))
  //       content.push(`  ) {`)
  //       content.push(constructorAssignments.join("\n"))
  //       content.push(`  }`)
  //     }
  //     content.push(``)
  //     content = content.concat(props)
  //     content.push(`}`)
  //     content.push(``)

  //     this.writeFile(file, content)
  //   }
  // }
}
