// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { DataTransferStatusEnum } from '../enums/data-transfer-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class DataTransferResponseDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public status!: DataTransferStatusEnum

  @IsOptional()
  @ApiProperty()
  public statusInfo!: StatusInfoDto

  /**
   * Data without specified length or format, in response to request.
   */
  @IsOptional()
  @ApiProperty()
  public data!: string
}
