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
  AuthorizeRequestDto,
  AuthorizeResponseDto,
  IdTokenInfoDto,
  AuthorizationStatusEnum,
  IdTokenEnum,
} from '@yellowgarbagebag/csms-shared'

export class ChargingStation {
  public readonly logger = new Logger(this.uniqueIdentifier, 'debug')

  public constructor(
    public readonly uniqueIdentifier: string,
    public readonly username: string,
    public readonly password: string,
  ) {
    // nothing to do
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
      case OcppMessageEnum.Authorize:
        return this.authorize(toClass(AuthorizeRequestDto, payload))
      default:
        throw new CsmsError(OcppErrorCodeEnum.NotSupported, action)
    }
  }

  private bootNotification(payload: BootNotificationRequestDto): BootNotificationResponseDto {
    return new BootNotificationResponseDto(new Date().toISOString(), 1, RegistrationStatusEnum.Accepted)
  }

  private heartbeat(payload: HeartbeatRequestDto): HeartbeatResponseDto {
    return new HeartbeatResponseDto(new Date().toISOString())
  }

  private statusNotification(payload: StatusNotificationRequestDto): StatusNotificationResponseDto {
    return new StatusNotificationResponseDto()
  }

  private authorize(payload: AuthorizeRequestDto): AuthorizeResponseDto {
    if (payload.idToken.type === IdTokenEnum.KeyCode) {
      if (payload.idToken.idToken === '1234') {
        // C04.FR.02 - alles richtig
        return new AuthorizeResponseDto(new IdTokenInfoDto(AuthorizationStatusEnum.Accepted))
      } else {
        // C04.FR.01 - PIN falsch
        return new AuthorizeResponseDto(new IdTokenInfoDto(AuthorizationStatusEnum.Invalid))
      }
    }

    return new AuthorizeResponseDto(new IdTokenInfoDto(AuthorizationStatusEnum.Blocked))
  }
}
