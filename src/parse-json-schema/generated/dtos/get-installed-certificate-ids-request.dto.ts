// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class GetInstalledCertificateIdsRequestDto {

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * Indicates the type of certificates requested. When omitted, all certificate types are requested.
   */
  @ApiProperty()
  @IsOptional()
  public certificateType!: any
}
