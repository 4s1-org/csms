import { Catch, ArgumentsHost, HttpException, BadRequestException } from '@nestjs/common'
import { WsArgumentsHost } from '@nestjs/common/interfaces'
import { BaseWsExceptionFilter } from '@nestjs/websockets'
import { OcppCallErrorDto, OcppErrorCode } from '@yellowgarbagebag/csms-shared'
import { OcppWsException } from './csms/ocpp-exception'

@Catch()
export class AllWsExceptionsFilter extends BaseWsExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const ws: WsArgumentsHost = host.switchToWs()

    if (exception instanceof OcppWsException) {
      const error = new OcppCallErrorDto(
        exception.messageId || '',
        exception.errorCode,
        exception.errorDescription,
        exception.errorDetails || {},
      )
      ws.getClient().emit('ocpp', error.toMessage())
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

    ws.getClient().emit('ocpp', error.toMessage())
  }
}
