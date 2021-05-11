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
  ReportBaseEnum,
  OperationalStatusEnum,
} from '@yellowgarbagebag/ocpp-lib'
import { LogLevelEnum } from '@yellowgarbagebag/common-lib'

/**
 * This class simulates a real charging station.
 */
export class ChargingStation extends ChargingStationBase implements IReceiveMessage {
  public constructor(uniqueIdentifier: string, sendMessage: ISendMessage, logLevel: LogLevelEnum) {
    super(uniqueIdentifier, sendMessage, logLevel)
  }

  /**
   * Receive function for an incoming ocpp call/callresult/callerror.
   */
  public receive(payload: RequestBaseDto): ResponseBaseDto {
    if (payload instanceof SetVariablesRequestDto) {
      return this.receiveSetVariables(payload)
    }
    if (payload instanceof ChangeAvailabilityRequestDto) {
      return this.receiveChangeAvailability(payload)
    }
    if (payload instanceof GetVariablesRequestDto) {
      return this.receiveGetVariables(payload)
    }
    if (payload instanceof GetBaseReportRequestDto) {
      return this.receiveGetBaseReport(payload)
    }
    if (payload instanceof ResetRequestDto) {
      return this.receiveRequestReset(payload)
    }
    if (payload instanceof DataTransferRequestDto) {
      return this.receiveDataTransfer(payload)
    }

    throw new CsmsError(OcppErrorCodeEnum.NotSupported)
  }

  /**
   * B01 - Cold Boot Charging Station
   * B02 - Cold Boot Charging Station - Pending
   * B03 - Cold Boot Charging Station - Rejected
   */
  public async sendBootNotification(payload: BootNotificationRequestDto): Promise<BootNotificationResponseDto> {
    const res = await this.sendMessage.send(payload)
    this._heartbeatInterval = res.interval
    return res
  }

  /**
   * G02 - Heartbeat
   * Mentioned in:
   * B01 - Cold Boot Charging Station
   * B04 - Offline Behavior Idle Charging Station
   * E12 - Inform CSMS of an Offline Occurred Transaction
   */
  public async sendHeartbeat(payload: HeartbeatRequestDto): Promise<HeartbeatResponseDto> {
    const res = await this.sendMessage.send(payload)
    // ToDo Handling
    return res
  }

  /**
   * C01 - EV Driver Authorization using RFID
   * C02 - Authorization using a start button
   * C04 - Authorization using PIN-code
   */
  public async sendAuthorize(payload: AuthorizeRequestDto): Promise<AuthorizeResponseDto> {
    const res = await this.sendMessage.send(payload)

    if (res.idTokenInfo.status !== AuthorizationStatusEnum.Accepted) {
      this.logger.warn(`Authorization failed | ${res.idTokenInfo.status}`)
    }

    return res
  }

  /**
   * J01 - Sending Meter Values not related to a transaction
   */
  public async sendMeterValue(payload: MeterValuesRequestDto): Promise<MeterValuesResponseDto> {
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
  public async sendTransactionEvent(payload: TransactionEventRequestDto): Promise<TransactionEventResponseDto> {
    const res = await this.sendMessage.send(payload)
    // ToDo Handling
    return res
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
  public async sendStatusNotification(payload: StatusNotificationRequestDto): Promise<StatusNotificationResponseDto> {
    const res = await this.sendMessage.send(payload)
    return res
  }

  /**
   * Mentioned in:
   * B07 - Get Base Report
   */
  public async sendNotifyReport(payload: NotifyReportRequestDto): Promise<NotifyReportResponseDto> {
    const res = await this.sendMessage.send(payload)
    // ToDo Handling
    return res
  }

  /**
   * G05 - Lock Failure
   * N07 - Alert Event
   */
  public async sendNotifyEvent(payload: NotifyEventRequestDto): Promise<NotifyEventResponseDto> {
    const res = await this.sendMessage.send(payload)
    // ToDo Handling
    return res
  }

  /**
   * P02 - Data Transfer to the CSMS
   */
  public async sendDataTransfer(payload: DataTransferRequestDto): Promise<DataTransferResponseDto> {
    const res = await this.sendMessage.send(payload)
    this.logger.info(`=> ${res.status}`)
    return res
  }

  /**
   * B05 - Set Variables
   */
  private receiveSetVariables(payload: SetVariablesRequestDto): SetVariablesResponseDto {
    const result: SetVariableResultDto[] = []
    for (const data of payload.setVariableData) {
      result.push(new SetVariableResultDto(SetVariableStatusEnum.Accepted, data.component, data.variable))
    }
    if (result.length > 1) {
      result[1].attributeStatus = SetVariableStatusEnum.Rejected
    }
    return new SetVariablesResponseDto(result)
  }

  /**
   * G03 - Change Availability EVSE/Connector
   * G04 - Change Availability Charging Station
   */
  private receiveChangeAvailability(payload: ChangeAvailabilityRequestDto): ChangeAvailabilityResponseDto {
    if (payload.operationalStatus === OperationalStatusEnum.Operative) {
      return new ChangeAvailabilityResponseDto(ChangeAvailabilityStatusEnum.Accepted)
    } else {
      return new ChangeAvailabilityResponseDto(ChangeAvailabilityStatusEnum.Rejected)
    }
  }

  /**
   * B07 - Get Base Report
   */
  private receiveGetBaseReport(payload: GetBaseReportRequestDto): GetBaseReportResponseDto {
    switch (payload.reportBase) {
      case ReportBaseEnum.FullInventory:
        return new GetBaseReportResponseDto(GenericDeviceModelStatusEnum.Accepted)
      case ReportBaseEnum.ConfigurationInventory:
      case ReportBaseEnum.SummaryInventory:
        return new GetBaseReportResponseDto(GenericDeviceModelStatusEnum.Rejected)
      default:
        return new GetBaseReportResponseDto(GenericDeviceModelStatusEnum.NotSupported)
    }
  }

  /**
   * B06 - Get Variables
   */
  private receiveGetVariables(payload: GetVariablesRequestDto): GetVariablesResponseDto {
    const result: GetVariableResultDto[] = []
    for (const x of payload.getVariableData) {
      result.push(new GetVariableResultDto(GetVariableStatusEnum.Accepted, x.component, x.variable))
    }
    if (result.length > 1) {
      result[1].attributeStatus = GetVariableStatusEnum.Rejected
    }
    return new GetVariablesResponseDto(result)
  }

  /**
   * B11 - Reset - Without Ongoing Transaction
   * B12 - Reset - With Ongoing Transaction
   */
  private receiveRequestReset(payload: ResetRequestDto): ResetResponseDto {
    if (payload.evseId < 3) {
      return new ResetResponseDto(ResetStatusEnum.Accepted)
    } else {
      return new ResetResponseDto(ResetStatusEnum.Rejected)
    }
  }

  /**
   * P01 - Data Transfer to the Charging Station
   */
  private receiveDataTransfer(payload: DataTransferRequestDto): DataTransferResponseDto {
    if (payload.data) {
      return new DataTransferResponseDto(DataTransferStatusEnum.Accepted)
    } else {
      return new DataTransferResponseDto(DataTransferStatusEnum.Rejected)
    }
  }
}
