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
  RequestToResponseType,
} from '@yellowgarbagebag/ocpp-lib'
import { v4 as uuid } from 'uuid'
import { IReceiveMessage } from './i-receive-message'

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

  public constructor() {
    // nothing to do
  }

  protected abstract connect(
    receiveMessage: IReceiveMessage,
    uniqueIdentifier: string,
    username: string,
    password: string,
    server: string,
  ): Promise<void>

  protected onMessage(data: any, receiveMessage: IReceiveMessage): void {
    const msg = OcppMessageHandler.instance.validateAndConvert(data)

    if (msg instanceof OcppRequestMessageDto) {
      PayloadValidator.instance.validateRequest(msg)
      PayloadConverter.instance.convertRequest(msg)
      // Verarbeitung der Daten
      const responsePayload: ResponseBaseDto = receiveMessage.receive(msg.payload)
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
          const idx = this.requestList.indexOf(pendingPromise)
          this.requestList.splice(idx, 1)
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
