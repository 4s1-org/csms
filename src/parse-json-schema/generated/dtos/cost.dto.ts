import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { CostKindEnumDto } from './cost-kind-enum.dto'

/**
 * Cost
urn:x-oca:ocpp:uid:2:233258
 */
export class CostDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public costKind: CostKindEnumDto

  @ApiProperty()
  public amount: number

  @IsOptional()
  @ApiProperty()
  public amountMultiplier: number
}
