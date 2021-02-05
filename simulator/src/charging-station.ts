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
  OcppErrorMessageDto,
  OcppActionEnum,
  OcppRequestMessageDto,
  ChargingStationDto,
  BootReasonEnum,
  IdTokenDto,
  MeterValueDto,
  ConnectorStatusEnum,
  SampledValueDto,
  IChargingStation,
  SetVariablesRequestDto,
  SetVariablesResponseDto,
  SetVariableResultDto,
  SetVariableStatusEnum,
  ChangeAvailabilityRequestDto,
  ChangeAvailabilityResponseDto,
  ChangeAvailabilityStatusEnum,
  AuthorizationStatusEnum,
  GetVariablesRequestDto,
  GetVariablesResponseDto,
  GetVariableResultDto,
  GetVariableStatusEnum,
  NotifyEventRequestDto,
  EventDataDto,
  EventTriggerEnum,
  ComponentDto,
  EventNotificationEnum,
  VariableDto,
  NotifyEventResponseDto,
} from '@yellowgarbagebag/csms-shared'

export class ChargingStation implements IChargingStation {
  public readonly logger = new Logger(this.uniqueIdentifier)
  public heartbeatInterval = 3600
  private sendList: OcppRequestMessageDto[] = []
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

  public addToSendList(requestCall: OcppRequestMessageDto): void {
    this.sendList.push(requestCall)
  }

  public incomingRequestMessage(payload: RequestBaseDto): ResponseBaseDto {
    if (payload instanceof SetVariablesRequestDto) {
      return this.receiveSetVariablesRequest(payload)
    }
    if (payload instanceof ChangeAvailabilityRequestDto) {
      return this.receiveChangeAvailabilityRequest(payload)
    }
    if (payload instanceof GetVariablesRequestDto) {
      return this.receiveGetVariablesRequest(payload)
    }

    throw new CsmsError(OcppErrorCodeEnum.NotSupported)
  }

  public incomingResponseMessage(payload: ResponseBaseDto): void {
    if (payload instanceof BootNotificationResponseDto) {
      return this.receiveBootNotificationResponse(payload)
    }
    if (payload instanceof HeartbeatResponseDto) {
      return this.receiveHeartbeatResponse(payload)
    }
    if (payload instanceof StatusNotificationResponseDto) {
      return this.receiveStatusNotificationResponse(payload)
    }
    if (payload instanceof AuthorizeResponseDto) {
      return this.receiveAuthorizeResponse(payload)
    }
    if (payload instanceof MeterValuesResponseDto) {
      return this.receiveMeterValuesResponse(payload)
    }
    if (payload instanceof NotifyEventResponseDto) {
      return this.receiveNotifyEventResponse(payload)
    }

    throw new CsmsError(OcppErrorCodeEnum.NotSupported)
  }

