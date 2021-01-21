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
  HeartbeatRequestDto,
  HeartbeatResponseDto,
  StatusNotificationRequestDto,
  StatusNotificationResponseDto,
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
        return this.bootNotification(toClass(BootNotificationRequestDto, payload))
      case OcppMessageEnum.Heartbeat:
        return this.heartbeat(toClass(HeartbeatRequestDto, payload))
      case OcppMessageEnum.StatusNotification:
        return this.statusNotification(toClass(StatusNotificationRequestDto, payload))
      default:
        throw new CsmsError(OcppErrorCodeEnum.NotSupported, action)
    }
  }

  private bootNotification(payload: BootNotificationRequestDto): BootNotificationResponseDto {
    return new BootNotificationResponseDto(new Date().toISOString(), 300, RegistrationStatusEnum.Accepted)
  }

  private heartbeat(payload: HeartbeatRequestDto): HeartbeatResponseDto {
    return new HeartbeatResponseDto(new Date().toISOString())
  }

  private statusNotification(payload: StatusNotificationRequestDto): StatusNotificationResponseDto {
    return new StatusNotificationResponseDto()
  }
}
