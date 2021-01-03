// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { ArrayMinSize, ArrayNotEmpty, IsArray, IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { PublishFirmwareStatusEnum } from '../enumerations/publish-firmware-status.enum'

export class PublishFirmwareStatusNotificationRequestDto implements IRequestMessage {
  public constructor(
    status: PublishFirmwareStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
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
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
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
