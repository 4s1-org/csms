// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { GenericDeviceModelStatusEnum } from '../enumerations/generic-device-model-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

/**
 * This contains the field definition of the GetBaseReportResponse PDU sent by the Charging Station to the CSMS.
 */
export class GetBaseReportResponseDto extends ResponseBaseDto {
  public constructor(
    status: GenericDeviceModelStatusEnum,
  ) {
    super()
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * This indicates whether the Charging Station is able to accept this request.
   * Required: true
   * GenericDeviceModelStatusEnumType
   * 1..1
   */
  @IsNotEmpty()
  @IsEnum(GenericDeviceModelStatusEnum)
  public status: GenericDeviceModelStatusEnum

  /**
   * Detailed status information.
   * Required: false
   * StatusInfoType
   * 0..1
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
