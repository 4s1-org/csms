import WebSocket from 'ws'
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
} from '@yellowgarbagebag/ocpp-lib'
import { v4 as uuid } from 'uuid'

class PendingPromises {
  public readonly timestamp: number

  constructor(
    public readonly msg: OcppRequestMessageDto,
    public readonly resolve: (value: ResponseBaseDto) => void,
    public readonly reject: (reason?: any) => void,
  ) {
    this.timestamp = Date.now()
  }
}

export class WsClient {
  private requestList: PendingPromises[] = []
  private socket: WebSocket | undefined

  public constructor(private readonly onMsgCallback: (payload: RequestBaseDto) => ResponseBaseDto) {
    // nothing to do
  }

  public connect(
    uniqueIdentifier: string,
    username: string,
    password: string,
    server = 'localhost:3000',
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      this.socket = new WebSocket(`ws://${server}/ocpp/${uniqueIdentifier}`, ['ocpp2.0.1'], {
        headers: {
          authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
        },
      })

      this.socket.onopen = (): void => {
        resolve()
      }

      this.socket.onmessage = (data: WebSocket.MessageEvent): void => {
        const msg = OcppMessageHandler.instance.validateAndConvert(data.data)

        if (msg instanceof OcppRequestMessageDto) {
          PayloadValidator.instance.validateRequest(msg)
          PayloadConverter.instance.convertRequest(msg)
          // Verarbeitung der Daten
          const responsePayload: ResponseBaseDto = this.onMsgCallback(msg.payload)
          // Antwortobjekt erstellen
          const responseCall = new OcppResponseMessageDto(msg.messageId, responsePayload)
          // Anwortdaten validieren (nice to have)
          PayloadValidator.instance.validateResponse(responseCall, msg.action)
          if (this.socket && this.socket.OPEN) {
            this.socket.send(responseCall.toMessageString())
          }
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
          return
        }
        throw new Error('Invalid pending promise state')
      }

      this.socket.onerror = (err: WebSocket.ErrorEvent): void => {
        reject('There was an error on WebSocket connection. ' + err.message)
      }

      this.socket.onclose = (): void => {
        this.socket = undefined
      }
    })
  }

  public disconnect(): void {
    if (this.socket) {
      this.socket.close()
    }
  }

  public send(payload: RequestBaseDto): Promise<ResponseBaseDto> {
    return new Promise((resolve, reject) => {
      const mapping = actionDtoMapping.find((x) => payload instanceof x.requestDto)
      if (!mapping) {
        throw new Error('No action mapping found' + payload)
      }

      const msg = new OcppRequestMessageDto(uuid(), mapping.action, payload)
      this.requestList.push(new PendingPromises(msg, resolve, reject))
      if (this.socket && this.socket.OPEN) {
        this.socket.send(msg.toMessageString())
      } else {
        reject('Socket not open')
      }
    })
  }
}
