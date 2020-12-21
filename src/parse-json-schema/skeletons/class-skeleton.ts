import { ClassSkeletonProperty } from "./class-skeleton-property"
import { SkeletonBase } from "./skeleton-base"

export class ClassSkeleton extends SkeletonBase {
  private _properties: ClassSkeletonProperty[] = []

  public constructor(name: string) {
    super(name)
  }

  public addProperty(name: string, type: string, isRequired: boolean): ClassSkeletonProperty {
    const prop = new ClassSkeletonProperty(name, type, isRequired)
    this._properties.push(prop)
    return prop
  }

  public toString(): string[] {
    const result: string[] = []

    // Headerinfo
    result.push(`// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!`)
    result.push(``)

    // Imports
    if (this._properties.length) {
      result.push(`import { ApiProperty } from '@nestjs/swagger'`)
    }

    // Classcomment
    if (this.comment) {
      result.push("  /**")
      result.push(`   * ${this.comment}`)
      result.push("   */")
    }

    // Begin of class
    result.push(`export class ${this.name} {`)

    // Constructor
    const requiredProperties = this._properties.filter(x => x.isRequired)
    if (requiredProperties.length) {
      result.push(`    public constructor(`)
      for (const prop of requiredProperties) {
        result.push(`      this.${prop.name}: ${prop.type},`)
      }
      result.push(`    ) {`)
      for (const prop of requiredProperties) {
        result.push(`      this.${prop.name} = ${prop.name}`)
      }
      result.push(`    }`)
    }

    // Properties
    for (const prop of this._properties) {
      result.push(``)
      for (const line of prop.toString()) {
        result.push(line)
      }
    }

    // End of class
    result.push(`}`)

    // End
    return result
  }
}

