import { OcppErrorCodeEnum } from '../../calls/ocpp-error-code.enum'
import { CsmsError } from './csms-error'

export class CsmsCallValidationError extends CsmsError {
  constructor(
    public readonly messageId: string,
    errorCode: OcppErrorCodeEnum,
    errorDescription?: string,
    errorDetails?: unknown,
  ) {
    super(errorCode, errorDescription, errorDetails)
  }
}
