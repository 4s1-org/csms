import {
  BootNotificationRequestDto,
  BootNotificationResponseDto,
  Logger,
  OcppErrorCodeEnum,
  RegistrationStatusEnum,
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
  MeterValuesRequestDto,
  MeterValuesResponseDto,
  OcppErrorCallDto,
  OcppActionEnum,
} from '@yellowgarbagebag/csms-shared'

export class ChargingStation {
  public readonly logger = new Logger(this.uniqueIdentifier)

  public constructor(
    public readonly uniqueIdentifier: string,
    private readonly username: string,
    private readonly password: string,
  ) {
    // nothing to do
  }

  public connect(): void {
    this.logger.info('Connected')
  }

  public disconnect(): void {
    this.logger.info('Disconnected')
  }

  public checkCredentials(username: string, password: string): boolean {
    const result = username === this.username && password === this.password
    if (result) {
      this.logger.info('Login successful')
    } else {
      this.logger.warn('Login failed')
    }
    return result
  }

  public incomingRequestCall(payload: RequestBaseDto): ResponseBaseDto {
    if (payload instanceof BootNotificationRequestDto) {
      return this.bootNotification(payload)
    }
    if (payload instanceof HeartbeatRequestDto) {
      return this.heartbeat(payload)
    }
    if (payload instanceof StatusNotificationRequestDto) {
      return this.statusNotification(payload)
    }
    if (payload instanceof AuthorizeRequestDto) {
      return this.authorize(payload)
    }
    if (payload instanceof MeterValuesRequestDto) {
      return this.meterValues(payload)
    }

    throw new CsmsError(OcppErrorCodeEnum.NotSupported)
  }

  public incomingResponseCall(payload: ResponseBaseDto): void {
    throw new CsmsError(OcppErrorCodeEnum.NotSupported)
  }

  public incomingErrorCall(error: OcppErrorCallDto): void {
    throw new CsmsError(OcppErrorCodeEnum.NotSupported)
  }

  public getActionToRequest(messageId: string): OcppActionEnum {
    // ToDo
    return OcppActionEnum.Heartbeat
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

  private meterValues(payload: MeterValuesRequestDto): MeterValuesResponseDto {
    return new MeterValuesResponseDto()
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
