// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { ChargingProfileDto } from '../types/charging-profile.dto'
import { CustomDataDto } from '../types/custom-data.dto'
import { IdTokenDto } from '../types/id-token.dto'

export class RequestStartTransactionRequestDto {
  public constructor(
    idToken: IdTokenDto,
    remoteStartId: number,
  ) {
    this.idToken = idToken
    this.remoteStartId = remoteStartId
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Number of the EVSE on which to start the transaction. EvseId SHALL be > 0
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public evseId!: number

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public groupIdToken!: IdTokenDto

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  public idToken: IdTokenDto

  /**
   * Id given by the server to this start request. The Charging Station might return this in the <<transactioneventrequest, TransactionEventRequest>>, letting the server know which transaction was started for this request. Use to start a transaction.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public remoteStartId: number

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public chargingProfile!: ChargingProfileDto
}
