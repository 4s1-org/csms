import { IsOptional, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingStateEnumDto } from './charging-state-enum.dto'
import { ReasonEnumDto } from './reason-enum.dto'

/**
 * Transaction
urn:x-oca:ocpp:uid:2:233318
 */
export class TransactionDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  /**
   * This contains the Id of the transaction.
   */
  @Length(0, 36)
  @ApiProperty()
  public transactionId: string

  @IsOptional()
  @ApiProperty()
  public chargingState: ChargingStateEnumDto

  @IsOptional()
  @ApiProperty()
  public timeSpentCharging: number

  @IsOptional()
  @ApiProperty()
  public stoppedReason: ReasonEnumDto

  @IsOptional()
  @ApiProperty()
  public remoteStartId: number
}
