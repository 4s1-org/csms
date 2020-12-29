// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { GetCertificateStatusEnum } from '../enumerations/get-certificate-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class GetCertificateStatusResponseDto {
  public constructor(
    status: GetCertificateStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(GetCertificateStatusEnum)
  public status: GetCertificateStatusEnum

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto

  /**
   * OCSPResponse class as defined in <<ref-ocpp_security_24, IETF RFC 6960>>. DER encoded (as defined in <<ref-ocpp_security_24, IETF RFC 6960>>), and then base64 encoded. MAY only be omitted when status is not Accepted.
   */
  @ApiProperty()
  @IsOptional()
  @MaxLength(5500)
  @IsString()
  public ocspResult!: string
}
