// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { StatusInfoDto } from '../datatypes/status-info.dto'
import { UnlockStatusEnum } from '../enumerations/unlock-status.enum'

export class UnlockConnectorResponseDto extends ResponseBaseDto {
  public constructor(
    status: UnlockStatusEnum,
  ) {
    super()
    this.status = status
  }

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(UnlockStatusEnum)
  public status: UnlockStatusEnum

  @IsOptional()
  @Type(() => StatusInfoDto)
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
