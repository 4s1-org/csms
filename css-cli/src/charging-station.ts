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
  ChargingStationDto,
  BootReasonEnum,
  IdTokenDto,
  MeterValueDto,
  ConnectorStatusEnum,
  SampledValueDto,
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
  RequestBaseDto,
} from '@yellowgarbagebag/ocpp-lib'
import { Logger } from '@yellowgarbagebag/common-lib'
import { ISendMessage } from './i-send-message'
import { IReceiveMessage } from './i-receive-message'
export class ChargingStation implements IReceiveMessage {
  public readonly logger = new Logger(this.uniqueIdentifier)
  public heartbeatInterval = 3600

  public constructor(public readonly uniqueIdentifier: string, private readonly sendMessage: ISendMessage) {
    // nothing to do
  }

  // ToDO: Warum ist es egal, was als Rückgabetyp steht? RequestBaseDto
  public receive(payload: RequestBaseDto): ResponseBaseDto {
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

  /**
   * B01 - Cold Boot Charging Station
   * B02 - Cold Boot Charging Station - Pending
   * B03 - Cold Boot Charging Station - Rejected
   */
  public async sendBootNotificationRequest(): Promise<BootNotificationResponseDto> {
    const csDto = new ChargingStationDto('SingleSocketCharger', 'VendorX')
    const payload = new BootNotificationRequestDto(csDto, BootReasonEnum.PowerUp)
    const res = await this.sendMessage.send(payload)
    this.receiveBootNotificationResponse(res)
    return res
  }

  /**
   * B01 - Cold Boot Charging Station
   * B02 - Cold Boot Charging Station - Pending
   * B03 - Cold Boot Charging Station - Rejected
   */
  public receiveBootNotificationResponse(payload: BootNotificationResponseDto): void {
    this.heartbeatInterval = payload.interval
  }

  /**
   * G02 - Heartbeat
   */
  public async sendHeartbeatRequest(): Promise<HeartbeatResponseDto> {
    const payload = new HeartbeatRequestDto()
    const res = await this.sendMessage.send(payload)
    this.receiveHeartbeatResponse(res)
    return res
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
  public async sendAuthorizationRequest_Rfid(): Promise<AuthorizeResponseDto> {
    const idTocken = new IdTokenDto('AA12345', IdTokenEnum.ISO14443)
    const payload = new AuthorizeRequestDto(idTocken)
    const res = await this.sendMessage.send(payload)
    this.receiveAuthorizeResponse(res)
    return res
  }

  /**
   * C04 - Authorization using PIN-code
   */
  public async sendAuthorizationRequest_PinCode(): Promise<AuthorizeResponseDto> {
    const idTocken = new IdTokenDto('1234', IdTokenEnum.KeyCode)
    const payload = new AuthorizeRequestDto(idTocken)
    const res = await this.sendMessage.send(payload)
    this.receiveAuthorizeResponse(res)
    return res
  }

  /**
   * C01 - EV Driver Authorization using RFID
   * C04 - Authorization using PIN-code
   */
  public receiveAuthorizeResponse(payload: AuthorizeResponseDto): void {
    if (payload.idTokenInfo.status !== AuthorizationStatusEnum.Accepted) {
      this.logger.warn(`Authorization failed | ${payload.idTokenInfo.status}`)
    }
  }

  /**
   * J01 - Sending Meter Values not related to a transaction
   */
  public async sendMeterValueRequest(): Promise<MeterValuesResponseDto> {
    const sampleValue = new SampledValueDto(53)
    const meterValue = new MeterValueDto([sampleValue], new Date().toISOString())
    const payload = new MeterValuesRequestDto(1, [meterValue])
    const res = await this.sendMessage.send(payload)
    this.receiveMeterValuesResponse(res)
    return res
  }

  /**
   * J01 - Sending Meter Values not related to a transaction
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public receiveMeterValuesResponse(payload: MeterValuesResponseDto): void {
    //
  }

  /**
   * B05 - Set Variables
   */
  public receiveSetVariablesRequest(payload: SetVariablesRequestDto): SetVariablesResponseDto {
    const result: SetVariableResultDto[] = []
    for (const x of payload.setVariableData) {
      result.push(new SetVariableResultDto(SetVariableStatusEnum.Accepted, x.component, x.variable))
    }
    return new SetVariablesResponseDto(result)
  }

  /**
   * G01 - Status Notification
   */
  public async sendStatusNotificationRequest(): Promise<StatusNotificationResponseDto> {
    const payload = new StatusNotificationRequestDto(new Date().toISOString(), ConnectorStatusEnum.Available, 1, 1)
    const res = await this.sendMessage.send(payload)
    this.receiveStatusNotificationResponse(res)
    return res
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
  public receiveGetVariablesRequest(payload: GetVariablesRequestDto): GetVariablesResponseDto {
    const result: GetVariableResultDto[] = []
    for (const x of payload.getVariableData) {
      result.push(new GetVariableResultDto(GetVariableStatusEnum.Accepted, x.component, x.variable))
    }
    return new GetVariablesResponseDto(result)
  }

  /**
   * G05 - Lock Failure
   */
  public async sendNotifyEventRequest_LockFailure(): Promise<NotifyEventRequestDto> {
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
    const payload = new NotifyEventRequestDto(new Date().toISOString(), 1, data)
    const res = await this.sendMessage.send(payload)
    this.receiveNotifyEventResponse(res)
    return res
  }

  /**
   * G05 - Lock Failure
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public receiveNotifyEventResponse(payload: NotifyEventResponseDto): void {
    //
  }
}
