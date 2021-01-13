// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMinSize, ArrayNotEmpty, IsArray, IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { AuthorizationDataDto } from '../datatypes/authorization-data.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { UpdateEnum } from '../enumerations/update.enum'

export class SendLocalListRequestDto implements IRequestMessage {
  public constructor(
    versionNumber: number,
    updateType: UpdateEnum,
  ) {
    this.versionNumber = versionNumber
    this.updateType = updateType
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsOptional()
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public localAuthorizationList!: AuthorizationDataDto[]

  /**
   * In case of a full update this is the version number of the full list. In case of a differential update it is the version number of the list after the update has been applied.
   */
  @IsNotEmpty()
  @IsInt()
  public versionNumber: number

  @IsNotEmpty()
  @IsEnum(UpdateEnum)
  public updateType: UpdateEnum
}
