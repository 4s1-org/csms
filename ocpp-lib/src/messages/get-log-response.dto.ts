// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { LogStatusEnum } from '../enumerations/log-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class GetLogResponseDto extends ResponseBaseDto {
  @Exclude()
  private _className: "GetLogResponseDto" = "GetLogResponseDto"

  public constructor(
    status: LogStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: LogStatusEnum

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto

  /**
   * This contains the name of the log file that will be uploaded. This field is not present when no logging information is available.
   */
  public filename!: string
}
