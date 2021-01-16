// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { DataTransferStatusEnum } from '../enumerations/data-transfer-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class DataTransferResponseDto extends ResponseBaseDto {
  public constructor(
    status: DataTransferStatusEnum,
  ) {
    super()
    this.status = status
  }

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(DataTransferStatusEnum)
  public status: DataTransferStatusEnum

  @IsOptional()
  @Type(() => StatusInfoDto)
  @ValidateNested()
  public statusInfo!: StatusInfoDto

  /**
   * Data without specified length or format, in response to request.
   */
  @IsOptional()
  public data!: any
}
