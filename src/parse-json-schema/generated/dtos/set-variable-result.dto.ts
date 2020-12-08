import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { AttributeEnumDto } from './attribute-enum.dto'
import { SetVariableStatusEnumDto } from './set-variable-status-enum.dto'
import { StatusInfoDto } from './status-info.dto'
import { ComponentDto } from './component.dto'
import { VariableDto } from './variable.dto'

export class SetVariableResultDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public attributeType: AttributeEnumDto

  @ApiProperty()
  public attributeStatus: SetVariableStatusEnumDto

  @IsOptional()
  @ApiProperty()
  public attributeStatusInfo: StatusInfoDto

  @ApiProperty()
  public component: ComponentDto

  @ApiProperty()
  public variable: VariableDto
}
