import { Logger, LogLevelEnum } from '@yellowgarbagebag/common-lib'
import { IReceiveMessage } from '../communication/i-receive-message'
import { ISendMessage } from '../communication/i-send-message'
import { OcppActionEnum } from '../generated/ocpp-action.enum'
import { RequestBaseDto } from '../generated/request-base.dto'
import { ResponseBaseDto } from '../generated/response-base.dto'

/**
 * Baseclass for a charging station.
 */
export abstract class ChargingStationBase implements IReceiveMessage {
  protected heartbeatInterval = 3600
  public readonly logger

  public constructor(
    public readonly uniqueIdentifier: string,
    protected readonly sendMessage: ISendMessage,
    private readonly logLevel: LogLevelEnum,
  ) {
    this.logger = new Logger(uniqueIdentifier, logLevel)
  }

  public get currentTime(): string {
    return new Date().toISOString()
  }

  public abstract receive(payload: RequestBaseDto, action: OcppActionEnum): ResponseBaseDto
}