// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { GetCertificateStatusEnum } from '../enumerations/get-certificate-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class GetCertificateStatusResponseDto extends ResponseBaseDto {
  public constructor(
    status: GetCertificateStatusEnum,
  ) {
    super()
    this.status = status
  }

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(GetCertificateStatusEnum)
  public status: GetCertificateStatusEnum

  @IsOptional()
  @Type(() => StatusInfoDto)
  @ValidateNested()
  public statusInfo!: StatusInfoDto

  /**
   * OCSPResponse class as defined in <<ref-ocpp_security_24, IETF RFC 6960>>. DER encoded (as defined in <<ref-ocpp_security_24, IETF RFC 6960>>), and then base64 encoded. MAY only be omitted when status is not Accepted.
   */
  @IsOptional()
  @MaxLength(5500)
  @IsString()
  public ocspResult!: string
}
