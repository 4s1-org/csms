// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { CustomerInformationStatusEnum } from '../enumerations/customer-information-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class CustomerInformationResponseDto extends ResponseBaseDto {
  public constructor(
    status: CustomerInformationStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: CustomerInformationStatusEnum

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
