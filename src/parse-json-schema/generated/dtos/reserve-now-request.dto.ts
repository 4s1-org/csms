// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ConnectorEnum } from '../enums/connector.enum'
import { IdTokenDto } from './id-token.dto'
import { IdTokenDto } from './id-token.dto'

export class ReserveNowRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public id: number

  /**
   * Date and time at which the reservation expires.
   */
  @ApiProperty()
  public expiryDateTime: string

  @IsOptional()
  @ApiProperty()
  public connectorType: ConnectorEnum

  @ApiProperty()
  public idToken: IdTokenDto

  @IsOptional()
  @ApiProperty()
  public evseId: number

  @IsOptional()
  @ApiProperty()
  public groupIdToken: IdTokenDto
}
