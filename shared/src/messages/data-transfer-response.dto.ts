// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IResponseMessage } from '../i-response-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { DataTransferStatusEnum } from '../enumerations/data-transfer-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class DataTransferResponseDto implements IResponseMessage {
  public constructor(
    status: DataTransferStatusEnum,
  ) {
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(DataTransferStatusEnum)
  public status: DataTransferStatusEnum

  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto

  /**
   * Data without specified length or format, in response to request.
   */
  @IsOptional()
  public data!: any
}
