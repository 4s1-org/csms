import { Catch, ArgumentsHost, HttpException, BadRequestException } from '@nestjs/common'
import { WsArgumentsHost } from '@nestjs/common/interfaces'
import { BaseWsExceptionFilter, WsException } from '@nestjs/websockets'
import { OcppCallErrorDto, OcppErrorCodes } from '@yellowgarbagebag/csms-shared'

@Catch()
export class AllWsExceptionsFilter extends BaseWsExceptionFilter {
  catch(exception: WsException, host: ArgumentsHost): void {
    const ws: WsArgumentsHost = host.switchToWs()
    const data = ws.getData() as any[]
    // An zweiter Stelle im Array steht die MessageId, sofern die Nachricht einigermassen gültig war.
    const messageId = data[1] || ''

    const error = new OcppCallErrorDto(messageId, OcppErrorCodes.InternalError, '', {})

    if (exception instanceof HttpException) {
      if (exception instanceof BadRequestException) {
        error.errorCode = OcppErrorCodes.FormatViolation
        error.errorDescription = exception.message
      } else {
        error.errorCode = OcppErrorCodes.InternalError
        error.errorDescription = exception.message
      }
    } else {
      error.errorCode = OcppErrorCodes.InternalError
      error.errorDescription = 'No further informations'
    }

    ws.getClient().emit('ocpp', error.toMessage())
  }
}