  public incomingErrorMessage(error: OcppErrorMessageDto): void {
    this.logger.silent('', error)
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

  /**
   * B01 - Cold Boot Charging Station
   * B02 - Cold Boot Charging Station - Pending
   * B03 - Cold Boot Charging Station - Rejected
   */
  public sendBootNotificationRequest(): BootNotificationRequestDto {
    const csDto = new ChargingStationDto('SingleSocketCharger', 'VendorX')
    const payload = new BootNotificationRequestDto(csDto, BootReasonEnum.PowerUp)
    return payload
  }

  /**
   * B01 - Cold Boot Charging Station
   * B02 - Cold Boot Charging Station - Pending
   * B03 - Cold Boot Charging Station - Rejected
   */
  private receiveBootNotificationResponse(payload: BootNotificationResponseDto): void {
    this.logger.silent('', payload)
    this.heartbeatInterval = payload.interval
  }

  /**
   * G02 - Heartbeat
   */
  public sendHeartbeatRequest(): HeartbeatRequestDto {
    const payload = new HeartbeatRequestDto()
    return payload
  }

  /**
   * G02 - Heartbeat
   */
  private receiveHeartbeatResponse(payload: HeartbeatResponseDto): void {
    this.logger.silent('', payload)
  }

  /**
   * C01 - EV Driver Authorization using RFID
   */
  public sendAuthorizationRequest_Rfid(): AuthorizeRequestDto {
    const idTocken = new IdTokenDto('AA12345', IdTokenEnum.ISO14443)
    const payload = new AuthorizeRequestDto(idTocken)
    return payload
  }

  /**
   * C04 - Authorization using PIN-code
   */
  public sendAuthorizationRequest_PinCode(): AuthorizeRequestDto {
    const idTocken = new IdTokenDto('1234', IdTokenEnum.KeyCode)
    const payload = new AuthorizeRequestDto(idTocken)
    return payload
  }

  /**
   * C01 - EV Driver Authorization using RFID
   * C04 - Authorization using PIN-code
   */
  private receiveAuthorizeResponse(payload: AuthorizeResponseDto): void {
    if (payload.idTokenInfo.status !== AuthorizationStatusEnum.Accepted) {
      this.logger.warn(`Authorization failed | ${payload.idTokenInfo.status}`)
    }
  }

  /**
   * J01 - Sending Meter Values not related to a transaction
   */
  public sendMeterValueRequest(): MeterValuesRequestDto {
    const sampleValue = new SampledValueDto(53)
    const meterValue = new MeterValueDto([sampleValue], new Date().toISOString())
    const payload = new MeterValuesRequestDto(1, [meterValue])
    return payload
  }

  /**
   * J01 - Sending Meter Values not related to a transaction
   */
  private receiveMeterValuesResponse(payload: MeterValuesResponseDto): void {
    this.logger.silent('', payload)
  }

  /**
   * B05 - Set Variables
   */
  private receiveSetVariablesRequest(payload: SetVariablesRequestDto): SetVariablesResponseDto {
    const result: SetVariableResultDto[] = []
    for (const x of payload.setVariableData) {
      result.push(new SetVariableResultDto(SetVariableStatusEnum.Accepted, x.component, x.variable))
    }
    return new SetVariablesResponseDto(result)
  }

  /**
   * G01 - Status Notification
   */
  public sendStatusNotificationRequest(): StatusNotificationRequestDto {
    const payload = new StatusNotificationRequestDto(new Date().toISOString(), ConnectorStatusEnum.Available, 1, 1)
    return payload
  }

  /**
   * G01 - Status Notification
   */
  private receiveStatusNotificationResponse(payload: StatusNotificationResponseDto): void {
    this.logger.silent('', payload)
  }

  /**
   * G03 - Change Availability EVSE/Connector
   */
  private receiveChangeAvailabilityRequest(payload: ChangeAvailabilityRequestDto): ChangeAvailabilityResponseDto {
    this.logger.silent('', payload)
    return new ChangeAvailabilityResponseDto(ChangeAvailabilityStatusEnum.Accepted)
  }

  /**
   * B06 - Get Variables
   */
  private receiveGetVariablesRequest(payload: GetVariablesRequestDto): GetVariablesResponseDto {
    const result: GetVariableResultDto[] = []
    for (const x of payload.getVariableData) {
      result.push(new GetVariableResultDto(GetVariableStatusEnum.Accepted, x.component, x.variable))
    }
    return new GetVariablesResponseDto(result)
  }

  /**
   * G05 - Lock Failure
   */
  public sendNotifyEventRequest_LockFailure(): NotifyEventRequestDto {
    // ToDo: Das so umsetzen:
    // G05.FR.02
    // The Charging Station SHALL send a NotifyEventRequest to the CSMS for the
    // ConnectorPlugRetentionLock component with
    // variable = Problem,
    // Value = True.

    const data: EventDataDto[] = []
    data.push(
      new EventDataDto(
        1,
        new Date().toISOString(),
        EventTriggerEnum.Alerting,
        'foo',
        new ComponentDto('ConnectorPlugRetentionLock'),
        EventNotificationEnum.HardWiredMonitor,
        new VariableDto('Problem'),
      ),
    )
    return new NotifyEventRequestDto(new Date().toISOString(), 1, data)
  }

  /**
   * G05 - Lock Failure
   */
  private receiveNotifyEventResponse(payload: NotifyEventResponseDto): void {
    this.logger.silent('', payload)
  }
}
