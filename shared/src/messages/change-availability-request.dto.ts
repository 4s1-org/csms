// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { EvseDto } from '../datatypes/evse.dto'
import { OperationalStatusEnum } from '../enumerations/operational-status.enum'

/**
 * This contains the field definition of the ChangeAvailabilityRequest PDU sent by the CSMS to the Charging Station.
 */
export class ChangeAvailabilityRequestDto extends RequestBaseDto {
  public constructor(
    operationalStatus: OperationalStatusEnum,
  ) {
    super()
    this.operationalStatus = operationalStatus
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Contains Id’s to designate a specific EVSE/connector by index numbers. When omitted, the message refers to the Charging Station as a whole.
   * Required: false
   * EVSEType
   * 0..1
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => EvseDto)
  public evse!: EvseDto

  /**
   * This contains the type of availability change that the Charging Station should perform.
   * Required: true
   * OperationalStatusEnumType
   * 1..1
   */
  @IsNotEmpty()
  @IsEnum(OperationalStatusEnum)
  public operationalStatus: OperationalStatusEnum
}
