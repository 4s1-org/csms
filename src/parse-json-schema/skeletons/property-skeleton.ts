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
    return this._type
  }

  private setDefaultArrayAnnotations(): void {
    this.addImportClassValidatior("IsArray")
    this._annotations.push(`@IsArray()`)

    this.addImportClassValidatior("ArrayNotEmpty")
    this._annotations.push(`@ArrayNotEmpty()`)

    this.addImportClassValidatior("ValidateNested")
    this._annotations.push(`@ValidateNested({ each: true })`)
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

  public setIsStringArray(): void {
    this.setDefaultArrayAnnotations()
    this._type = "string[]"
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

  public setIsIntegerArray(): void {
    this.setDefaultArrayAnnotations()
    this._type = "number[]"
  }

  public setIsCustomType(value: string): void {
    this.addImportClassValidatior("ValidateNested")
    this._annotations.push(`@ValidateNested()`)
    this._type = value
  }

  public setIsCustomArrayType(value: string): void {
    this.setDefaultArrayAnnotations()
    this._type = `${value}[]`
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

  public setMinItems(value: number): void {
    this.addImportClassValidatior("ArrayMinSize")
    this._annotations.push(`@ArrayMinSize(${value})`)
  }

  public setMaxItems(value: number): void {
    this.addImportClassValidatior("ArrayMaxSize")
    this._annotations.push(`@ArrayMaxSize(${value})`)
  }

  /**
   * Hier sollten keine Kommentare aus den JSON verwendet werden.
   * Besser sind die aus der PDF.
   * @deprecated
   */
  public commentToString(): string[] {
    const result: string[] = []
    for (const line of this.getComment()) {
      result.push(`  ${line}`)
    }
    return result
  }

  public toString(): string[] {
    const result: string[] = []
    for (const annotation of this._annotations) {
      result.push(`  ${annotation}`)
    }
    result.push(`  public ${this.name}${this.isRequired ? "" : "!"}: ${this._type}`)

    return result
  }
}
