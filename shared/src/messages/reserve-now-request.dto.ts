// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsDateString, IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { RequestBaseDto } from '../generated/request-base.dto'
import { ConnectorEnum } from '../enumerations/connector.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { IdTokenDto } from '../datatypes/id-token.dto'

export class ReserveNowRequestDto extends RequestBaseDto {
  public constructor(
    id: number,
    expiryDateTime: string,
    idToken: IdTokenDto,
  ) {
    super()
    this.id = id
    this.expiryDateTime = expiryDateTime
    this.idToken = idToken
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Id of reservation.
   */
  @IsNotEmpty()
  @IsInt()
  public id: number

  /**
   * Date and time at which the reservation expires.
   */
  @IsNotEmpty()
  @IsDateString()
  public expiryDateTime: string

  @IsOptional()
  @IsEnum(ConnectorEnum)
  public connectorType!: ConnectorEnum

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => IdTokenDto)
  public idToken: IdTokenDto

  /**
   * This contains ID of the evse to be reserved.
   */
  @IsOptional()
  @IsInt()
  public evseId!: number

  @IsOptional()
  @ValidateNested()
  @Type(() => IdTokenDto)
  public groupIdToken!: IdTokenDto
}
