import { OcppErrorCodeEnum } from './rpc-error-code.enum'
import { CsmsError } from '../utils/csms-error'

export class OcppRpcValidationError extends CsmsError {
  constructor(public readonly messageId: string, errorCode: OcppErrorCodeEnum, errorDescription?: string, errorDetails?: unknown) {
    super(errorCode, errorDescription, errorDetails)
  }
}
