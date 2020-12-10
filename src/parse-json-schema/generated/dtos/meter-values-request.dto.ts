// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * Request_ Body
urn:x-enexis:ecdm:uid:2:234744
 */
export class MeterValuesRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public evseId: number

  @ApiProperty()
  public meterValue: any
}
