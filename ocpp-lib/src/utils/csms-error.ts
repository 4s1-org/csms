import { OcppErrorCodeEnum } from '../ocpp-rpc/ocpp-error-code.enum'

export class CsmsError extends Error {
  constructor(
    public readonly errorCode: OcppErrorCodeEnum,
    public readonly errorDescription?: string,
    public readonly errorDetails?: unknown,
  ) {
    super()
  }
}
