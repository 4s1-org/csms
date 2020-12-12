// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { IdTokenInfoDto } from './id-token-info.dto'
import { AuthorizeCertificateStatusEnum } from '../enums/authorize-certificate-status.enum'

export class AuthorizeResponseDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public idTokenInfo!: IdTokenInfoDto

  @IsOptional()
  @ApiProperty()
  public certificateStatus!: AuthorizeCertificateStatusEnum
}
