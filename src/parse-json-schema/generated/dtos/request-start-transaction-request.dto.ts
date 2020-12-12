// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { IdTokenDto } from './id-token.dto'
import { ChargingProfileDto } from './charging-profile.dto'

export class RequestStartTransactionRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public evseId!: number

  @IsOptional()
  @ApiProperty()
  public groupIdToken!: IdTokenDto

  @IsNotEmpty()
  @ApiProperty()
  public idToken!: IdTokenDto

  @IsNotEmpty()
  @ApiProperty()
  public remoteStartId!: number

  @IsOptional()
  @ApiProperty()
  public chargingProfile!: ChargingProfileDto
}
