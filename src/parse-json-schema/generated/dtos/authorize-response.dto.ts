// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator'
import { AuthorizeCertificateStatusEnum } from '../enums/authorize-certificate-status.enum'
import { CustomDataDto } from './custom-data.dto'
import { IdTokenInfoDto } from './id-token-info.dto'

export class AuthorizeResponseDto {
  public constructor(
    idTokenInfo: IdTokenInfoDto,
  ) {
    this.idTokenInfo = idTokenInfo
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  public idTokenInfo: IdTokenInfoDto

  @ApiProperty()
  @IsOptional()
  @IsEnum(AuthorizeCertificateStatusEnum)
  public certificateStatus!: AuthorizeCertificateStatusEnum
}
