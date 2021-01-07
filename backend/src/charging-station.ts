import {
  BootNotificationRequestDto,
  BootNotificationResponseDto,
  OcppCallDto,
  OcppCallErrorDto,
  OcppCallResultDto,
  OcppErrorCode,
  OcppMessageEnum,
  RegistrationStatusEnum,
} from '@yellowgarbagebag/csms-shared'
import { plainToClass } from 'class-transformer'
import { validateSync } from 'class-validator'
import { createLogger } from './logger'
import { validateOcppCall } from './utils'

export class ChargingStation {
  private logger = createLogger(this.uniqueIdentifier)

  public constructor(public readonly uniqueIdentifier: string) {
    this.logger.info('First contact')
  }

  public connect(): void {
    this.logger.info('Connected')
  }

  public disconnect(): void {
    this.logger.info('Disconnected')
  }

  public messageReceived(msg: any): OcppCallResultDto | OcppCallErrorDto {
    this.logger.info(`Received message`)

    const data: OcppCallDto | OcppCallErrorDto = validateOcppCall(msg)
    if (data instanceof OcppCallErrorDto) {
      this.logger.error(`Received OcppCallDto has errors`)
      return data
    }

    this.logger.info(`Type of "${data.action}"`)
    switch (data.action) {
      case OcppMessageEnum.BootNotification:
        const bootNotification = plainToClass(BootNotificationRequestDto, data.payload as unknown)
        const errors = validateSync(bootNotification)
        if (errors.length > 0) {
          this.logger.error(`Received BootNotificationRequestDto has errors`)
          return new OcppCallErrorDto(data.messageId, OcppErrorCode.FormatViolation, 'Validation failed')
        }
        const res = new BootNotificationResponseDto('2013-02-01T20:53:32.486Z', 300, RegistrationStatusEnum.Accepted)
        return new OcppCallResultDto(data.messageId, res)
      default:
        return new OcppCallErrorDto(data.messageId, OcppErrorCode.NotSupported)
    }
  }
}
