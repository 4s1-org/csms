// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'
import { DataTransferStatusEnum } from '../enums/data-transfer-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class DataTransferResponseDto {
  public constructor(
    status: DataTransferStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(DataTransferStatusEnum)
  public status: DataTransferStatusEnum

  @ApiProperty()
  @IsOptional()
  public statusInfo!: StatusInfoDto

  /**
   * Data without specified length or format, in response to request.
   */
  @ApiProperty()
  @IsOptional()
  public data!: any
}
