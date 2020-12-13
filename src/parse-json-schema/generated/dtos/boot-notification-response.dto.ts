// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsString, IsEnum } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { RegistrationStatusEnum } from '../enums/registration-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class BootNotificationResponseDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * This contains the CSMS’s current time.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public currentTime!: string

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public interval!: number

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(RegistrationStatusEnum)
  public status!: RegistrationStatusEnum

  @ApiProperty()
  @IsOptional()
  public statusInfo!: StatusInfoDto
}
