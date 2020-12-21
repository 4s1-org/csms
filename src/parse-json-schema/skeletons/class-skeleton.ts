import { PropertySkeleton } from "./property-skeleton"
import { SkeletonBase } from "./skeleton-base"

export class ClassSkeleton extends SkeletonBase {
  private _properties: PropertySkeleton[] = []
  private _allowAdditionalProperties: boolean = false

  public constructor(name: string,
    public readonly isRoot: boolean = false) {
    super(name + "Dto")
  }

  public addProperty(name: string, isRequired: boolean): PropertySkeleton {
    const prop = new PropertySkeleton(name, isRequired)
    this._properties.push(prop)
    return prop
  }

  public allowAdditionalProperties() {
    this._allowAdditionalProperties = true
  }

  public toString(): string[] {
    const result: string[] = []

    // Headerinfo
    result.push(`// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!`)
    result.push(``)

    // Imports
    if (this._properties.length) {
      const classValidatorItems: string[] = []
      const ownImports: [string, string][] = []
      for (const prop of this._properties) {
        classValidatorItems.push(...prop.importClassValidator)
        ownImports.push(...prop.imporOwnClass)
      }
      let uniqueItems = [...new Set(classValidatorItems)].sort()
      let uniqueItems3 = [...new Set(ownImports)]

      result.push(`import { ${uniqueItems.join(", ")} } from 'class-validator'`)
      result.push(`import { ApiProperty } from '@nestjs/swagger'`)

      for (const foo of uniqueItems3) {
        result.push(`import { ${foo[0]} } from '${foo[1]}'`)
      }
      result.push(``)
    }

    // Classcomment
    for (const line of this.getComment()) {
      result.push(line)
    }

    // Begin of class
    result.push(`export class ${this.name} {`)

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
      for (const line of prop.toString()) {
        result.push(line)
      }
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

