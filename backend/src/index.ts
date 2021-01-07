import WebSocket from 'ws'
import { OcppCallErrorDto, OcppCallResultDto, OcppErrorCode } from '@yellowgarbagebag/csms-shared'
import { createLogger } from './logger'
import { IncomingMessage, Server } from 'http'
import { ChargingStation } from './charging-station'
import { WebSocketServer } from './web-socket-server'

WebSocketServer.run()
