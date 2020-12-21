// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsString, IsEnum, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { AuthorizationStatusEnum } from '../enums/authorization-status.enum'
import { IdTokenDto } from './id-token.dto'
import { MessageContentDto } from './message-content.dto'

/**
 * ID_ Token
urn:x-oca:ocpp:uid:2:233247
Contains status information about an identifier.
It is advised to not stop charging for a token that expires during charging, as ExpiryDate is only used for caching purposes. If ExpiryDate is not given, the status has no end date.
 */
export class IdTokenInfoDto {
  public constructor(
    status: AuthorizationStatusEnum
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(AuthorizationStatusEnum)
  public status: AuthorizationStatusEnum

  /**
   * ID_ Token. Expiry. Date_ Time
urn:x-oca:ocpp:uid:1:569373
Date and Time after which the token must be considered invalid.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  public cacheExpiryDateTime!: string

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public chargingPriority!: number

  /**
   * ID_ Token. Language1. Language_ Code
urn:x-oca:ocpp:uid:1:569374
Preferred user interface language of identifier user. Contains a language code as defined in <<ref-RFC5646,[RFC5646]>>.
   */
  @ApiProperty()
  @IsOptional()
  @Length(0, 8)
  @IsString()
  public language1!: string

  @ApiProperty()
  @IsOptional()
  public evseId!: any

  @ApiProperty()
  @IsOptional()
  public groupIdToken!: IdTokenDto

  /**
   * ID_ Token. Language2. Language_ Code
urn:x-oca:ocpp:uid:1:569375
Second preferred user interface language of identifier user. Don’t use when language1 is omitted, has to be different from language1. Contains a language code as defined in <<ref-RFC5646,[RFC5646]>>.
   */
  @ApiProperty()
  @IsOptional()
  @Length(0, 8)
  @IsString()
  public language2!: string

  @ApiProperty()
  @IsOptional()
  public personalMessage!: MessageContentDto
}
