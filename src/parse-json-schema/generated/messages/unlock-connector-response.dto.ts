// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../dtos/custom-data.dto'
import { StatusInfoDto } from '../dtos/status-info.dto'
import { UnlockStatusEnum } from '../enums/unlock-status.enum'

export class UnlockConnectorResponseDto {
  public constructor(
    status: UnlockStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(UnlockStatusEnum)
  public status: UnlockStatusEnum

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
