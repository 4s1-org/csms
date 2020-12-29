// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { FirmwareStatusEnum } from '../enumerations/firmware-status.enum'

export class FirmwareStatusNotificationRequestDto {
  public constructor(
    status: FirmwareStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(FirmwareStatusEnum)
  public status: FirmwareStatusEnum

  /**
   * The request id that was provided in the
   * UpdateFirmwareRequest that started this firmware update.
   * This field is mandatory, unless the message was triggered by a TriggerMessageRequest AND there is no firmware update ongoing.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public requestId!: number
}
