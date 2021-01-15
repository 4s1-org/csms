// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMinSize, ArrayNotEmpty, IsArray, IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { PublishFirmwareStatusEnum } from '../enumerations/publish-firmware-status.enum'

export class PublishFirmwareStatusNotificationRequestDto extends RequestBaseDto {
  public constructor(
    status: PublishFirmwareStatusEnum,
  ) {
    super()
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(PublishFirmwareStatusEnum)
  public status: PublishFirmwareStatusEnum

  /**
   * Required if status is Published. Can be multiple URI’s, if the Local Controller supports e.g. HTTP, HTTPS, and FTP.
   */
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
  @IsOptional()
  @IsInt()
  public requestId!: number
}
