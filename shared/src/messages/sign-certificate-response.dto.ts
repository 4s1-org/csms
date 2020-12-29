// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { GenericStatusEnum } from '../enumerations/generic-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class SignCertificateResponseDto {
  public constructor(
    status: GenericStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(GenericStatusEnum)
  public status: GenericStatusEnum

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
