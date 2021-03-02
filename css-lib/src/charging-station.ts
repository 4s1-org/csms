import {
  BootNotificationRequestDto,
  BootNotificationResponseDto,
  OcppErrorCodeEnum,
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
  OcppResponseMessageDto,
} from '@yellowgarbagebag/ocpp-lib'
import { Logger } from '@yellowgarbagebag/common-lib'

export abstract class ChargingStation implements IChargingStation {
  public readonly logger = new Logger(this.uniqueIdentifier)
  private heartbeatInterval = 3600
  private sendList: OcppRequestMessageDto[] = []

  public constructor(public readonly uniqueIdentifier: string) {
    // nothing to do
  }

  public addToSendList(requestMessage: OcppRequestMessageDto): void {
    this.sendList.push(requestMessage)
  }

  public incomingRequestMessage(msg: OcppRequestMessageDto): ResponseBaseDto {
    if (msg.payload instanceof SetVariablesRequestDto) {
      return this.receiveSetVariablesRequest(msg.payload)
    }
    if (msg.payload instanceof ChangeAvailabilityRequestDto) {
      return this.receiveChangeAvailabilityRequest(msg.payload)
    }
    if (msg.payload instanceof GetVariablesRequestDto) {
      return this.receiveGetVariablesRequest(msg.payload)
    }

    throw new CsmsError(OcppErrorCodeEnum.NotSupported)
  }

  public incomingResponseMessage(msg: OcppResponseMessageDto): void {
    if (msg.payload instanceof BootNotificationResponseDto) {
      return this.receiveBootNotificationResponse(msg.payload)
    }
    if (msg.payload instanceof HeartbeatResponseDto) {
      return this.receiveHeartbeatResponse(msg.payload)
    }
    if (msg.payload instanceof StatusNotificationResponseDto) {
      return this.receiveStatusNotificationResponse(msg.payload)
    }
    if (msg.payload instanceof AuthorizeResponseDto) {
      return this.receiveAuthorizeResponse(msg.payload)
    }
    if (msg.payload instanceof MeterValuesResponseDto) {
      return this.receiveMeterValuesResponse(msg.payload)
    }
    if (msg.payload instanceof NotifyEventResponseDto) {
      return this.receiveNotifyEventResponse(msg.payload)
    }

    throw new CsmsError(OcppErrorCodeEnum.NotSupported)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public incomingErrorMessage(msg: OcppErrorMessageDto): void {
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
  public sendBootNotificationRequest(reason: BootReasonEnum = BootReasonEnum.PowerUp): BootNotificationRequestDto {
    const csDto = new ChargingStationDto('DemoCharger', 'VendorX')
    const payload = new BootNotificationRequestDto(csDto, reason)
    return payload
  }

  /**
   * B01 - Cold Boot Charging Station
   * B02 - Cold Boot Charging Station - Pending
   * B03 - Cold Boot Charging Station - Rejected
   */
  private receiveBootNotificationResponse(payload: BootNotificationResponseDto): void {
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private receiveHeartbeatResponse(payload: HeartbeatResponseDto): void {
    //
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private receiveMeterValuesResponse(payload: MeterValuesResponseDto): void {
    //
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
  public sendStatusNotificationRequest(
    connectorStatus: ConnectorStatusEnum,
    evseId: number,
  ): StatusNotificationRequestDto {
    const payload = new StatusNotificationRequestDto(new Date().toISOString(), connectorStatus, evseId, 1)
    return payload
  }

  /**
   * G01 - Status Notification
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private receiveStatusNotificationResponse(payload: StatusNotificationResponseDto): void {
    //
  }

  /**
   * G03 - Change Availability EVSE/Connector
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private receiveChangeAvailabilityRequest(payload: ChangeAvailabilityRequestDto): ChangeAvailabilityResponseDto {
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private receiveNotifyEventResponse(payload: NotifyEventResponseDto): void {
    //
  }
}
