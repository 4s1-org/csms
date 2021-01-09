import {
  BootNotificationRequestDto,
  BootNotificationResponseDto,
  IRequestMessage,
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
import { OcppError } from './ocpp-error'
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

  public messageReceived(data: unknown): OcppCallResultDto {
    this.logger.info(`Received message`)
    try {
      const dto: OcppCallDto = validateOcppCall(data)

      this.logger.info(`Type of "${dto.action}"`)
      switch (dto.action) {
        case OcppMessageEnum.BootNotification:
          const bootNotification = plainToClass(BootNotificationRequestDto, dto.payload as unknown)
          this.validatePayload(bootNotification, dto.messageId)
          const res = new BootNotificationResponseDto('2013-02-01T20:53:32.486Z', 300, RegistrationStatusEnum.Accepted)
          return new OcppCallResultDto(dto.messageId, res)
        default:
          throw new OcppError(new OcppCallErrorDto(dto.messageId, OcppErrorCode.NotSupported))
      }
    } catch (err) {
      if (err instanceof OcppError) {
        this.logger.error('Invalid status: ' + err.dto.toString())
      }
      throw err
    }
  }

  private validatePayload(payload: IRequestMessage, messageId: string): void {
    const errors = validateSync(payload)
    if (errors.length > 0) {
      this.logger.error(`Received payload has errors`)
      throw new OcppError(new OcppCallErrorDto(messageId, OcppErrorCode.FormatViolation, 'Validation failed'))
    }
  }
}
