// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsEnum } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { UpdateEnum } from '../enums/update.enum'

export class SendLocalListRequestDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  public localAuthorizationList!: any

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public versionNumber!: number

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(UpdateEnum)
  public updateType!: UpdateEnum
}
