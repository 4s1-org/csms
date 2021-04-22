// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { GetCertificateIdUseEnum } from '../enumerations/get-certificate-id-use.enum'

export class GetInstalledCertificateIdsRequestDto extends RequestBaseDto {
  @Exclude()
  private _className: 'GetInstalledCertificateIdsRequestDto' = 'GetInstalledCertificateIdsRequestDto'

  public constructor() {
    super()
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Indicates the type of certificates requested. When omitted, all certificate types are requested.
   */
  public certificateType!: GetCertificateIdUseEnum[]
}
