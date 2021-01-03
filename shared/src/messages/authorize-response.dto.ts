// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IResponseMessage } from '../i-response-message'
import { AuthorizeCertificateStatusEnum } from '../enumerations/authorize-certificate-status.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { IdTokenInfoDto } from '../datatypes/id-token-info.dto'

export class AuthorizeResponseDto implements IResponseMessage {
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
