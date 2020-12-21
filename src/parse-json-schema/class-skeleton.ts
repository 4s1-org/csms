abstract class SkeletonBase {
  public constructor(
    public readonly name: string
  ) {
    // nothing to do
  }

  public formatComment(comment: string): string {
    comment = comment.replace(/&lt;/g, "<")
    comment = comment.replace(/&gt;/g, ">")
    return comment.trim()
  }
}

export class ClassSkeletonProperty extends SkeletonBase {
  private annotations: string[] = []
  private importsClassValidator: string[] = []
  private importsOwnClasses: [string, string][] = []
  private comment = ""

  public constructor(
    name: string,
    public readonly type: string,
    public readonly isRequired: boolean
  ) {
    super(name)

    this.annotations.push(`@ApiProperty()`)

    if (isRequired) {
      this.importsClassValidator.push("IsNotEmpty")
      this.annotations.push("@IsNotEmpty()")
    } else {
      this.importsClassValidator.push("IsOptional")
      this.annotations.push("@IsOptional()")
    }
  }

  public getImportsClassValidator(): string[] {
    return this.importsClassValidator
  }

  public getImportsOwnClasses(): [string, string][] {
    return this.importsOwnClasses
  }

  public addComment(comment: string): void {
    this.comment = this.formatComment(comment)
  }

  public addAnnotationIsEnum(params: string): void {
    this.importsClassValidator.push("IsEnum")
    this.annotations.push(`@IsEnum(${params})`)
  }

  public addAnnotationIsString(): void {
    this.importsClassValidator.push("IsString")
    this.annotations.push(`@IsString()`)
  }

  public addAnnotationIsNumber(): void {
    this.importsClassValidator.push("IsNumber")
    this.annotations.push(`@IsNumber()`)
  }

  public addAnnotationIsInteger(): void {
    this.importsClassValidator.push("IsInt")
    this.annotations.push(`@IsInt()`)
  }

  public addAnnotationIsBoolean(): void {
    this.importsClassValidator.push("IsBoolean")
    this.annotations.push(`@IsBoolean()`)
  }

  public addAnnotationLength(min: number, max: number): void {
    this.importsClassValidator.push("Length")
    this.annotations.push(`@Length(${min}, ${max})`)
  }

  public toClassString(): string {
    const result: string[] = []
    if (this.comment) {
      result.push("  /**")
      result.push(`   * ${this.comment}`)
      result.push("   */")
    }
    for (const annotation of this.annotations) {
      result.push(`  ${annotation}`)
    }
    result.push(`  public ${this.name}${this.isRequired ? "" : "!"}: ${this.type}`)
    return result.join("/n")
  }
}

export class ClassSkeleton extends SkeletonBase {
  private properties: ClassSkeletonProperty[] = []
  private comment = ""

  public constructor(name: string) {
    super(name)
  }

  public addProperty(name: string, type: string, isRequired: boolean): ClassSkeletonProperty {
    const prop = new ClassSkeletonProperty(name, type, isRequired)
    this.properties.push(prop)
    return prop
  }

  public addComment(comment: string): void {
    this.comment = this.formatComment(comment)
  }

  public toClassString(): string {
    const result: string[] = []

    // Headerinfo
    result.push(`// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!`)
    result.push(``)

    // Imports
    if (this.properties.length) {
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
    const requiredProperties = this.properties.filter(x => x.isRequired)
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
    for (const prop of this.properties) {
      result.push(``)
      result.push(prop.toClassString())
    }

    // End of class
    result.push(`}`)

    // End
    return result.join("/n")
  }
}

export class EnumSkeleton extends SkeletonBase {
  public constructor(name: string) {
    super(name)
  }
}
