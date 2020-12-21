// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { RegistrationStatusEnum } from '../enums/registration-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class BootNotificationResponseDto {
  public constructor(
    currentTime: string,
    interval: number,
    status: RegistrationStatusEnum,
  ) {
    this.currentTime = currentTime
    this.interval = interval
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * This contains the CSMS’s current time.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public currentTime: string

  /**
   * When <<cmn_registrationstatusenumtype,Status>> is Accepted, this contains the heartbeat interval in seconds. If the CSMS returns something other than Accepted, the value of the interval field indicates the minimum wait time before sending a next BootNotification request.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public interval: number

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(RegistrationStatusEnum)
  public status: RegistrationStatusEnum

  @ApiProperty()
  @IsOptional()
  public statusInfo!: StatusInfoDto
}
