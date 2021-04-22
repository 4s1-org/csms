// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { DeleteCertificateStatusEnum } from '../enumerations/delete-certificate-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class DeleteCertificateResponseDto extends ResponseBaseDto {
  @Exclude()
  private _className: 'DeleteCertificateResponseDto' = 'DeleteCertificateResponseDto'

  public constructor(
    status: DeleteCertificateStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: DeleteCertificateStatusEnum

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
