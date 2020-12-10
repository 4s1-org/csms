// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { GetCertificateStatusEnum } from '../enums/get-certificate-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class GetCertificateStatusResponseDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public status: GetCertificateStatusEnum

  @IsOptional()
  @ApiProperty()
  public statusInfo: StatusInfoDto

  /**
   * OCSPResponse class as defined in <<ref-ocpp_security_24, IETF RFC 6960>>. DER encoded (as defined in &lt;&lt;ref-ocpp_security_24, IETF RFC 6960&gt;&gt;), and then base64 encoded. MAY only be omitted when status is not Accepted.
   */
  @IsOptional()
  @Length(0, 5500)
  @ApiProperty()
  public ocspResult: string
}
