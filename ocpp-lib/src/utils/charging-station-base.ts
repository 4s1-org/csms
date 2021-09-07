import { Logger, LogLevelEnum } from '@4s1/common-lib'
import { IReceiveMessage } from './i-receive-message'
import { ISendMessage } from './i-send-message'
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

  /**
   * Get the current heartbeat interval.
   * Nice to know for the CSMS, required for the CS.
   */
  public get heartbeatInterval(): number {
    return this._heartbeatInterval
  }

  /**
   * Get the current time in an OCPP ready format.
   */
  public get currentTime(): string {
    return new Date().toISOString()
  }

  /**
   * Receive function for an incoming ocpp call/callresult/callerror.
   */
  public abstract receive(payload: RequestBaseDto): ResponseBaseDto
}
