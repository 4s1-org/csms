import { IsOptional, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { AttributeEnumDto } from './attribute-enum.dto'
import { MutabilityEnumDto } from './mutability-enum.dto'

/**
 * Attribute data of a variable.
 */
export class VariableAttributeDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public type: AttributeEnumDto

  /**
   * Value of the attribute. May only be omitted when mutability is set to 'WriteOnly'.

The Configuration Variable &lt;&lt;configkey-reporting-value-size,ReportingValueSize&gt;&gt; can be used to limit GetVariableResult.attributeValue, VariableAttribute.value and EventData.actualValue. The max size of these values will always remain equal.
   */
  @IsOptional()
  @Length(0, 2500)
  @ApiProperty()
  public value: string

  @IsOptional()
  @ApiProperty()
  public mutability: MutabilityEnumDto

  @IsOptional()
  @ApiProperty()
  public persistent: boolean

  @IsOptional()
  @ApiProperty()
  public constant: boolean
}
