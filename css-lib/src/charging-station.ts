import {
  BootNotificationRequestDto,
  BootNotificationResponseDto,
  ResponseBaseDto,
  CsmsError,
  HeartbeatRequestDto,
  HeartbeatResponseDto,
  StatusNotificationRequestDto,
  StatusNotificationResponseDto,
  AuthorizeRequestDto,
  AuthorizeResponseDto,
  MeterValuesRequestDto,
  MeterValuesResponseDto,
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
  IReceiveMessage,
  ISendMessage,
  GetBaseReportRequestDto,
  GetBaseReportResponseDto,
  GenericDeviceModelStatusEnum,
  NotifyReportResponseDto,
  NotifyReportRequestDto,
  ResetRequestDto,
  ResetResponseDto,
  ResetStatusEnum,
  TransactionEventRequestDto,
  TransactionEventResponseDto,
  DataTransferResponseDto,
  DataTransferStatusEnum,
  DataTransferRequestDto,
  OcppErrorCodeEnum,
  ChargingStationBase,
} from '@yellowgarbagebag/ocpp-lib'
import { LogLevelEnum } from '@yellowgarbagebag/common-lib'

export class ChargingStation extends ChargingStationBase implements IReceiveMessage {
  public heartbeatInterval = 3600

  public constructor(uniqueIdentifier: string, sendMessage: ISendMessage, logLevel: LogLevelEnum) {
    super(uniqueIdentifier, sendMessage, logLevel)
  }

  public get currentTime(): string {
    return new Date().toISOString()
  }

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
    if (payload instanceof GetBaseReportRequestDto) {
      return this.receiveGetBaseReportRequest(payload)
    }
    if (payload instanceof ResetRequestDto) {
      return this.receiveRequestResetRequest(payload)
    }
    if (payload instanceof DataTransferRequestDto) {
      return this.receiveDataTransferRequest(payload)
    }

    throw new CsmsError(OcppErrorCodeEnum.NotSupported)
  }

  /**
   * B01 - Cold Boot Charging Station
   * B02 - Cold Boot Charging Station - Pending
   * B03 - Cold Boot Charging Station - Rejected
   */
  public async sendBootNotificationRequest(payload: BootNotificationRequestDto): Promise<BootNotificationResponseDto> {
    const res = await this.sendMessage.send(payload)
    this.heartbeatInterval = res.interval
    return res
  }

  /**
   * G02 - Heartbeat
   * Mentioned in:
   * B01 - Cold Boot Charging Station
   * B04 - Offline Behavior Idle Charging Station
   * E12 - Inform CSMS of an Offline Occurred Transaction
   */
  public async sendHeartbeatRequest(): Promise<HeartbeatResponseDto> {
    const payload = new HeartbeatRequestDto()
    const res = await this.sendMessage.send(payload)
    // ToDo Handling
    return res
  }

  /**
   * C01 - EV Driver Authorization using RFID
   * C02 - Authorization using a start button
   * C04 - Authorization using PIN-code
   */
  public async sendAuthorizationRequest(payload: AuthorizeRequestDto): Promise<AuthorizeResponseDto> {
    const res = await this.sendMessage.send(payload)

    if (res.idTokenInfo.status !== AuthorizationStatusEnum.Accepted) {
      this.logger.warn(`Authorization failed | ${res.idTokenInfo.status}`)
    }

    return res
  }

  /**
   * J01 - Sending Meter Values not related to a transaction
   */
  public async sendMeterValueRequest(payload: MeterValuesRequestDto): Promise<MeterValuesResponseDto> {
    const res = await this.sendMessage.send(payload)
    // ToDo Handling
    return res
  }

  /**
   * E01 - Start Transaction options
   * E02 - Start Transaction - Cable Plugin First
   * E03 - Start Transaction - IdToken First
   * E05 - Start Transaction - Id not Accepted
   * E06 - Stop Transaction options
   * E07 - Transaction locally stopped by IdToken
   * E08 - Transaction stopped while Charging Station is offline
   * E09 - When cable disconnected on EV-side: Stop Transaction
   * E10 - When cable disconnected on EV-side: Suspend Transaction
   * E11 - Connection Loss During Transaction
   * E12 - Inform CSMS of an Offline Occurred Transaction
   * E13 - Transaction-related message not accepted by CSMS
   * J02 - Sending transaction related Meter Values
   * Mentioned in:
   * B12 - Reset - With Ongoing Transaction
   * C02 - Authorization using a start button
   */
  public async sendTransactionEventRequest(payload: TransactionEventRequestDto): Promise<TransactionEventResponseDto> {
    const res = await this.sendMessage.send(payload)
    // ToDo Handling
    return res
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
   * Mentioned in:
   * B01 - Cold Boot Charging Station
   * B04 - Offline Behavior Idle Charging Station
   * C02 - Authorization using a start button
   * E02 - Start Transaction - Cable Plugin First
   * E03 - Start Transaction - IdToken First
   * E07 - Transaction locally stopped by IdToken
   * E09 - When cable disconnected on EV-side: Stop Transaction
   * E10 - When cable disconnected on EV-side: Suspend Transaction
   */
  public async sendStatusNotificationRequest(payload: StatusNotificationRequestDto): Promise<StatusNotificationResponseDto> {
    const res = await this.sendMessage.send(payload)
    return res
  }

  /**
   * Mentioned in:
   * B07 - Get Base Report
   */
  public async sendNotifyReportRequest(): Promise<NotifyReportResponseDto> {
    const payload = new NotifyReportRequestDto(1, new Date().toISOString(), 1)
    const res = await this.sendMessage.send(payload)
    // ToDo Handling
    return res
  }

  /**
   * G05 - Lock Failure
   */
  public async sendNotifyEventRequest_LockFailure(): Promise<NotifyEventResponseDto> {
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
        EventTriggerEnum.Delta,
        'foo',
        new ComponentDto('ConnectorPlugRetentionLock'),
        EventNotificationEnum.HardWiredMonitor,
        new VariableDto('Problem'),
      ),
    )
    const payload = new NotifyEventRequestDto(new Date().toISOString(), 1, data)
    const res = await this.sendMessage.send(payload)
    // ToDo Handling
    return res
  }

  /**
   * N07 - Alert Event
   */
  public async sendNotifyEventRequest_AlertEvent(): Promise<NotifyEventResponseDto> {
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
    // ToDo Handling
    return res
  }

  /**
   * G03 - Change Availability EVSE/Connector
   * G04 - Change Availability Charging Station
   */
  private receiveChangeAvailabilityRequest(payload: ChangeAvailabilityRequestDto): ChangeAvailabilityResponseDto {
    return new ChangeAvailabilityResponseDto(ChangeAvailabilityStatusEnum.Accepted)
  }

  /**
   * B07 - Get Base Report
   */
  private receiveGetBaseReportRequest(payload: GetBaseReportRequestDto): GetBaseReportResponseDto {
    return new GetBaseReportResponseDto(GenericDeviceModelStatusEnum.Accepted)
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
   * B11 - Reset - Without Ongoing Transaction
   * B12 - Reset - With Ongoing Transaction
   */
  private receiveRequestResetRequest(payload: ResetRequestDto): ResetResponseDto {
    return new ResetResponseDto(ResetStatusEnum.Accepted)
  }

  /**
   * P01 - Data Transfer to the Charging Station
   * P02 - Data Transfer to the CSMS
   */
  private receiveDataTransferRequest(payload: DataTransferRequestDto): DataTransferResponseDto {
    return new DataTransferResponseDto(DataTransferStatusEnum.Rejected)
  }
}
