// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IResponseMessage } from '../i-response-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { CustomerInformationStatusEnum } from '../enumerations/customer-information-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class CustomerInformationResponseDto implements IResponseMessage {
  public constructor(
    status: CustomerInformationStatusEnum,
  ) {
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(CustomerInformationStatusEnum)
  public status: CustomerInformationStatusEnum

  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
