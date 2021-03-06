import {
  BootNotificationRequestDto,
  BootNotificationResponseDto,
  ResponseBaseDto,
  HeartbeatRequestDto,
  HeartbeatResponseDto,
  StatusNotificationRequestDto,
  StatusNotificationResponseDto,
  AuthorizeRequestDto,
  AuthorizeResponseDto,
  IdTokenEnum,
  MeterValuesRequestDto,
  MeterValuesResponseDto,
  SetVariablesRequestDto,
  SetVariablesResponseDto,
  ChangeAvailabilityRequestDto,
  ChangeAvailabilityResponseDto,
  AuthorizationStatusEnum,
  GetVariablesRequestDto,
  GetVariablesResponseDto,
  NotifyEventRequestDto,
  NotifyEventResponseDto,
  RequestBaseDto,
  RegistrationStatusEnum,
  IdTokenInfoDto,
  IReceiveMessage,
  ISendMessage,
  GetBaseReportResponseDto,
  GetBaseReportRequestDto,
  NotifyReportRequestDto,
  NotifyReportResponseDto,
  ResetRequestDto,
  ResetResponseDto,
  TransactionEventRequestDto,
  TransactionEventResponseDto,
  DataTransferResponseDto,
  DataTransferRequestDto,
  OcppErrorCodeEnum,
  CsmsError,
  ConnectorStatusEnum,
  ReadingContextEnum,
  SampledValueDto,
  LocationEnum,
  MeasurandEnum,
  TransactionEventEnum,
  ChargingStationBase,
  DataTransferStatusEnum,
} from '@4s1/ocpp-lib'
import { ChargingStationModel, ColorStateEnum, EvseModel, RfidCardModel } from '@4s1/csms-lib'
import { ProcessEnv } from './process-env'

/**
 * This class is the counterpart of a real charging station.
 */
export class ChargingStation extends ChargingStationBase implements IReceiveMessage {
  private transactions: {
    rfidCard: RfidCardModel | null
    id: string
    evseId: number
    startMeterValue: number
    startDateTime: string
  }[] = []
  private openAuthRfIdCard: RfidCardModel | null = null

  public constructor(
    public readonly model: ChargingStationModel,
    sendMessage: ISendMessage,
    private readonly rfidCards: RfidCardModel[] = [],
  ) {
    super(model.uniqueIdentifier, sendMessage, ProcessEnv.LOG_LEVEL)
  }

  /**
   * Receive function for an incoming ocpp call/callresult/callerror.
   */
  public receive(payload: RequestBaseDto): ResponseBaseDto {
    this.model.lastContact = Date.now()
    this.model.lastAction = payload.constructor.name.replace('Dto', '')

    if (payload instanceof BootNotificationRequestDto) {
      return this.receiveBootNotification(payload)
    }

    // B01.FR.10
    // Before die CS aktzeptiert wurde sind nur folgende vier Kommandos erlaubt
    // - BootNotificationRequest
    // - TriggerMessageRequest
    // - GetBaseReportRequest
    // - GetReportRequest
    if (this.model.state !== ColorStateEnum.Green) {
      throw new CsmsError(OcppErrorCodeEnum.SecurityError, 'Charging Station is not accepted yet')
    }

    if (payload instanceof HeartbeatRequestDto) {
      return this.receiveHeartbeat(payload)
    }
    if (payload instanceof StatusNotificationRequestDto) {
      return this.receiveStatusNotification(payload)
    }
    if (payload instanceof AuthorizeRequestDto) {
      return this.receiveAuthorize(payload)
    }
    if (payload instanceof MeterValuesRequestDto) {
      return this.receiveMeterValues(payload)
    }
    if (payload instanceof NotifyEventRequestDto) {
      return this.receiveNotifyEvent(payload)
    }
    if (payload instanceof NotifyReportRequestDto) {
      return this.receiveNotifyReport(payload)
    }
    if (payload instanceof TransactionEventRequestDto) {
      return this.receiveTransactionEvent(payload)
    }
    if (payload instanceof DataTransferRequestDto) {
      return this.receiveDataTransfer(payload)
    }

    throw new CsmsError(OcppErrorCodeEnum.NotSupported)
  }

