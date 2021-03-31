import { classToPlain } from 'class-transformer'
import { OcppRpcBaseDto } from './ocpp-rpc-base.dto'
import { OcppMessageTypeIdEnum } from './ocpp-message-type-id.enum'
import { OcppErrorCodeEnum } from './ocpp-error-code.enum'

export class OcppCallerrorDto extends OcppRpcBaseDto {
  constructor(messageId: string, errorCode: OcppErrorCodeEnum, errorDescription?: string, errorDetails?: unknown) {
    super(OcppMessageTypeIdEnum.Error, messageId)
    this.errorCode = errorCode
    this.errorDescription = errorDescription || ''
    this.errorDetails = errorDetails || {}
  }

  /** This field must contain a string from the RPC Framework Error Codes table. */
  public errorCode: OcppErrorCodeEnum

  /** Should be filled in if possible, otherwise a clear empty string "" */
  public errorDescription: string

  /** This JSON object describes error details in an undefined way. If there are no error details you MUST fill in an empty object {}. */
  public errorDetails: unknown

  public toMessageString(): string {
    return JSON.stringify([
      this.messageTypeId,
      this.messageId,
      this.errorCode,
      this.errorDescription,
      classToPlain(this.errorDetails),
    ])
  }
}
