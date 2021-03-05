// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CertificateActionEnum } from '../enumerations/certificate-action.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class Get15118EvCertificateRequestDto extends RequestBaseDto {
  @Exclude()
  private _className: "Get15118EvCertificateRequestDto" = "Get15118EvCertificateRequestDto"

  public constructor(
    iso15118SchemaVersion: string,
    action: CertificateActionEnum,
    exiRequest: string,
  ) {
    super()
    this.iso15118SchemaVersion = iso15118SchemaVersion
    this.action = action
    this.exiRequest = exiRequest
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Schema version currently used for the 15118 session between EV and Charging Station. Needed for parsing of the EXI stream by the CSMS.
   */
  public iso15118SchemaVersion: string

  public action: CertificateActionEnum

  /**
   * Raw CertificateInstallationReq request from EV, Base64 encoded.
   */
  public exiRequest: string
}
