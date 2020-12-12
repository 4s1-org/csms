// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class NotifyCustomerInformationRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  /**
   * (Part of) the requested data. No format specified in which the data is returned. Should be human readable.
   */
  @IsNotEmpty()
  @Length(0, 512)
  @ApiProperty()
  public data!: string

  @IsOptional()
  @ApiProperty()
  public tbc!: boolean

  @IsNotEmpty()
  @ApiProperty()
  public seqNo!: number

  /**
   * Timestamp of the moment this message was generated at the Charging Station.
   */
  @IsNotEmpty()
  @ApiProperty()
  public generatedAt!: string

  @IsNotEmpty()
  @ApiProperty()
  public requestId!: number
}
