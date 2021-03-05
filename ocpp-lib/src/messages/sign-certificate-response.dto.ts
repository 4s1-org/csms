// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { GenericStatusEnum } from '../enumerations/generic-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class SignCertificateResponseDto extends ResponseBaseDto {
  @Exclude()
  private _className: "SignCertificateResponseDto" = "SignCertificateResponseDto"

  public constructor(
    status: GenericStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: GenericStatusEnum

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
