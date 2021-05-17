import { classToPlain } from 'class-transformer'
import { RpcBaseDto } from './rpc-base.dto'
import { RpcMessageTypeIdEnum } from '../rpc-message-type-id.enum'
import { RpcErrorCodeEnum } from '../rpc-error-code.enum'

export class RpcCallerrorDto extends RpcBaseDto {
  constructor(messageId: string, errorCode: RpcErrorCodeEnum, errorDescription?: string, errorDetails?: unknown) {
    super(RpcMessageTypeIdEnum.Error, messageId)
    this.errorCode = errorCode
    this.errorDescription = errorDescription || ''
    this.errorDetails = errorDetails || {}
  }

  /** This field must contain a string from the RPC Framework Error Codes table. */
  public errorCode: RpcErrorCodeEnum

  /** Should be filled in if possible, otherwise a clear empty string "" */
  public errorDescription: string

  /** This JSON object describes error details in an undefined way. If there are no error details you MUST fill in an empty object {}. */
  public errorDetails: unknown

  public toMessageString(): string {
    return JSON.stringify([this.messageTypeId, this.messageId, this.errorCode, this.errorDescription, classToPlain(this.errorDetails)])
  }
}
