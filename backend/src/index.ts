import WebSocket from 'ws'
//import url from 'url'
import { OcppCallErrorDto, OcppCallResultDto } from '@yellowgarbagebag/csms-shared'
import { createLogger } from './logger'
import { IncomingMessage } from 'http'
import { ChargingStation } from './charging-station'

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
  if (parts && parts.length >= 4) {
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

  ws.on('message', (msg: any) => {
    try {
      if (cs) {
        const res: OcppCallResultDto | OcppCallErrorDto = cs.messageReceived(msg)
        ws.send(JSON.stringify(res.toMessage()))
      }
    } catch (err) {
      logger.error('Error', err)
    }
  })
})
