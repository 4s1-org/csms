import {
  BootNotificationRequestDto,
  BootNotificationResponseDto,
  Logger,
  OcppCallDto,
  OcppCallErrorDto,
  OcppCallResultDto,
  OcppErrorCode,
  OcppMessageEnum,
  RegistrationStatusEnum,
  validateData,
} from '@yellowgarbagebag/csms-shared'
import { plainToClass } from 'class-transformer'
import { validateOcppCall } from './utils'
import WebSocket from 'ws'

export class ChargingStation {
  private logger = new Logger(this.uniqueIdentifier)

  public constructor(public readonly uniqueIdentifier: string) {
    this.logger.info('First contact')
  }

  public connect(): void {
    this.logger.info('Connected')
  }

  public disconnect(): void {
    this.logger.info('Disconnected')
  }

  public messageReceived(msg: WebSocket.MessageEvent): OcppCallResultDto {
    this.logger.debug(`Received`)
    this.logger.debug(msg.data as string)

    try {
      const dto: OcppCallDto = validateOcppCall(msg.data)

      this.logger.info(`Type of "${dto.action}"`)
      switch (dto.action) {
        case OcppMessageEnum.BootNotification:
          const bootNotification = plainToClass(BootNotificationRequestDto, dto.payload)
          bootNotification.chargingStation.foo()
          validateData(bootNotification, dto.messageId)
          const res = new BootNotificationResponseDto('2013-02-01T20:53:32.486Z', 300, RegistrationStatusEnum.Accepted)
          return new OcppCallResultDto(dto.messageId, res)
        default:
          throw new OcppCallErrorDto(dto.messageId, OcppErrorCode.NotSupported)
      }
    } catch (err) {
      if (err instanceof OcppCallErrorDto) {
        this.logger.error('Invalid status: ' + err.toString())
      }
      throw err
    }
  }
}
