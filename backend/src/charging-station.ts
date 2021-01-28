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
  OcppRequestCallDto,
  IChargingStation,
} from '@yellowgarbagebag/csms-shared'

export class ChargingStation implements IChargingStation {
  public readonly logger = new Logger(this.uniqueIdentifier)
  private sendList: OcppRequestCallDto[] = []

  public constructor(public readonly uniqueIdentifier: string, private username: string, private password: string) {
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
      return this.bootNotificationRequest(payload)
    }
    if (payload instanceof HeartbeatRequestDto) {
      return this.heartbeatRequest(payload)
    }
    if (payload instanceof StatusNotificationRequestDto) {
      return this.statusNotificationRequest(payload)
    }
    if (payload instanceof AuthorizeRequestDto) {
      return this.authorizeRequest(payload)
    }
    if (payload instanceof MeterValuesRequestDto) {
      return this.meterValuesRequest(payload)
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
    const request = this.sendList.find((x) => x.messageId === messageId)
    if (request) {
      const index = this.sendList.indexOf(request)
      this.sendList.splice(index, 1)
      return request.action
    }

    throw new CsmsError(OcppErrorCodeEnum.GenericError, 'Request to response not found')
  }

  private bootNotificationRequest(payload: BootNotificationRequestDto): BootNotificationResponseDto {
    return new BootNotificationResponseDto(new Date().toISOString(), 1, RegistrationStatusEnum.Accepted)
  }

  private heartbeatRequest(payload: HeartbeatRequestDto): HeartbeatResponseDto {
    return new HeartbeatResponseDto(new Date().toISOString())
  }

  private statusNotificationRequest(payload: StatusNotificationRequestDto): StatusNotificationResponseDto {
    return new StatusNotificationResponseDto()
  }

  private meterValuesRequest(payload: MeterValuesRequestDto): MeterValuesResponseDto {
    return new MeterValuesResponseDto()
  }

  private authorizeRequest(payload: AuthorizeRequestDto): AuthorizeResponseDto {
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
