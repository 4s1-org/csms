// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { AttributeEnum } from '../enums/attribute.enum'
import { SetVariableStatusEnum } from '../enums/set-variable-status.enum'
import { StatusInfoDto } from './status-info.dto'
import { ComponentDto } from './component.dto'
import { VariableDto } from './variable.dto'

export class SetVariableResultDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public attributeType: AttributeEnum

  @ApiProperty()
  public attributeStatus: SetVariableStatusEnum

  @IsOptional()
  @ApiProperty()
  public attributeStatusInfo: StatusInfoDto

  @ApiProperty()
  public component: ComponentDto

  @ApiProperty()
  public variable: VariableDto
}
