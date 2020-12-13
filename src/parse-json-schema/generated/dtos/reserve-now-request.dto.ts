// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsString, IsEnum } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ConnectorEnum } from '../enums/connector.enum'
import { IdTokenDto } from './id-token.dto'

export class ReserveNowRequestDto {
  public constructor (
    id: number,
    expiryDateTime: string,
    idToken: IdTokenDto
  ) {
    this.id = id
    this.expiryDateTime = expiryDateTime
    this.idToken = idToken
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public id: number

  /**
   * Date and time at which the reservation expires.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public expiryDateTime: string

  @ApiProperty()
  @IsOptional()
  @IsEnum(ConnectorEnum)
  public connectorType!: ConnectorEnum

  @ApiProperty()
  @IsNotEmpty()
  public idToken: IdTokenDto

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public evseId!: number

  @ApiProperty()
  @IsOptional()
  public groupIdToken!: IdTokenDto
}
