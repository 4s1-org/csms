import { RpcErrorCodeEnum } from './rpc-error-code.enum'
import { CsmsError } from '../utils/csms-error'

export class RpcValidationError extends CsmsError {
  constructor(public readonly messageId: string, errorCode: RpcErrorCodeEnum, errorDescription?: string, errorDetails?: unknown) {
    super(errorCode, errorDescription, errorDetails)
  }
}
