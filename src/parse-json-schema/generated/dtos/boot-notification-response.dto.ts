// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { RegistrationStatusEnum } from '../enums/registration-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class BootNotificationResponseDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  /**
   * This contains the CSMS’s current time.
   */
  @ApiProperty()
  public currentTime: string

  @ApiProperty()
  public interval: number

  @ApiProperty()
  public status: RegistrationStatusEnum

  @IsOptional()
  @ApiProperty()
  public statusInfo: StatusInfoDto
}
