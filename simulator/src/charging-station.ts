import {
  BootNotificationRequestDto,
  BootNotificationResponseDto,
  Logger,
  OcppErrorCodeEnum,
  RequestBaseDto,
  ResponseBaseDto,
  CsmsError,
  HeartbeatRequestDto,
  HeartbeatResponseDto,
  StatusNotificationRequestDto,
  StatusNotificationResponseDto,
  AuthorizeRequestDto,
  AuthorizeResponseDto,
  IdTokenEnum,
  MeterValuesRequestDto,
  MeterValuesResponseDto,
  OcppErrorCallDto,
  OcppActionEnum,
  OcppRequestCallDto,
  ChargingStationDto,
  BootReasonEnum,
  IdTokenDto,
  MeterValueDto,
  ConnectorStatusEnum,
  SampledValueDto,
  IChargingStation,
} from '@yellowgarbagebag/csms-shared'

export class ChargingStation implements IChargingStation {
  public readonly logger = new Logger(this.uniqueIdentifier)
  public heartbeatInterval = 3600
  private sendList: OcppRequestCallDto[] = []
  private _username: string
  private _password: string

  public constructor(public readonly uniqueIdentifier: string, username: string, password: string) {
    this._username = username
    this._password = password
  }

  public get username(): string {
    return this._username
  }

  public get password(): string {
    return this._password
  }

  public connect(): void {
    this.logger.info('Connected')
  }

  public disconnect(): void {
    this.logger.info('Disconnected')
  }

  public addToSendList(requestCall: OcppRequestCallDto): void {
    this.sendList.push(requestCall)
  }

  public incomingRequestCall(payload: RequestBaseDto): ResponseBaseDto {
    throw new CsmsError(OcppErrorCodeEnum.NotSupported)
  }

  public incomingResponseCall(payload: ResponseBaseDto): void {
    if (payload instanceof BootNotificationResponseDto) {
      return this.bootNotificationResponse(payload)
    }
    if (payload instanceof HeartbeatResponseDto) {
      return this.heartbeatResponse(payload)
    }
    if (payload instanceof StatusNotificationResponseDto) {
      return this.statusNotificationResponse(payload)
    }
    if (payload instanceof AuthorizeResponseDto) {
      return this.authorizeResponse(payload)
    }
    if (payload instanceof MeterValuesResponseDto) {
      return this.meterValuesResponse(payload)
    }

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

  public sendBootNotification(): BootNotificationRequestDto {
    const csDto = new ChargingStationDto('SingleSocketCharger', 'VendorX')
    const payload = new BootNotificationRequestDto(csDto, BootReasonEnum.PowerUp)
    return payload
  }

  public sendHeartbeat(): HeartbeatRequestDto {
    const payload = new HeartbeatRequestDto()
    return payload
  }

  public sendAuthorization(): AuthorizeRequestDto {
    const idTocken = new IdTokenDto('1234', IdTokenEnum.KeyCode)
    const payload = new AuthorizeRequestDto(idTocken)
    return payload
  }

  public sendStatusNotification(): StatusNotificationRequestDto {
    const payload = new StatusNotificationRequestDto(new Date().toISOString(), ConnectorStatusEnum.Available, 1, 1)
    return payload
  }

  public sendMeterValue(): MeterValuesRequestDto {
    const sampleValue = new SampledValueDto(53)
    const meterValue = new MeterValueDto([sampleValue], new Date().toISOString())
    const payload = new MeterValuesRequestDto(1, [meterValue])
    return payload
  }

  private bootNotificationResponse(payload: BootNotificationResponseDto): void {
    this.heartbeatInterval = payload.interval
  }

  private heartbeatResponse(payload: HeartbeatResponseDto): void {
    console.log(payload)
  }

  private statusNotificationResponse(payload: StatusNotificationResponseDto): void {
    console.log(payload)
  }

  private meterValuesResponse(payload: MeterValuesResponseDto): void {
    console.log(payload)
  }

  private authorizeResponse(payload: AuthorizeResponseDto): void {
    console.log(payload)
  }
}
