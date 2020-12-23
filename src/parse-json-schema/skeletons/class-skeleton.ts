import { getCommentByClass, getCommentByClassField } from "../comments/class-comments"
import { PropertySkeleton } from "./property-skeleton"
import { SkeletonBase } from "./skeleton-base"

export class ClassSkeleton extends SkeletonBase {
  private _properties: PropertySkeleton[] = []
  private _allowAdditionalProperties = false

  public constructor(name: string,
    public readonly isMessage: boolean = false) {
    super(name, "Dto")
  }

  public addProperty(name: string, isRequired: boolean): PropertySkeleton {
    const prop = new PropertySkeleton(name, isRequired)
    this._properties.push(prop)
    return prop
  }

  public allowAdditionalProperties(): void {
    this._allowAdditionalProperties = true
  }

  public toString(): string[] {
    const result: string[] = []

    // Headerinfo
    result.push(`// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!`)
    result.push(``)

    const classValidatorItems: string[] = []
    const ownImports: [string, string][] = []

    // Imports
    {
      if (this._properties.length) {
        for (const prop of this._properties) {
          classValidatorItems.push(...prop.importClassValidator)
          ownImports.push(...prop.imporOwnClass)
        }
        result.push(`import { ApiProperty } from '@nestjs/swagger'`)
      }

      const classValidatorItemsUnique = [...new Set(classValidatorItems)].sort()
      result.push(`import { ${classValidatorItemsUnique.join(", ")} } from 'class-validator'`)

      const ownImportsDone: string[] = []
      for (const ownImport of ownImports.sort()) {
        if (ownImportsDone.includes(ownImport[0])) {
          continue
        }

        if (ownImport[1].endsWith("enum")) {
          result.push(`import { ${ownImport[0]} } from '../enumerations/${ownImport[1]}'`)
        } else if (ownImport[1].endsWith("dto")) {
          if (this.isMessage) {
            result.push(`import { ${ownImport[0]} } from '../types/${ownImport[1]}'`)
          } else {
            result.push(`import { ${ownImport[0]} } from './${ownImport[1]}'`)
          }
        }
        ownImportsDone.push(ownImport[0])
      }
      result.push(``)
    }

    // Classcomment
    const classComment = getCommentByClass(this.name)
    {
      // Gibt es einen Kommentar aus den PDFs Dokus?
      // Ansonsten nehme den aus den JSON-Schema Dateien.
      if (classComment) {
        result.push(`/**`)
        result.push(` * ${classComment.description}`)
        result.push(` */`)
      } else {
        for (const line of this.getComment()) {
          result.push(line)
        }
      }
    }

    // Begin of class
    result.push(`export class ${this.name}${this.nameSuffix} {`)

    // Constructor
    const requiredProperties = this._properties.filter(x => x.isRequired)
    if (requiredProperties.length) {
      result.push(`  public constructor(`)
      for (const prop of requiredProperties) {
        result.push(`    ${prop.name}: ${prop.type},`)
      }
      result.push(`  ) {`)
      for (const prop of requiredProperties) {
        result.push(`    this.${prop.name} = ${prop.name}`)
      }
      result.push(`  }`)
    }

    // Properties
    for (const prop of this._properties) {
      result.push(``)
      const fieldComment = getCommentByClassField(classComment, prop.name)
      if (fieldComment) {
        result.push(`  /**`)
        result.push(`   * ${fieldComment.description}`)
        result.push(`   * Required: ${fieldComment.isRequired}`)
        result.push(`   * ${fieldComment.fieldType}`)
        result.push(`   * ${fieldComment.cardinality}`)
        result.push(`   */`)
      } else {
        result.push(...prop.commentToString())
      }

      result.push(...prop.toString())
    }

    if (this._allowAdditionalProperties) {
      result.push("")
      result.push("  // To be implemented later")
      result.push("  public get allowAdditionalProperties(): boolean {")
      result.push("    return true")
      result.push("  }")
    }

    // End of class
    result.push(`}`)
    result.push(``)

    // End
    return result
  }

}
