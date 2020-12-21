import { SkeletonBase } from "./skeleton-base"

export class PropertySkeleton extends SkeletonBase {
  private _annotations: string[] = []
  private _type: string | undefined

  public constructor(
    name: string,
    public readonly isRequired: boolean
  ) {
    super(name)

    this._annotations.push(`@ApiProperty()`)

    if (isRequired) {
      this.addImportClassValidatior("IsNotEmpty")
      this._annotations.push("@IsNotEmpty()")
    } else {
      this.addImportClassValidatior("IsOptional")
      this._annotations.push("@IsOptional()")
    }
  }

  public get type(): string | undefined {
    return this._type;
  }

  public setIsEnum(value: string): void {
    this.addImportClassValidatior("IsEnum")
    this._annotations.push(`@IsEnum(${value})`)
    this._type = value
  }

  public setIsString(): void {
    this.addImportClassValidatior("IsString")
    this._annotations.push(`@IsString()`)
    this._type = "string"
  }

  public setIsNumber(): void {
    this.addImportClassValidatior("IsNumber")
    this._annotations.push(`@IsNumber()`)
    this._type = "number"
  }

  public setIsInteger(): void {
    this.addImportClassValidatior("IsInt")
    this._annotations.push(`@IsInt()`)
    this._type = "number"
  }

  public setIsCustomType(value: string): void {
    this._type = value
  }

  /**
   * @deprecated Don't use
   */
  public setIsAny(): void {
    this._type = "any"
  }

  public setIsBoolean(): void {
    this.addImportClassValidatior("IsBoolean")
    this._annotations.push(`@IsBoolean()`)
    this._type = "boolean"
  }

  public setMaxLength(value: number): void {
    this.addImportClassValidatior("MaxLength")
    this._annotations.push(`@MaxLength(${value})`)
  }

  public setMinimum(value: number): void {
    this._annotations.push(`// setMinimum: ${value}`)
  }

  public setMaximum(value: number): void {
    this._annotations.push(`// setMaximum: ${value}`)
  }

  public setFormat(value: string): void {
    this._annotations.push(`// setFormat: ${value}`)
  }

  public setDefault(value: string): void {
    this._annotations.push(`// setDefault: ${value}`)
  }

  public setIsArray(value: string): void {
    this.addImportClassValidatior("IsArray")
    this._annotations.push(`@IsArray()`)
    this._type = `${value}[]`
  }

  public setMinItems(value: number): void {
    this._annotations.push(`// MinItems: ${value}`)
  }

  public setMaxItems(value: number): void {
    this._annotations.push(`// MaxItems: ${value}`)
  }

  public toString(): string[] {
    const result: string[] = []
    for (const line of this.getComment()) {
      result.push(`  ${line}`)
    }
    for (const annotation of this._annotations) {
      result.push(`  ${annotation}`)
    }
    result.push(`  public ${this.name}${this.isRequired ? "" : "!"}: ${this._type}`)

    return result
  }
}