import { RpcErrorCodeEnum } from '../ocpp-rpc/rpc-error-code.enum'

/**
 * Common Error in the CSMS.
 */
export class CsmsError extends Error {
  constructor(
    public readonly errorCode: RpcErrorCodeEnum,
    public readonly errorDescription?: string,
    public readonly errorDetails?: unknown,
  ) {
    super()
  }
}
