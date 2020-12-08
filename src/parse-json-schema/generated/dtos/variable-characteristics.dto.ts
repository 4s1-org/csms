import { IsOptional, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { DataEnumDto } from './data-enum.dto'

/**
 * Fixed read-only parameters of a variable.
 */
export class VariableCharacteristicsDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  /**
   * Unit of the variable. When the transmitted value has a unit, this field SHALL be included.
   */
  @IsOptional()
  @Length(0, 16)
  @ApiProperty()
  public unit: string

  @ApiProperty()
  public dataType: DataEnumDto

  @IsOptional()
  @ApiProperty()
  public minLimit: number

  @IsOptional()
  @ApiProperty()
  public maxLimit: number

  /**
   * Allowed values when variable is Option/Member/SequenceList. 

* OptionList: The (Actual) Variable value must be a single value from the reported (CSV) enumeration list.

* MemberList: The (Actual) Variable value  may be an (unordered) (sub-)set of the reported (CSV) valid values list.

* SequenceList: The (Actual) Variable value  may be an ordered (priority, etc)  (sub-)set of the reported (CSV) valid values.

This is a comma separated list.

The Configuration Variable &lt;&lt;configkey-configuration-value-size,ConfigurationValueSize&gt;&gt; can be used to limit SetVariableData.attributeValue and VariableCharacteristics.valueList. The max size of these values will always remain equal.
   */
  @IsOptional()
  @Length(0, 1000)
  @ApiProperty()
  public valuesList: string

  @ApiProperty()
  public supportsMonitoring: boolean
}
