import { Catch, ArgumentsHost, HttpException, BadRequestException } from '@nestjs/common'
import { WsArgumentsHost } from '@nestjs/common/interfaces'
import { BaseWsExceptionFilter } from '@nestjs/websockets'
import { OcppCallErrorDto, OcppErrorCode } from '@yellowgarbagebag/csms-shared'
import { OcppWsException } from './csms/ocpp-exception'

@Catch()
export class AllWsExceptionsFilter extends BaseWsExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const ws: WsArgumentsHost = host.switchToWs()
    // const client = ws.getClient()

    // Acknowledge Callback, sofern vorhanden
    const callback: (data: any) => void | undefined = host.getArgByIndex(2)

    if (exception instanceof OcppWsException) {
      console.log('FEHLER', exception)
      const error = new OcppCallErrorDto(
        exception.messageId || '',
        exception.errorCode,
        exception.errorDescription,
        exception.errorDetails || {},
      )
      if (callback && typeof callback === 'function') {
        callback(error.toMessage())
      } else {
        super.catch(exception, host)
      }
      return
    }

    console.log('--------------------------------------', JSON.stringify(exception))
    const data = ws.getData() as any
    // An zweiter Stelle im Array steht die MessageId, sofern die Nachricht einigermassen gültig war.
    const messageId = (data && data[1]) || ''

    const error = new OcppCallErrorDto(messageId, OcppErrorCode.InternalError, '', {})
    if (exception instanceof HttpException) {
      if (exception instanceof BadRequestException) {
        error.errorCode = OcppErrorCode.FormatViolation
        error.errorDescription = exception.message
      } else {
        error.errorCode = OcppErrorCode.InternalError
        error.errorDescription = exception.message
      }
    } else {
      error.errorCode = OcppErrorCode.InternalError
      error.errorDescription = 'No further informations'
    }

    ws.getClient().send(error.toMessage())
  }
}
