import { SkeletonBase } from "./skeleton-base"

export class ClassSkeletonProperty extends SkeletonBase {
  private annotations: string[] = []

  public constructor(
    name: string,
    public readonly type: string,
    public readonly isRequired: boolean
  ) {
    super(name)

    this.annotations.push(`@ApiProperty()`)

    if (isRequired) {
      this.addImportClassValidatior("IsNotEmpty")
      this.annotations.push("@IsNotEmpty()")
    } else {
      this.addImportClassValidatior("IsOptional")
      this.annotations.push("@IsOptional()")
    }
  }

  public addAnnotationIsEnum(params: string): void {
    this.addImportClassValidatior("IsEnum")
    this.annotations.push(`@IsEnum(${params})`)
  }

  public addAnnotationIsString(): void {
    this.addImportClassValidatior("IsString")
    this.annotations.push(`@IsString()`)
  }

  public addAnnotationIsNumber(): void {
    this.addImportClassValidatior("IsNumber")
    this.annotations.push(`@IsNumber()`)
  }

  public addAnnotationIsInteger(): void {
    this.addImportClassValidatior("IsInt")
    this.annotations.push(`@IsInt()`)
  }

  public addAnnotationIsBoolean(): void {
    this.addImportClassValidatior("IsBoolean")
    this.annotations.push(`@IsBoolean()`)
  }

  public addAnnotationLength(min: number, max: number): void {
    this.addImportClassValidatior("Length")
    this.annotations.push(`@Length(${min}, ${max})`)
  }

  public toString(): string {
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