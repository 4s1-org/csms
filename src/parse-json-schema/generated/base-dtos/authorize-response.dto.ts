// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { AuthorizeCertificateStatusEnum } from '../enums/authorize-certificate-status.enum'
import { CustomDataDto } from '../dtos/custom-data.dto'
import { IdTokenInfoDto } from '../dtos/id-token-info.dto'

export class AuthorizeResponseDto {
  public constructor(
    idTokenInfo: IdTokenInfoDto,
  ) {
    this.idTokenInfo = idTokenInfo
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  public idTokenInfo: IdTokenInfoDto

  @ApiProperty()
  @IsOptional()
  @IsEnum(AuthorizeCertificateStatusEnum)
  public certificateStatus!: AuthorizeCertificateStatusEnum
}
