// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsDateString, IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { ConnectorEnum } from '../enumerations/connector.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { IdTokenDto } from '../datatypes/id-token.dto'

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
  @ValidateNested()
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
  @IsDateString()
  public expiryDateTime: string

  @ApiProperty()
  @IsOptional()
  @IsEnum(ConnectorEnum)
  public connectorType!: ConnectorEnum

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
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
  @ValidateNested()
  public groupIdToken!: IdTokenDto
}
