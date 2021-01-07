import WebSocket from 'ws'
import { OcppCallErrorDto, OcppCallResultDto, OcppErrorCode } from '@yellowgarbagebag/csms-shared'
import { createLogger } from './logger'
import { IncomingMessage } from 'http'
import { ChargingStation } from './charging-station'
import { OcppError } from './ocpp-error'

const logger = createLogger('Core')
const chargingStations: ChargingStation[] = []

const ws = new WebSocket.Server({
  port: 3000,
})

logger.info(`WebSocket Server is running on port ${ws.options.port}`)

ws.on('connection', (ws: WebSocket, request: IncomingMessage) => {
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

  ws.on('close', () => {
    if (cs) {
      cs.disconnect()
    }
  })

  ws.on('message', (data: any) => {
    try {
      if (cs) {
        const dto: OcppCallResultDto = cs.messageReceived(data)
        ws.send(JSON.stringify(dto.toMessage()))
      }
    } catch (err) {
      if (err instanceof OcppError) {
        ws.send(JSON.stringify(err.dto.toMessage()))
      } else {
        logger.error('Internal Server Error')
        console.log(err)
        const dto = new OcppCallErrorDto('', OcppErrorCode.InternalError)
        ws.send(JSON.stringify(dto.toMessage()))
      }
    }
  })
})
