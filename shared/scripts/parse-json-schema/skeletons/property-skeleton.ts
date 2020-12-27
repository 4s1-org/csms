import { SkeletonBase } from "./skeleton-base"

export class PropertySkeleton extends SkeletonBase {
  private _annotations: string[] = []
  private _type: string | undefined
  private _defaultValue: string | undefined

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

  private appendDefaultArrayAnnotations(): void {
    this.addImportClassValidatior("IsArray")
    this._annotations.push(`@IsArray()`)

    this.addImportClassValidatior("ArrayNotEmpty")
    this._annotations.push(`@ArrayNotEmpty()`)

    this.addImportClassValidatior("ValidateNested")
    this._annotations.push(`@ValidateNested({ each: true })`)
  }

  public setEnumerationType(value: string, suffix: "Enum"): void {
    this.addImportClassValidatior("IsEnum")
    this._annotations.push(`@IsEnum(${value + suffix})`)
    this._type = value + suffix
  }

  public setStringType(): void {
    this.addImportClassValidatior("IsString")
    this._annotations.push(`@IsString()`)
    this._type = "string"
  }

  public setStringArrayType(): void {
    this.appendDefaultArrayAnnotations()
    this._type = "string[]"
  }

  public setNumberType(): void {
    this.addImportClassValidatior("IsNumber")
    this._annotations.push(`@IsNumber()`)
    this._type = "number"
  }

  public setIntegerType(): void {
    this.addImportClassValidatior("IsInt")
    this._annotations.push(`@IsInt()`)
    this._type = "number"
  }

  public setIntegerArrayType(): void {
    this.appendDefaultArrayAnnotations()
    this._type = "number[]"
  }

  public setCustomType(value: string, suffix: "Dto" | "Enum"): void {
    this.addImportClassValidatior("ValidateNested")
    this._annotations.push(`@ValidateNested()`)
    this._type = value + suffix
  }

  public setCustomArrayType(value: string, suffix: "Dto" | "Enum"): void {
    this.appendDefaultArrayAnnotations()
    this._type = `${value + suffix}[]`
  }

  public setAnyType(): void {
    this._type = `any`
  }

  public setBooleanType(): void {
    this.addImportClassValidatior("IsBoolean")
    this._annotations.push(`@IsBoolean()`)
    this._type = "boolean"
  }

  public appendMaxLengthAnnotation(value: number): void {
    this.addImportClassValidatior("MaxLength")
    this._annotations.push(`@MaxLength(${value})`)
  }

  public appendMinimumAnnotation(value: number): void {
    this._annotations.push(`// setMinimum: ${value}`)
  }

  public appendMaximumAnnotation(value: number): void {
    this._annotations.push(`// setMaximum: ${value}`)
  }

  public setDateTimeType(): void {
    this.addImportClassValidatior("IsDateString")
    this._annotations.push(`@IsDateString()`)
    this._type = "string"
  }

  public setDefaultValue(value: string): void {
    this._defaultValue = value
  }

  public appendMinItemsAnnotation(value: number): void {
    this.addImportClassValidatior("ArrayMinSize")
    this._annotations.push(`@ArrayMinSize(${value})`)
  }

  public appendMaxItemsAnnotation(value: number): void {
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

    let defaultValueText = ""
    if (this._defaultValue !== undefined) {
      defaultValueText = ` // DEFAULT VALUE: ${this._defaultValue}`
    }

    result.push(`  public ${this.name}${this.isRequired ? "" : "!"}: ${this._type}${defaultValueText}`)

    return result
  }
}
