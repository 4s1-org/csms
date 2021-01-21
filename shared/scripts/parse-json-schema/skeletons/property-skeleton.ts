import { SkeletonBase } from './skeleton-base'

export class PropertySkeleton extends SkeletonBase {
  private _annotationsClassValidator: string[] = []
  private _annotationsClassTransformer: string[] = []
  private _type: string | undefined
  private _defaultValue: string | undefined

  public constructor(name: string, public readonly isRequired: boolean) {
    super(name)

    if (isRequired) {
      this.addImportClassValidatior('IsNotEmpty')
      this._annotationsClassValidator.push('@IsNotEmpty()')
    } else {
      this.addImportClassValidatior('IsOptional')
      this._annotationsClassValidator.push('@IsOptional()')
    }
  }

  public get type(): string | undefined {
    return this._type
  }

  private appendDefaultArrayAnnotations(): void {
    this.addImportClassValidatior('IsArray')
    this._annotationsClassValidator.push(`@IsArray()`)

    this.addImportClassValidatior('ArrayNotEmpty')
    this._annotationsClassValidator.push(`@ArrayNotEmpty()`)

    this.addImportClassValidatior('ValidateNested')
    this._annotationsClassValidator.push(`@ValidateNested({ each: true })`)
  }

  public setEnumerationType(value: string, suffix: 'Enum'): void {
    this.addImportClassValidatior('IsEnum')
    this._annotationsClassValidator.push(`@IsEnum(${value}${suffix})`)
    this._type = value + suffix
  }

  public setStringType(): void {
    this.addImportClassValidatior('IsString')
    this._annotationsClassValidator.push(`@IsString()`)
    this._type = 'string'
  }

  public setStringArrayType(): void {
    this.appendDefaultArrayAnnotations()
    this._type = 'string[]'
  }

  public setNumberType(): void {
    this.addImportClassValidatior('IsNumber')
    this._annotationsClassValidator.push(`@IsNumber()`)
    this._type = 'number'
  }

  public setIntegerType(): void {
    this.addImportClassValidatior('IsInt')
    this._annotationsClassValidator.push(`@IsInt()`)
    this._type = 'number'
  }

  public setIntegerArrayType(): void {
    this.appendDefaultArrayAnnotations()
    this._type = 'number[]'
  }

  public setCustomType(value: string, suffix: 'Dto' | 'Enum'): void {
    if (suffix !== 'Enum') {
      this.addImportClassTransformer('Type')
      this._annotationsClassTransformer.push(`@Type(() => ${value}${suffix})`)
    }
    this.addImportClassValidatior('ValidateNested')
    this._annotationsClassValidator.push(`@ValidateNested()`)
    this._type = value + suffix
  }

  public setCustomArrayType(value: string, suffix: 'Dto' | 'Enum'): void {
    if (suffix !== 'Enum') {
      this.addImportClassTransformer('Type')
      this._annotationsClassTransformer.push(`@Type(() => ${value}${suffix})`)
    }
    this.appendDefaultArrayAnnotations()
    this._type = `${value}${suffix}[]`
  }

  public setAnyType(): void {
    this._type = `any`
  }

  public setBooleanType(): void {
    this.addImportClassValidatior('IsBoolean')
    this._annotationsClassValidator.push(`@IsBoolean()`)
    this._type = 'boolean'
  }

  public appendMaxLengthAnnotation(value: number): void {
    this.addImportClassValidatior('MaxLength')
    this._annotationsClassValidator.push(`@MaxLength(${value})`)
  }

  public appendMinimumAnnotation(value: number): void {
    this._annotationsClassValidator.push(`// setMinimum: ${value}`)
  }

  public appendMaximumAnnotation(value: number): void {
    this._annotationsClassValidator.push(`// setMaximum: ${value}`)
  }

  public setDateTimeType(): void {
    this.addImportClassValidatior('IsDateString')
    this._annotationsClassValidator.push(`@IsDateString()`)
    this._type = 'string'
  }

  public setDefaultValue(value: string): void {
    this._defaultValue = value
  }

  public appendMinItemsAnnotation(value: number): void {
    this.addImportClassValidatior('ArrayMinSize')
    this._annotationsClassValidator.push(`@ArrayMinSize(${value})`)
  }

  public appendMaxItemsAnnotation(value: number): void {
    this.addImportClassValidatior('ArrayMaxSize')
    this._annotationsClassValidator.push(`@ArrayMaxSize(${value})`)
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

    // class-validator deaktiviert, weil ich JSON-Schema nutze (#44).
    // for (const annotation of this._annotationsClassValidator) {
    //   result.push(`  ${annotation}`)
    // }
    for (const annotation of this._annotationsClassTransformer) {
      result.push(`  ${annotation}`)
    }

    let defaultValueText = ''
    if (this._defaultValue !== undefined) {
      defaultValueText = ` // DEFAULT VALUE: ${this._defaultValue}`
    }

    result.push(`  public ${this.name}${this.isRequired ? '' : '!'}: ${this._type}${defaultValueText}`)

    return result
  }
}
