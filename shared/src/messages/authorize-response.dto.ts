// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

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

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ValidateNested()
  public idTokenInfo: IdTokenInfoDto

  @IsOptional()
  @IsEnum(AuthorizeCertificateStatusEnum)
  public certificateStatus!: AuthorizeCertificateStatusEnum
}
