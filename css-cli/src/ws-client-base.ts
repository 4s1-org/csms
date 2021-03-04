import {
  RequestBaseDto,
  actionDtoMapping,
  OcppRequestMessageDto,
  OcppMessageHandler,
  OcppResponseMessageDto,
  PayloadValidator,
  PayloadConverter,
  ResponseBaseDto,
  OcppErrorMessageDto,
  BootNotificationRequestDto,
  BootNotificationResponseDto,
  StatusNotificationRequestDto,
  StatusNotificationResponseDto,
  SetVariablesRequestDto,
  SetVariablesResponseDto,
  ChangeAvailabilityResponseDto,
  ChangeAvailabilityRequestDto,
  RequestToResponseType,
} from '@yellowgarbagebag/ocpp-lib'
import { v4 as uuid } from 'uuid'

class PendingPromises {
  public readonly timestamp: number

  constructor(
    public readonly msg: OcppRequestMessageDto,
    public readonly resolve: (value: any) => void,
    public readonly reject: (reason?: any) => void,
  ) {
    this.timestamp = Date.now()
  }
}

export abstract class WsClientBase {
  private requestList: PendingPromises[] = []

  public constructor(private readonly onMsgCallback: (payload: RequestBaseDto) => ResponseBaseDto) {
    // nothing to do
  }

  protected abstract connect(
    uniqueIdentifier: string,
    username: string,
    password: string,
    server: string,
  ): Promise<void>

  protected onMessage(data: any): void {
    const msg = OcppMessageHandler.instance.validateAndConvert(data)

    if (msg instanceof OcppRequestMessageDto) {
      PayloadValidator.instance.validateRequest(msg)
      PayloadConverter.instance.convertRequest(msg)
      // Verarbeitung der Daten
      const responsePayload: ResponseBaseDto = this.onMsgCallback(msg.payload)
      // Antwortobjekt erstellen
      const responseCall = new OcppResponseMessageDto(msg.messageId, responsePayload)
      // Anwortdaten validieren (nice to have)
      PayloadValidator.instance.validateResponse(responseCall, msg.action)
      this.sendInternal(responseCall.toMessageString())
      return
    } else if (msg instanceof OcppResponseMessageDto) {
      const pendingPromise = this.requestList[0]
      if (pendingPromise) {
        if (pendingPromise.msg.messageId === msg.messageId) {
          PayloadValidator.instance.validateResponse(msg, pendingPromise.msg.action)
          PayloadConverter.instance.convertResponse(msg, pendingPromise.msg.action)
          pendingPromise.resolve(msg.payload)
          return
        }
        pendingPromise.reject()
      }
    } else if (msg instanceof OcppErrorMessageDto) {
      // ToDo
      return
    }
    throw new Error('Invalid pending promise state')
  }

  public send<T extends RequestBaseDto>(payload: T): Promise<RequestToResponseType<T>> {
    return new Promise((resolve, reject) => {
      const mapping = actionDtoMapping.find((x) => payload instanceof x.requestDto)
      if (!mapping) {
        throw new Error('No action mapping found' + payload)
      }

      const msg = new OcppRequestMessageDto(uuid(), mapping.action, payload)
      this.requestList.push(new PendingPromises(msg, resolve, reject))
      if (!this.sendInternal(msg.toMessageString())) {
        reject('Socket not open')
      }
    })
  }

  protected abstract sendInternal(msg: string): boolean
}
