// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { AuthorizeCertificateStatusEnum } from '../enumerations/authorize-certificate-status.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { IdTokenInfoDto } from '../datatypes/id-token-info.dto'

export class AuthorizeResponseDto extends ResponseBaseDto {
  public constructor(
    idTokenInfo: IdTokenInfoDto,
  ) {
    super()
    this.idTokenInfo = idTokenInfo
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => IdTokenInfoDto)
  public idTokenInfo: IdTokenInfoDto

  @IsOptional()
  @IsEnum(AuthorizeCertificateStatusEnum)
  public certificateStatus!: AuthorizeCertificateStatusEnum
}