  public connect(): void {
    this.logger.info('Connected')
    this.model.state = ColorStateEnum.Yellow
  }

  public disconnect(): void {
    this.logger.info('Disconnected')
    this.model.state = ColorStateEnum.Red
    for (const evse of this.model.evseList) {
      evse.state = ColorStateEnum.Red
      evse.currentUser = undefined
    }
  }

  /**
   * B05 - Set Variables
   */
  public async sendSetVariables(payload: SetVariablesRequestDto): Promise<SetVariablesResponseDto> {
    const res = await this.sendMessage.send(payload)
    for (const sendVar of payload.setVariableData) {
      const receiveVar = res.setVariableResult.find(
        (x) => x.component.name === sendVar.component.name && x.variable.name === sendVar.variable.name,
      )
      if (receiveVar) {
        this.logger.info(`=> ${sendVar.component.name} | ${sendVar.variable.name} | ${receiveVar.attributeStatus}`)
      } else {
        this.logger.info(`=> ${sendVar.component.name} | ${sendVar.variable.name} | not received`)
      }
    }
    return res
  }

  /**
   * B07 - Get Base Report
   */
  public async sendGetBaseReport(payload: GetBaseReportRequestDto): Promise<GetBaseReportResponseDto> {
    const res = await this.sendMessage.send(payload)
    this.logger.info(`=> ${res.status}`)
    return res
  }

  /**
   * G03 - Change Availability EVSE/Connector
   * G04 - Change Availability Charging Station
   */
  public async sendChangeAvailability(payload: ChangeAvailabilityRequestDto): Promise<ChangeAvailabilityResponseDto> {
    const res = await this.sendMessage.send(payload)
    this.logger.info(`=> ${res.status}`)
    return res
  }

  /**
   * B06 - Get Variables
   */
  public async sendGetVariables(payload: GetVariablesRequestDto): Promise<GetVariablesResponseDto> {
    const res = await this.sendMessage.send(payload)
    for (const sendVar of payload.getVariableData) {
      const receiveVar = res.getVariableResult.find(
        (x) => x.component.name === sendVar.component.name && x.variable.name === sendVar.variable.name,
      )
      if (receiveVar) {
        this.logger.info(`=> ${sendVar.component.name} | ${sendVar.variable.name} | ${receiveVar.attributeStatus}`)
      } else {
        this.logger.info(`=> ${sendVar.component.name} | ${sendVar.variable.name} | not received`)
      }
    }
    return res
  }

  /**
   * B11 - Reset - Without Ongoing Transaction
   * B12 - Reset - With Ongoing Transaction
   */
  public async sendRequestReset(payload: ResetRequestDto): Promise<ResetResponseDto> {
    const res = await this.sendMessage.send(payload)
    this.logger.info(`=> ${res.status}`)
    return res
  }

  /**
   * P01 - Data Transfer to the Charging Station
   */
  public async sendDataTransfer(payload: DataTransferRequestDto): Promise<DataTransferResponseDto> {
    const res = await this.sendMessage.send(payload)
    this.logger.info(`=> ${res.status}`)
    return res
  }

  /**
   * B01 - Cold Boot Charging Station
   * B02 - Cold Boot Charging Station - Pending
   * B03 - Cold Boot Charging Station - Rejected
   */
  private receiveBootNotification(payload: BootNotificationRequestDto): BootNotificationResponseDto {
    this.logger.info(`=> Boot reason: ${payload.reason}`)
    this.model.state = ColorStateEnum.Green
    return new BootNotificationResponseDto(this.currentTime, this._heartbeatInterval, RegistrationStatusEnum.Accepted)
  }

