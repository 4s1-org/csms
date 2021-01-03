// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { EvseDto } from '../datatypes/evse.dto'
import { OperationalStatusEnum } from '../enumerations/operational-status.enum'

/**
 * This contains the field definition of the ChangeAvailabilityRequest PDU sent by the CSMS to the Charging Station.
 */
export class ChangeAvailabilityRequestDto implements IRequestMessage {
  public constructor(
    operationalStatus: OperationalStatusEnum,
  ) {
    this.operationalStatus = operationalStatus
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Contains Id’s to designate a specific EVSE/connector by index numbers. When omitted, the message refers to the Charging Station as a whole.
   * Required: false
   * EVSEType
   * 0..1
   */
  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public evse!: EvseDto

  /**
   * This contains the type of availability change that the Charging Station should perform.
   * Required: true
   * OperationalStatusEnumType
   * 1..1
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(OperationalStatusEnum)
  public operationalStatus: OperationalStatusEnum
}
