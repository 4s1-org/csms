import { plainToClass } from 'class-transformer'
import { OcppBaseCallDto } from '../../calls/ocpp-base-call.dto'
import { OcppErrorCallDto } from '../../calls/ocpp-error-call.dto'
import { OcppErrorCodeEnum } from '../../calls/ocpp-error-code.enum'
import { OcppMessageTypeIdEnum } from '../../calls/ocpp-message-type-id.enum'
import { OcppRequestCallDto } from '../../calls/ocpp-request-call.dto'
import { OcppResponseCallDto } from '../../calls/ocpp-response-call.dto'
import { OcppActionEnum } from '../../generated/ocpp-action.enum'
import { CsmsCallValidationError } from '../errors/csms-call-validation-error'

export abstract class CallConverter {
  public static convert(data: unknown): OcppBaseCallDto {
    if (!data) {
      throw new CsmsCallValidationError('', OcppErrorCodeEnum.RpcFrameworkError, 'Invalid data format received')
    }
    if (typeof data !== 'string') {
      throw new CsmsCallValidationError('', OcppErrorCodeEnum.RpcFrameworkError, 'Invalid data format received')
    }

    try {
      data = JSON.parse(data)
    } catch (err) {
      console.log(err)
      throw new CsmsCallValidationError('', OcppErrorCodeEnum.RpcFrameworkError, 'Invalid data format received')
    }

    if (!Array.isArray(data)) {
      throw new CsmsCallValidationError('', OcppErrorCodeEnum.RpcFrameworkError, 'No array received')
    }

    if (typeof data[0] !== 'number') {
      throw new CsmsCallValidationError('', OcppErrorCodeEnum.RpcFrameworkError, 'MessageTypeId is not a number')
    }

    const messageTypeId = +data[0]

    if (messageTypeId === OcppMessageTypeIdEnum.Call && data.length === 4) {
      const messageId = data[1]
      const action = data[2]
      const payload = data[3]

      this.validateMessageId(messageId)
      this.validateAction(messageId, action)
      this.validatePayload(messageId, payload)

      return plainToClass(OcppRequestCallDto, { messageTypeId, messageId, action, payload })
    } else if (messageTypeId === OcppMessageTypeIdEnum.Result && data.length === 3) {
      const messageId = data[1]
      const payload = data[2]

      this.validateMessageId(messageId)
      this.validatePayload(messageId, payload)

      return plainToClass(OcppResponseCallDto, { messageTypeId, messageId, payload })
    } else if (messageTypeId === OcppMessageTypeIdEnum.Error && data.length === 5) {
      const messageId = data[1]
      const errorCode = data[2]
      const errorDescription = data[2]
      const errorDetails = data[3]

      this.validateMessageId(messageId)
      this.validateErrorCode(messageId, errorCode)
      this.validateErrorDescription(messageId, errorDescription)
      this.validateErrorDetails(messageId, errorDetails)

      return plainToClass(OcppErrorCallDto, {
        messageTypeId,
        messageId,
        errorCode,
        errorDescription,
        errorDetails,
      })
    } else {
      throw new CsmsCallValidationError('', OcppErrorCodeEnum.RpcFrameworkError, 'Unknown Call')
    }
  }

  private static validateErrorDetails(messageId: string, errorDetails: any): void {
    if (!errorDetails) {
      throw new CsmsCallValidationError(messageId, OcppErrorCodeEnum.RpcFrameworkError, 'Missing error details')
    }
  }

  private static validateErrorDescription(messageId: string, errorDescription: any): void {
    if (errorDescription === null || errorDescription === undefined) {
      throw new CsmsCallValidationError(messageId, OcppErrorCodeEnum.RpcFrameworkError, 'Missing error description')
    }

    if (typeof errorDescription !== 'string') {
      throw new CsmsCallValidationError(
        messageId,
        OcppErrorCodeEnum.RpcFrameworkError,
        'Error description is not a string',
      )
    }

    if (errorDescription.length > 255) {
      throw new CsmsCallValidationError(messageId, OcppErrorCodeEnum.RpcFrameworkError, 'Error description is too long')
    }
  }

  private static validateErrorCode(messageId: string, errorCode: any): void {
    if (typeof errorCode !== 'string') {
      throw new CsmsCallValidationError(messageId, OcppErrorCodeEnum.RpcFrameworkError, 'Error code is not a string')
    }

    if (!Object.values(OcppErrorCodeEnum).includes(errorCode as OcppErrorCodeEnum)) {
      throw new CsmsCallValidationError(messageId, OcppErrorCodeEnum.RpcFrameworkError, 'Unknown error code')
    }
  }

  private static validateMessageId(messageId: any): void {
    if (typeof messageId !== 'string') {
      throw new CsmsCallValidationError('', OcppErrorCodeEnum.RpcFrameworkError, 'MessageId is not a string')
    }

    if (messageId.length > 36) {
      throw new CsmsCallValidationError(messageId, OcppErrorCodeEnum.RpcFrameworkError, 'MessageId is too long')
    }
  }

  private static validatePayload(messageId: string, payload: any): void {
    if (!payload) {
      throw new CsmsCallValidationError(messageId, OcppErrorCodeEnum.RpcFrameworkError, 'Wrong payload')
    }
  }

  private static validateAction(messageId: string, action: any): void {
    if (typeof action !== 'string') {
      throw new CsmsCallValidationError(messageId, OcppErrorCodeEnum.RpcFrameworkError, 'Action is not a string')
    }

    if (!Object.values(OcppActionEnum).includes(action as OcppActionEnum)) {
      throw new CsmsCallValidationError(messageId, OcppErrorCodeEnum.RpcFrameworkError, 'Unknown error code')
    }
  }
}
