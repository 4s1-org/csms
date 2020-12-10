// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class NotifyCustomerInformationRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  /**
   * (Part of) the requested data. No format specified in which the data is returned. Should be human readable.
   */
  @Length(0, 512)
  @ApiProperty()
  public data: string

  @IsOptional()
  @ApiProperty()
  public tbc: boolean

  @ApiProperty()
  public seqNo: number

  /**
   * Timestamp of the moment this message was generated at the Charging Station.
   */
  @ApiProperty()
  public generatedAt: string

  @ApiProperty()
  public requestId: number
}
