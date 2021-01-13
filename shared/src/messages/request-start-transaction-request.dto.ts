// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { ChargingProfileDto } from '../datatypes/charging-profile.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { IdTokenDto } from '../datatypes/id-token.dto'

export class RequestStartTransactionRequestDto implements IRequestMessage {
  public constructor(
    idToken: IdTokenDto,
    remoteStartId: number,
  ) {
    this.idToken = idToken
    this.remoteStartId = remoteStartId
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Number of the EVSE on which to start the transaction. EvseId SHALL be > 0
   */
  @IsOptional()
  @IsInt()
  public evseId!: number

  @IsOptional()
  @ValidateNested()
  public groupIdToken!: IdTokenDto

  @IsNotEmpty()
  @ValidateNested()
  public idToken: IdTokenDto

  /**
   * Id given by the server to this start request. The Charging Station might return this in the <<transactioneventrequest, TransactionEventRequest>>, letting the server know which transaction was started for this request. Use to start a transaction.
   */
  @IsNotEmpty()
  @IsInt()
  public remoteStartId: number

  @IsOptional()
  @ValidateNested()
  public chargingProfile!: ChargingProfileDto
}
