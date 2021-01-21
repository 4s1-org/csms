import {
  BootNotificationRequestDto,
  BootNotificationResponseDto,
  Logger,
  OcppErrorCodeEnum,
  OcppMessageEnum,
  RegistrationStatusEnum,
  toClass,
  RequestBaseDto,
  ResponseBaseDto,
  CsmsError,
} from '@yellowgarbagebag/csms-shared'

export class ChargingStation {
  public readonly logger = new Logger(this.uniqueIdentifier)

  public constructor(public readonly uniqueIdentifier: string) {
    this.logger.info('First contact')
  }

  public connect(): void {
    this.logger.info('Connected')
  }

  public disconnect(): void {
    this.logger.info('Disconnected')
  }

  public messageReceived(action: OcppMessageEnum, payload: RequestBaseDto): ResponseBaseDto {
    switch (action) {
      case OcppMessageEnum.BootNotification:
        const bootNotification = toClass(BootNotificationRequestDto, payload)

        return new BootNotificationResponseDto('2013-02-01T20:53:32.486Z', 300, RegistrationStatusEnum.Accepted)
      default:
        throw new CsmsError(OcppErrorCodeEnum.NotSupported)
    }
  }
}