  /**
   * G02 - Heartbeat
   * Mentioned in:
   * B01 - Cold Boot Charging Station
   * B04 - Offline Behavior Idle Charging Station
   * E12 - Inform CSMS of an Offline Occurred Transaction
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private receiveHeartbeat(payload: HeartbeatRequestDto): HeartbeatResponseDto {
    // Payload not required
    return new HeartbeatResponseDto(this.currentTime)
  }

  /**
   * J01 - Sending Meter Values not related to a transaction
   */
  private receiveMeterValues(payload: MeterValuesRequestDto): MeterValuesResponseDto {
    if (payload.meterValue) {
      for (const meterValue of payload.meterValue) {
        if (meterValue.sampledValue) {
          for (const sampledValue of meterValue.sampledValue) {
            this.setDefaultValuesForSampledValue(sampledValue)
            if (
              sampledValue.context === ReadingContextEnum['Sample.Periodic'] &&
              sampledValue.measurand === MeasurandEnum['Energy.Active.Import.Register']
            ) {
              const evse = this.model.evseList.find((x) => x.id === payload.evseId)
              if (evse) {
                evse.wattHours = sampledValue.value
              }
            }
          }
        }
      }
    }
    return new MeterValuesResponseDto()
  }

  /**
   * C01 - EV Driver Authorization using RFID
   * C02 - Authorization using a start button
   * C04 - Authorization using PIN-code
   */
  private receiveAuthorize(payload: AuthorizeRequestDto): AuthorizeResponseDto {
    // Invalid or not supported idToken type
    if (payload.idToken.type !== IdTokenEnum.ISO14443 && payload.idToken.type !== IdTokenEnum.ISO15693) {
      return new AuthorizeResponseDto(new IdTokenInfoDto(AuthorizationStatusEnum.Invalid))
    }

    const rfidCard = this.rfidCards.find((rfidCard) => rfidCard.rfid === payload.idToken.idToken && rfidCard.enabled)
    // No rfid card found
    if (!rfidCard) {
      return new AuthorizeResponseDto(new IdTokenInfoDto(AuthorizationStatusEnum.Invalid))
    }

    const transaction = this.transactions.find((transaction) => transaction.rfidCard === null)
    // No open transaction found
    if (!transaction) {
      this.openAuthRfIdCard = rfidCard
      return new AuthorizeResponseDto(new IdTokenInfoDto(AuthorizationStatusEnum.Accepted))
    }

    transaction.rfidCard = rfidCard

    const evse = this.model.evseList.find((evse) => evse.id === transaction.evseId)
    if (evse) {
      evse.currentUser = transaction.rfidCard
    }

    return new AuthorizeResponseDto(new IdTokenInfoDto(AuthorizationStatusEnum.Accepted))
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
   * E11 - Connection Loss During Transaction
   * E12 - Inform CSMS of an Offline Occurred Transaction
   * E13 - Transaction-related message not accepted by CSMS
   */
  private receiveStatusNotification(payload: StatusNotificationRequestDto): StatusNotificationResponseDto {
    let colorState: ColorStateEnum = ColorStateEnum.Unknown
    switch (payload.connectorStatus) {
      case ConnectorStatusEnum.Available:
        colorState = ColorStateEnum.Green
        break
      case ConnectorStatusEnum.Occupied:
      case ConnectorStatusEnum.Reserved:
        colorState = ColorStateEnum.Yellow
        break
      case ConnectorStatusEnum.Unavailable:
      case ConnectorStatusEnum.Faulted:
      default:
        colorState = ColorStateEnum.Red
        break
    }

    const evse = this.model.evseList.find((x) => x.id === payload.evseId)
    if (evse) {
      evse.state = colorState
      evse.currentUser = undefined
    } else {
      const evse = new EvseModel()
      evse.id = payload.evseId
      evse.state = colorState
      evse.wattHours = 0
      this.model.evseList.push(evse)
    }

    return new StatusNotificationResponseDto()
  }

  /**
   * G05 - Lock Failure
   * N07 - Alert Event
   */
  private receiveNotifyEvent(payload: NotifyEventRequestDto): NotifyEventResponseDto {
    this.logger.info(`=> ${payload.generatedAt} | ${payload.seqNo} | ${payload.eventData.length}`)
    return new NotifyEventResponseDto()
  }

  /**
   * Mentioned in:
   * B07 - Get Base Report
   */
  private receiveNotifyReport(payload: NotifyReportRequestDto): NotifyReportResponseDto {
    this.logger.info(`=> ${payload.requestId} | ${payload.generatedAt} | ${payload.seqNo}`)
    return new NotifyReportResponseDto()
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
   * J02 - Sending transaction related Meter Values
   * Mentioned in:
   * B12 - Reset - With Ongoing Transaction
   * C02 - Authorization using a start button
   */
  private receiveTransactionEvent(payload: TransactionEventRequestDto): TransactionEventResponseDto {
    const resPayload = new TransactionEventResponseDto()
    // Transaction E05
    if (payload.idToken) {
      const rfidCard = this.rfidCards.find((rfidCard) => rfidCard.rfid === payload.idToken.idToken && rfidCard.enabled)
      if (!rfidCard) {
        resPayload.idTokenInfo = new IdTokenInfoDto(AuthorizationStatusEnum.Invalid)
        return resPayload
      } else {
        resPayload.idTokenInfo = new IdTokenInfoDto(AuthorizationStatusEnum.Accepted)
      }
    }

    if (payload.meterValue) {
      for (const meterValue of payload.meterValue) {
        if (meterValue.sampledValue) {
          for (const sampledValue of meterValue.sampledValue) {
            this.setDefaultValuesForSampledValue(sampledValue)
            if (
              sampledValue.context === ReadingContextEnum['Sample.Periodic'] &&
              sampledValue.measurand === MeasurandEnum['Energy.Active.Import.Register']
            ) {
              const transaction = this.transactions.find((x) => (x.id = payload.transactionInfo.transactionId))
              if (transaction && transaction.evseId) {
                const evse = this.model.evseList.find((evse) => evse.id === transaction.evseId)
                if (evse) {
                  evse.wattHours = sampledValue.value
                }
              }
            }
          }
        }
      }
    }

    switch (payload.eventType) {
      case TransactionEventEnum.Started:
        {
          if (!payload.evse) {
            this.logger.warn('Start transaction without EVSE information')
            return resPayload
          }
          const evse = this.model.evseList.find((evse) => evse.id === payload.evse.id)
          if (!evse) {
            this.logger.warn('No EVSE found')
            return resPayload
          }

          this.transactions.push({
            rfidCard: this.openAuthRfIdCard,
            id: payload.transactionInfo.transactionId,
            evseId: payload.evse.id,
            startMeterValue: evse.wattHours,
            startDateTime: this.currentTime,
          })
          this.openAuthRfIdCard = null
        }
        break
      case TransactionEventEnum.Ended:
        {
          // Find transaction
          const transaction = this.transactions.find((transaction) => transaction.id === payload.transactionInfo.transactionId)
          if (!transaction) {
            this.logger.warn('No transaction found')
            return resPayload
          }
          if (!transaction.rfidCard) {
            this.logger.warn('No rfid card found')
            return resPayload
          }

          const evse = this.model.evseList.find((evse) => evse.id === transaction.evseId)
          if (!evse) {
            this.logger.warn('No EVSE found')
            return resPayload
          }

          if (!transaction.rfidCard.chargingItems) {
            transaction.rfidCard.chargingItems = []
          }

          transaction.rfidCard.chargingItems.push({
            start: transaction.startDateTime,
            end: this.currentTime,
            wattHours: evse.wattHours - transaction.startMeterValue,
          })

          // Remove transaction
          this.transactions = this.transactions.filter((transaction) => transaction.id !== payload.transactionInfo.transactionId)
        }
        break
      case TransactionEventEnum.Updated:
      default:
        break
    }

    return resPayload
  }

  /**
   * P02 - Data Transfer to the CSMS
   */
  private receiveDataTransfer(payload: DataTransferRequestDto): DataTransferResponseDto {
    if (payload.data) {
      return new DataTransferResponseDto(DataTransferStatusEnum.Accepted)
    } else {
      return new DataTransferResponseDto(DataTransferStatusEnum.Rejected)
    }
  }

  private setDefaultValuesForSampledValue(sampledValue: SampledValueDto): void {
    sampledValue.context = sampledValue.context || ReadingContextEnum['Sample.Periodic']
    sampledValue.location = sampledValue.location || LocationEnum.Outlet
    sampledValue.measurand = sampledValue.measurand || MeasurandEnum['Energy.Active.Import.Register']
  }
}
