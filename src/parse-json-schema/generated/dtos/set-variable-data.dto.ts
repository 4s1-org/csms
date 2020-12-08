import { IsOptional, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { AttributeEnumDto } from './attribute-enum.dto'
import { ComponentDto } from './component.dto'
import { VariableDto } from './variable.dto'

export class SetVariableDataDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public attributeType: AttributeEnumDto

  /**
   * Value to be assigned to attribute of variable.

The Configuration Variable &lt;&lt;configkey-configuration-value-size,ConfigurationValueSize&gt;&gt; can be used to limit SetVariableData.attributeValue and VariableCharacteristics.valueList. The max size of these values will always remain equal.
   */
  @Length(0, 1000)
  @ApiProperty()
  public attributeValue: string

  @ApiProperty()
  public component: ComponentDto

  @ApiProperty()
  public variable: VariableDto
}
