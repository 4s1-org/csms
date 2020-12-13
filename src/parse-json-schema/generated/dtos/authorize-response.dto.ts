// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { IdTokenInfoDto } from './id-token-info.dto'
import { AuthorizeCertificateStatusEnum } from '../enums/authorize-certificate-status.enum'

export class AuthorizeResponseDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  public idTokenInfo!: IdTokenInfoDto

  @ApiProperty()
  @IsOptional()
  public certificateStatus!: AuthorizeCertificateStatusEnum
}
