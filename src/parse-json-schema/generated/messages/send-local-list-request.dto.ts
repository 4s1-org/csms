// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { ArrayMinSize, ArrayNotEmpty, IsArray, IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { AuthorizationDataDto } from '../types/authorization-data.dto'
import { CustomDataDto } from '../types/custom-data.dto'
import { UpdateEnum } from '../enumerations/update.enum'

export class SendLocalListRequestDto {
  public constructor(
    versionNumber: number,
    updateType: UpdateEnum,
  ) {
    this.versionNumber = versionNumber
    this.updateType = updateType
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public localAuthorizationList!: AuthorizationDataDto[]

  /**
   * In case of a full update this is the version number of the full list. In case of a differential update it is the version number of the list after the update has been applied.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public versionNumber: number

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(UpdateEnum)
  public updateType: UpdateEnum
}
