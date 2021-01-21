// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { LogEnum } from '../enumerations/log.enum'
import { LogParametersDto } from '../datatypes/log-parameters.dto'

export class GetLogRequestDto extends RequestBaseDto {
  public constructor(
    log: LogParametersDto,
    logType: LogEnum,
    requestId: number,
  ) {
    super()
    this.log = log
    this.logType = logType
    this.requestId = requestId
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @Type(() => LogParametersDto)
  public log: LogParametersDto

  public logType: LogEnum

  /**
   * The Id of this request
   */
  public requestId: number

  /**
   * This specifies how many times the Charging Station must try to upload the log before giving up. If this field is not present, it is left to Charging Station to decide how many times it wants to retry.
   */
  public retries!: number

  /**
   * The interval in seconds after which a retry may be attempted. If this field is not present, it is left to Charging Station to decide how long to wait between attempts.
   */
  public retryInterval!: number
}
