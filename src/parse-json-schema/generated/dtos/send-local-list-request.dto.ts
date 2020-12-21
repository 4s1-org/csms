// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsInt, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { AuthorizationDto } from './authorization.dto'
import { UpdateEnum } from '../enums/update.enum'

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
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  public localAuthorizationList!: AuthorizationDto[]

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
