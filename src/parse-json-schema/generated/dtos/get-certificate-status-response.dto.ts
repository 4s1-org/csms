// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsString, IsEnum, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { GetCertificateStatusEnum } from '../enums/get-certificate-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class GetCertificateStatusResponseDto {
  public constructor (
    status: GetCertificateStatusEnum
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(GetCertificateStatusEnum)
  public status: GetCertificateStatusEnum

  @ApiProperty()
  @IsOptional()
  public statusInfo!: StatusInfoDto

  /**
   * OCSPResponse class as defined in <<ref-ocpp_security_24, IETF RFC 6960>>. DER encoded (as defined in <<ref-ocpp_security_24, IETF RFC 6960>>), and then base64 encoded. MAY only be omitted when status is not Accepted.
   */
  @ApiProperty()
  @IsOptional()
  @Length(0, 5500)
  @IsString()
  public ocspResult!: string
}
