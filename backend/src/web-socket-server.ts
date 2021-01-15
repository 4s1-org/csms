import WebSocket from 'ws'
import { Logger, OcppCallErrorDto, OcppCallResultDto, OcppErrorCode } from '@yellowgarbagebag/csms-shared'
import { IncomingMessage } from 'http'
import { ChargingStation } from './charging-station'
import { OcppError } from './ocpp-error'

export abstract class WebSocketServer {
  private static server: WebSocket.Server

  public static stop(): void {
    if (this.server) {
      this.server.close()
    }
  }

  public static run(port: number): void {
    const logger = new Logger('Core')
    const chargingStations: ChargingStation[] = []

    this.server = new WebSocket.Server({
      port,
    })

    logger.info(`WebSocket Server is running on port ${this.server.options.port}`)

    this.server.on('connection', (socket: WebSocket, request: IncomingMessage) => {
      const socketId = request.headers['sec-websocket-key']
      logger.info(`Client connected: ${socketId}`)

      let cs: ChargingStation | undefined

      const parts = request.url?.split('/')
      if (parts && parts[1] === 'ocpp' && parts[2] === '2.0.1' && parts.length >= 4) {
        const uniqueIdentifier = parts[3]
        cs = chargingStations.find((x) => x.uniqueIdentifier === uniqueIdentifier)
        if (!cs) {
          cs = new ChargingStation(uniqueIdentifier)
          chargingStations.push(cs)
        }
        cs.connect()
      } else {
        logger.error(`Client URL is invalid "${request.url}"`)
      }

      socket.onclose = (): void => {
        if (cs) {
          cs.disconnect()
        }
      }

      socket.onerror = (err: any): void => {
        // this.logger.error('Error' + err)
      }

      socket.onmessage = (msg: WebSocket.MessageEvent): void => {
        try {
          if (cs) {
            const dto: OcppCallResultDto = cs.messageReceived(msg)
            socket.send(dto.toString())
          }
        } catch (err) {
          if (err instanceof OcppError) {
            socket.send(err.dto.toString())
          } else {
            logger.error('Internal Server Error')
            console.log(err)
            const dto = new OcppCallErrorDto('', OcppErrorCode.InternalError)
            socket.send(dto.toString())
          }
        }
      }
    })
  }
}
