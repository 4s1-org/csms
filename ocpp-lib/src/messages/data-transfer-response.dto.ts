// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { DataTransferStatusEnum } from '../enumerations/data-transfer-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class DataTransferResponseDto extends ResponseBaseDto {
  @Exclude()
  private _className: 'DataTransferResponseDto' = 'DataTransferResponseDto'

  public constructor(
    status: DataTransferStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: DataTransferStatusEnum

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto

  /**
   * Data without specified length or format, in response to request.
   */
  public data!: any
}
