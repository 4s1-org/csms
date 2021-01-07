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
