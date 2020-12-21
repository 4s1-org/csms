// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsEnum, IsInt, IsNotEmpty, IsOptional } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'
import { PublishFirmwareStatusEnum } from '../enums/publish-firmware-status.enum'

export class PublishFirmwareStatusNotificationRequestDto {
  public constructor(
    status: PublishFirmwareStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(PublishFirmwareStatusEnum)
  public status: PublishFirmwareStatusEnum

  /**
   * Required if status is Published. Can be multiple URI’s, if the Local Controller supports e.g. HTTP, HTTPS, and FTP.
   */
  @ApiProperty()
  @IsOptional()
  @IsArray()
  public location!: string[]

  /**
   * The request id that was
   * provided in the
   * PublishFirmwareRequest which
   * triggered this action.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public requestId!: number
}
