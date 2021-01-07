import WebSocket from 'ws'
import http from 'http'
import url from 'url'
import {
  BootNotificationRequestDto,
  BootNotificationResponseDto,
  OcppCallDto,
  OcppCallErrorDto,
  OcppCallResultDto,
  OcppErrorCode,
  OcppMessageEnum,
  RegistrationStatusEnum,
} from '@yellowgarbagebag/csms-shared'
import { plainToClass } from 'class-transformer'
import { validate, validateSync } from 'class-validator'

const server = http.createServer({})
const ws = new WebSocket.Server({
  server,
})

ws.on('connection', (ws: any, request: any, client: any) => {
  const ip = request.socket.remoteAddress
  ws.on('message', (msg: any) => {
    try {
      console.log(`Received message ${msg} from user ${client}, ` + ip)
      msg = JSON.parse(msg)

      msg = {
        messageTypeId: msg[0],
        messageId: msg[1],
        action: msg[2],
        payload: msg[3],
      }

      ws.send('Willkommen')
      console.log('MSG', msg)
      const ocppCall = plainToClass(OcppCallDto, msg as unknown)
      console.log('--MSG', ocppCall)
      const errors = validateSync(ocppCall)
      console.log('----MSG', ocppCall)
      if (errors.length > 0) {
        console.log(errors)
        ws.send(new OcppCallErrorDto('', OcppErrorCode.FormatViolation, 'foo', {}).toMessage())
      }

      switch (ocppCall.action) {
        case OcppMessageEnum.BootNotification:
          const bootNotification = plainToClass(BootNotificationRequestDto, ocppCall.payload as unknown)
          const errors2 = validateSync(bootNotification)
          if (errors2.length > 0) {
            console.log(errors2)
            ws.send(new OcppCallErrorDto('', OcppErrorCode.FormatViolation, 'bar', {}).toMessage())
          }
          const res = new BootNotificationResponseDto('2013-02-01T20:53:32.486Z', 300, RegistrationStatusEnum.Accepted)
          const res2 = new OcppCallResultDto(ocppCall.messageId, res).toMessage()
          ws.send(JSON.stringify(res2))
          break
        default: {
          ws.send('res2')
        }
      }
    } catch (e) {
      console.log('Error', e)
    }
  })
})

server.listen(3000)

// ---------------------------------

// private async convertInputToOcppCall(data: unknown): Promise<OcppCallDto> {
//   if (!data) {
//     throw new OcppWsException(OcppErrorCode.RpcFrameworkError, 'Invalid data format received')
//   }
//   if (!Array.isArray(data)) {
//     throw new OcppWsException(OcppErrorCode.RpcFrameworkError, 'No array received')
//   }
//   if (data.length !== 4) {
//     throw new OcppWsException(OcppErrorCode.RpcFrameworkError, 'Received array has not exact 4 items')
//   }
//   if (data[0] !== OcppMessageTypeIdEnum.Call) {
//     throw new OcppWsException(OcppErrorCode.RpcFrameworkError, 'MessageType is not 2', data[1])
//   }
//   if (!Object.values(OcppMessageEnum).includes(data[2])) {
//     throw new OcppWsException(OcppErrorCode.NotImplemented, data[2], data[1])
//   }

//   const obj = {
//     messageTypeId: data[0],
//     messageId: data[1],
//     action: data[2],
//     payload: data[3],
//   }

//   const ocppCall = plainToClass(OcppCallDto, obj)
//   await this.validate(ocppCall, ocppCall.messageId)
//   return ocppCall
// }

// ---------------------------------

// public async handleConnection(client: Socket): Promise<void> {
//   this.logger.log(`Client connected: ${client.id}`)
//   const req: IncomingMessage = client.request as IncomingMessage
//   const parts = req.url?.split('/')
//   if (parts && parts.length >= 4) {
//     const chargingStation = this.getChargingStation(parts[3])
//     chargingStation.socketId = client.id
//   } else {
//     this.logger.log(`Client URL is invalid "${req.url}"`)
//     client.disconnect()
//   }
// }

// ---------------------------------

// private chargingStations: ChargingStation[] = []

// private getChargingStation(uniqueIdentifier: string): ChargingStation {
//   let chargingStation = this.chargingStations.find((x) => x.uniqueIdentifier === uniqueIdentifier)
//   if (!chargingStation) {
//     chargingStation = new ChargingStation(uniqueIdentifier)
//     this.chargingStations.push(chargingStation)
//   }
//   return chargingStation
// }

// ---------------------------------
// ---------------------------------
