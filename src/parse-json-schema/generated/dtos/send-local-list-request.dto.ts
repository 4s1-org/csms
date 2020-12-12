// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { UpdateEnum } from '../enums/update.enum'

export class SendLocalListRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public localAuthorizationList!: any

  @IsNotEmpty()
  @ApiProperty()
  public versionNumber!: number

  @IsNotEmpty()
  @ApiProperty()
  public updateType!: UpdateEnum
}
