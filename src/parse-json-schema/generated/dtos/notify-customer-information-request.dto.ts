// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsString, IsBoolean, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class NotifyCustomerInformationRequestDto {
  public constructor (
    data: string,
    seqNo: number,
    generatedAt: string,
    requestId: number
  ) {
    this.data = data
    this.seqNo = seqNo
    this.generatedAt = generatedAt
    this.requestId = requestId
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * (Part of) the requested data. No format specified in which the data is returned. Should be human readable.
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 512)
  @IsString()
  public data: string

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  public tbc!: boolean

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public seqNo: number

  /**
   * Timestamp of the moment this message was generated at the Charging Station.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public generatedAt: string

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public requestId: number
}
