// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'
import { DataEnum } from '../enumerations/data.enum'

/**
 * Fixed read-only parameters of a variable.
 */
export class VariableCharacteristicsDto extends DatatypeBaseDto {
  public constructor(
    dataType: DataEnum,
    supportsMonitoring: boolean,
  ) {
    super()
    this.dataType = dataType
    this.supportsMonitoring = supportsMonitoring
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Unit of the variable. When the transmitted value has a unit, this field SHALL be included.
   */
  @IsOptional()
  @MaxLength(16)
  @IsString()
  public unit!: string

  @IsNotEmpty()
  @IsEnum(DataEnum)
  public dataType: DataEnum

  /**
   * Minimum possible value of this variable.
   */
  @IsOptional()
  @IsNumber()
  public minLimit!: number

  /**
   * Maximum possible value of this variable. When the datatype of this Variable is String, OptionList, SequenceList or MemberList, this field defines the maximum length of the (CSV) string.
   */
  @IsOptional()
  @IsNumber()
  public maxLimit!: number

  /**
   * Allowed values when variable is Option/Member/SequenceList. 
   * 
   * * OptionList: The (Actual) Variable value must be a single value from the reported (CSV) enumeration list.
   * 
   * * MemberList: The (Actual) Variable value  may be an (unordered) (sub-)set of the reported (CSV) valid values list.
   * 
   * * SequenceList: The (Actual) Variable value  may be an ordered (priority, etc)  (sub-)set of the reported (CSV) valid values.
   * 
   * This is a comma separated list.
   * 
   * The Configuration Variable <<configkey-configuration-value-size,ConfigurationValueSize>> can be used to limit SetVariableData.attributeValue and VariableCharacteristics.valueList. The max size of these values will always remain equal.
   */
  @IsOptional()
  @MaxLength(1000)
  @IsString()
  public valuesList!: string

  /**
   * Flag indicating if this variable supports monitoring.
   */
  @IsNotEmpty()
  @IsBoolean()
  public supportsMonitoring: boolean
}
