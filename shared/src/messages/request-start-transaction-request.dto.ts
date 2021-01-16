// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { ChargingProfileDto } from '../datatypes/charging-profile.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { IdTokenDto } from '../datatypes/id-token.dto'

export class RequestStartTransactionRequestDto extends RequestBaseDto {
  public constructor(
    idToken: IdTokenDto,
    remoteStartId: number,
  ) {
    super()
    this.idToken = idToken
    this.remoteStartId = remoteStartId
  }

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Number of the EVSE on which to start the transaction. EvseId SHALL be > 0
   */
  @IsOptional()
  @IsInt()
  public evseId!: number

  @IsOptional()
  @Type(() => IdTokenDto)
  @ValidateNested()
  public groupIdToken!: IdTokenDto

  @IsNotEmpty()
  @Type(() => IdTokenDto)
  @ValidateNested()
  public idToken: IdTokenDto

  /**
   * Id given by the server to this start request. The Charging Station might return this in the <<transactioneventrequest, TransactionEventRequest>>, letting the server know which transaction was started for this request. Use to start a transaction.
   */
  @IsNotEmpty()
  @IsInt()
  public remoteStartId: number

  @IsOptional()
  @Type(() => ChargingProfileDto)
  @ValidateNested()
  public chargingProfile!: ChargingProfileDto
}
