// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { ConnectorEnum } from '../enums/connector.enum'
import { CustomDataDto } from './custom-data.dto'
import { IdTokenDto } from './id-token.dto'
import { IdTokenDto } from './id-token.dto'

export class ReserveNowRequestDto {
  public constructor(
    id: number,
    expiryDateTime: string,
    idToken: IdTokenDto,
  ) {
    this.id = id
    this.expiryDateTime = expiryDateTime
    this.idToken = idToken
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * Id of reservation.
   */
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

  /**
   * This contains ID of the evse to be reserved.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public evseId!: number

  @ApiProperty()
  @IsOptional()
  public groupIdToken!: IdTokenDto
}
