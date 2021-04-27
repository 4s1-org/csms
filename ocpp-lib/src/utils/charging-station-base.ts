import { Logger, LogLevelEnum } from '@yellowgarbagebag/common-lib'
import { IReceiveMessage } from './i-receive-message'
import { ISendMessage } from './i-send-message'
import { OcppActionEnum } from '../generated/ocpp-action.enum'
import { RequestBaseDto } from '../generated/request-base.dto'
import { ResponseBaseDto } from '../generated/response-base.dto'

/**
 * Baseclass for a charging station.
 */
export abstract class ChargingStationBase implements IReceiveMessage {
  protected _heartbeatInterval = 3600
  public readonly logger

  public constructor(public readonly uniqueIdentifier: string, protected readonly sendMessage: ISendMessage, logLevel: LogLevelEnum) {
    this.logger = new Logger(uniqueIdentifier, logLevel)
  }

  public get heartbeatInterval(): number {
    return this._heartbeatInterval
  }

  public get currentTime(): string {
    return new Date().toISOString()
  }

  public abstract receive(payload: RequestBaseDto, action: OcppActionEnum): ResponseBaseDto
}
