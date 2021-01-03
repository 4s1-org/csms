import { WsException } from '@nestjs/websockets'
import { OcppErrorCode } from '@yellowgarbagebag/csms-shared'

export class OcppWsException extends WsException {
  constructor(
    public readonly errorCode: OcppErrorCode,
    public readonly errorDescription: string,
    public readonly messageId?: string,
    public readonly errorDetails?: unknown,
  ) {
    super(errorDescription)
  }
}
