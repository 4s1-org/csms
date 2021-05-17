import { plainToClass } from 'class-transformer'
import { RpcActionEnum } from '../generated/rpc-action.enum'
import { RpcBaseDto } from './calls/rpc-base.dto'
import { RpcCallerrorDto } from './calls/rpc-callerror.dto'
import { RpcCallresultDto } from './calls/rpc-callresult.dto'
import { RpcValidationError } from './rpc-validation-error'
import { RpcCallDto } from './calls/rpc-call.dto'
import { RpcErrorCodeEnum } from './rpc-error-code.enum'
import { RpcMessageTypeIdEnum } from './rpc-message-type-id.enum'

export class RpcHandler {
  private static _instance: RpcHandler

  private constructor() {
    // nothing to do
  }

  public static get instance(): RpcHandler {
    if (!this._instance) {
      this._instance = new RpcHandler()
    }
    return this._instance
  }

  public validateAndConvert(data: unknown): RpcBaseDto {
    if (!data) {
      throw new RpcValidationError('', RpcErrorCodeEnum.RpcFrameworkError, 'Invalid data format received')
    }
    if (typeof data !== 'string') {
      throw new RpcValidationError('', RpcErrorCodeEnum.RpcFrameworkError, 'Invalid data format received')
    }

    try {
      data = JSON.parse(data)
    } catch (err) {
      throw new RpcValidationError('', RpcErrorCodeEnum.RpcFrameworkError, 'Invalid data format received')
    }

    if (!Array.isArray(data)) {
      throw new RpcValidationError('', RpcErrorCodeEnum.RpcFrameworkError, 'No array received')
    }

    const [messageTypeId] = data

    if (typeof messageTypeId !== 'number') {
      throw new RpcValidationError('', RpcErrorCodeEnum.RpcFrameworkError, 'MessageTypeId is not a number')
    }

    if (messageTypeId < 2 || messageTypeId > 4) {
      throw new RpcValidationError('', RpcErrorCodeEnum.MessageTypeNotSupported, 'Invalid messageTypeId')
    }

    if (messageTypeId === RpcMessageTypeIdEnum.Call && data.length === 4) {
      const [messageTypeId, messageId, action, payload] = data
      this.validateMessageId(messageId)
      this.validateAction(messageId, action)
      this.validatePayload(messageId, payload)

      return plainToClass(RpcCallDto, { messageTypeId, messageId, action, payload })
    } else if (messageTypeId === RpcMessageTypeIdEnum.Result && data.length === 3) {
      const [messageTypeId, messageId, payload] = data
      this.validateMessageId(messageId)
      this.validatePayload(messageId, payload)

      return plainToClass(RpcCallresultDto, { messageTypeId, messageId, payload })
    } else if (messageTypeId === RpcMessageTypeIdEnum.Error && data.length === 5) {
      const [messageTypeId, messageId, errorCode, errorDescription, errorDetails] = data
      this.validateMessageId(messageId)
      this.validateErrorCode(messageId, errorCode)
      this.validateErrorDescription(messageId, errorDescription)
      this.validateErrorDetails(messageId, errorDetails)

      return plainToClass(RpcCallerrorDto, {
        messageTypeId,
        messageId,
        errorCode,
        errorDescription,
        errorDetails,
      })
    } else {
      throw new RpcValidationError('', RpcErrorCodeEnum.RpcFrameworkError, 'Unknown Message')
    }
  }

  private validateErrorDetails(messageId: string, errorDetails: any): void {
    if (!errorDetails) {
      throw new RpcValidationError(messageId, RpcErrorCodeEnum.RpcFrameworkError, 'Missing error details')
    }
  }

  private validateErrorDescription(messageId: string, errorDescription: any): void {
    if (errorDescription === null || errorDescription === undefined) {
      throw new RpcValidationError(messageId, RpcErrorCodeEnum.RpcFrameworkError, 'Missing error description')
    }

    if (typeof errorDescription !== 'string') {
      throw new RpcValidationError(messageId, RpcErrorCodeEnum.RpcFrameworkError, 'Error description is not a string')
    }

    if (errorDescription.length > 255) {
      throw new RpcValidationError(messageId, RpcErrorCodeEnum.RpcFrameworkError, 'Error description is too long')
    }
  }

  private validateErrorCode(messageId: string, errorCode: any): void {
    if (typeof errorCode !== 'string') {
      throw new RpcValidationError(messageId, RpcErrorCodeEnum.RpcFrameworkError, 'Error code is not a string')
    }

    if (!Object.values(RpcErrorCodeEnum).includes(errorCode as RpcErrorCodeEnum)) {
      throw new RpcValidationError(messageId, RpcErrorCodeEnum.RpcFrameworkError, 'Unknown error code')
    }
  }

  private validateMessageId(messageId: any): void {
    if (typeof messageId !== 'string') {
      throw new RpcValidationError('', RpcErrorCodeEnum.RpcFrameworkError, 'MessageId is not a string')
    }

    if (messageId.length > 36) {
      throw new RpcValidationError(messageId, RpcErrorCodeEnum.RpcFrameworkError, 'MessageId is too long')
    }
  }

  private validatePayload(messageId: string, payload: any): void {
    if (!payload) {
      throw new RpcValidationError(messageId, RpcErrorCodeEnum.RpcFrameworkError, 'Wrong payload')
    }
  }

  private validateAction(messageId: string, action: any): void {
    if (typeof action !== 'string') {
      throw new RpcValidationError(messageId, RpcErrorCodeEnum.RpcFrameworkError, 'Action is not a string')
    }

    if (!Object.values(RpcActionEnum).includes(action as RpcActionEnum)) {
      throw new RpcValidationError(messageId, RpcErrorCodeEnum.NotImplemented, action)
    }
  }
}
