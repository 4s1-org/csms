import {
  BootNotificationRequestDto,
  BootNotificationResponseDto,
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
  OcppErrorMessageDto,
  OcppActionEnum,
  OcppRequestMessageDto,
  IChargingStation,
  SetVariablesRequestDto,
  SetVariableDataDto,
  ComponentDto,
  VariableDto,
  SetVariablesResponseDto,
  ChangeAvailabilityRequestDto,
  OperationalStatusEnum,
  ChangeAvailabilityResponseDto,
  GetVariablesRequestDto,
  GetVariableDataDto,
  GetVariablesResponseDto,
  NotifyEventRequestDto,
  NotifyEventResponseDto,
} from '@yellowgarbagebag/csms-ocpp-lib'
import { Logger } from '@yellowgarbagebag/csms-common-lib'

export class ChargingStation implements IChargingStation {
  public readonly logger = new Logger(this.uniqueIdentifier)
  private sendList: OcppRequestMessageDto[] = []

  public constructor(public readonly uniqueIdentifier: string, private username: string, private password: string) {
    // nothing to do
  }

  public connect(): void {
    this.logger.info('Connected')
  }

  public disconnect(): void {
    this.logger.info('Disconnected')
  }

  public addToSendList(requestMessage: OcppRequestMessageDto): void {
    this.sendList.push(requestMessage)
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

  public incomingRequestMessage(payload: RequestBaseDto): ResponseBaseDto {
    if (payload instanceof BootNotificationRequestDto) {
      return this.receiveBootNotificationRequest(payload)
    }
    if (payload instanceof HeartbeatRequestDto) {
      return this.receiveHeartbeatRequest(payload)
    }
    if (payload instanceof StatusNotificationRequestDto) {
      return this.receiveStatusNotificationRequest(payload)
    }
    if (payload instanceof AuthorizeRequestDto) {
      return this.receiveAuthorizeRequest(payload)
    }
    if (payload instanceof MeterValuesRequestDto) {
      return this.receiveMeterValuesRequest(payload)
    }
    if (payload instanceof NotifyEventRequestDto) {
      return this.receiveNotifyEventRequest(payload)
    }

    throw new CsmsError(OcppErrorCodeEnum.NotSupported)
  }

  public incomingResponseMessage(payload: ResponseBaseDto): void {
    if (payload instanceof SetVariablesResponseDto) {
      return this.receiveSetVariableResponse(payload)
    }
    if (payload instanceof ChangeAvailabilityResponseDto) {
      return this.receiveChangeAvailabilityResponse(payload)
    }
    if (payload instanceof GetVariablesResponseDto) {
      return this.receiveGetVariablesResponse(payload)
    }

    throw new CsmsError(OcppErrorCodeEnum.NotSupported)
  }

  public incomingErrorMessage(error: OcppErrorMessageDto): void {
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
  private receiveBootNotificationRequest(payload: BootNotificationRequestDto): BootNotificationResponseDto {
    return new BootNotificationResponseDto(new Date().toISOString(), 1, RegistrationStatusEnum.Accepted)
  }

  /**
   * G02 - Heartbeat
   */
  private receiveHeartbeatRequest(payload: HeartbeatRequestDto): HeartbeatResponseDto {
    return new HeartbeatResponseDto(new Date().toISOString())
  }

  /**
   * J01 - Sending Meter Values not related to a transaction
   */
  private receiveMeterValuesRequest(payload: MeterValuesRequestDto): MeterValuesResponseDto {
    return new MeterValuesResponseDto()
  }

  /**
   * C01 - EV Driver Authorization using RFID
   * C04 - Authorization using PIN-code
   */
  private receiveAuthorizeRequest(payload: AuthorizeRequestDto): AuthorizeResponseDto {
    if (payload.idToken.type === IdTokenEnum.KeyCode) {
      if (payload.idToken.idToken === '1234') {
        // C04.FR.02 - alles richtig
        return new AuthorizeResponseDto(new IdTokenInfoDto(AuthorizationStatusEnum.Accepted))
      } else {
        // C04.FR.01 - PIN falsch
        return new AuthorizeResponseDto(new IdTokenInfoDto(AuthorizationStatusEnum.Invalid))
      }
    }

    return new AuthorizeResponseDto(new IdTokenInfoDto(AuthorizationStatusEnum.Invalid))
  }

  /**
   * B05 - Set Variables
   */
  public sendSetVariablesRequest(): SetVariablesRequestDto {
    return new SetVariablesRequestDto([
      new SetVariableDataDto('Foo', new ComponentDto('Test'), new VariableDto('yyy')),
      new SetVariableDataDto('Bar', new ComponentDto('Test'), new VariableDto('xxx')),
    ])
  }

  /**
   * B05 - Set Variables
   */
  private receiveSetVariableResponse(payload: SetVariablesResponseDto): void {
    //
  }

  /**
   * G01 - Status Notification
   */
  private receiveStatusNotificationRequest(payload: StatusNotificationRequestDto): StatusNotificationResponseDto {
    return new StatusNotificationResponseDto()
  }

  /**
   * G03 - Change Availability EVSE/Connector
   */
  public sendChangeAvailabilityRequest(): ChangeAvailabilityRequestDto {
    return new ChangeAvailabilityRequestDto(OperationalStatusEnum.Operative)
  }

  /**
   * G03 - Change Availability EVSE/Connector
   */
  private receiveChangeAvailabilityResponse(payload: ChangeAvailabilityResponseDto): void {
    //
  }

  /**
   * B06 - Get Variables
   */
  public sendGetVariablesRequest(): GetVariablesRequestDto {
    return new GetVariablesRequestDto([new GetVariableDataDto(new ComponentDto('test'), new VariableDto('foo'))])
  }

  /**
   * B06 - Get Variables
   */
  private receiveGetVariablesResponse(payload: GetVariablesResponseDto): void {
    //
  }

  /**
   * G05 - Lock Failure
   */
  private receiveNotifyEventRequest(payload: NotifyEventRequestDto): NotifyEventResponseDto {
    return new NotifyEventResponseDto()
  }
}
