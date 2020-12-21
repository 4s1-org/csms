// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { IdTokenDto } from './id-token.dto'
import { ChargingProfileDto } from './charging-profile.dto'

export class RequestStartTransactionRequestDto {
  public constructor(
    idToken: IdTokenDto,
    remoteStartId: number
  ) {
    this.idToken = idToken
    this.remoteStartId = remoteStartId
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public evseId!: number

  @ApiProperty()
  @IsOptional()
  public groupIdToken!: IdTokenDto

  @ApiProperty()
  @IsNotEmpty()
  public idToken: IdTokenDto

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public remoteStartId: number

  @ApiProperty()
  @IsOptional()
  public chargingProfile!: ChargingProfileDto
}
