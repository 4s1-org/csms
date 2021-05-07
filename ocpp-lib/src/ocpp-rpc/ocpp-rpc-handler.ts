import { plainToClass } from 'class-transformer'
import { OcppActionEnum } from '../generated/ocpp-action.enum'
import { OcppRpcBaseDto } from './ocpp-rpc-base.dto'
import { OcppCallerrorDto } from './ocpp-callerror.dto'
import { OcppCallresultDto } from './ocpp-callresult.dto'
import { OcppRpcValidationError } from './ocpp-rpc-validation-error'
import { OcppCallDto } from './ocpp-call.dto'
import { OcppErrorCodeEnum } from './ocpp-error-code.enum'
import { OcppMessageTypeIdEnum } from './ocpp-message-type-id.enum'

export class OcppRpcHandler {
  private static _instance: OcppRpcHandler

  private constructor() {
    // nothing to do
  }

  public static get instance(): OcppRpcHandler {
    if (!this._instance) {
      this._instance = new OcppRpcHandler()
    }
    return this._instance
  }

  public validateAndConvert(data: unknown): OcppRpcBaseDto {
    if (!data) {
      throw new OcppRpcValidationError('', OcppErrorCodeEnum.RpcFrameworkError, 'Invalid data format received')
    }
    if (typeof data !== 'string') {
      throw new OcppRpcValidationError('', OcppErrorCodeEnum.RpcFrameworkError, 'Invalid data format received')
    }

    try {
      data = JSON.parse(data)
    } catch (err) {
      throw new OcppRpcValidationError('', OcppErrorCodeEnum.RpcFrameworkError, 'Invalid data format received')
    }

    if (!Array.isArray(data)) {
      throw new OcppRpcValidationError('', OcppErrorCodeEnum.RpcFrameworkError, 'No array received')
    }

    const [messageTypeId] = data

    if (typeof messageTypeId !== 'number') {
      throw new OcppRpcValidationError('', OcppErrorCodeEnum.RpcFrameworkError, 'MessageTypeId is not a number')
    }

    if (messageTypeId === OcppMessageTypeIdEnum.Call && data.length === 4) {
      const [messageTypeId, messageId, action, payload] = data
      this.validateMessageId(messageId)
      this.validateAction(messageId, action)
      this.validatePayload(messageId, payload)

      return plainToClass(OcppCallDto, { messageTypeId, messageId, action, payload })
    } else if (messageTypeId === OcppMessageTypeIdEnum.Result && data.length === 3) {
      const [messageTypeId, messageId, payload] = data
      this.validateMessageId(messageId)
      this.validatePayload(messageId, payload)

      return plainToClass(OcppCallresultDto, { messageTypeId, messageId, payload })
    } else if (messageTypeId === OcppMessageTypeIdEnum.Error && data.length === 5) {
      const [messageTypeId, messageId, errorCode, errorDescription, errorDetails] = data
      this.validateMessageId(messageId)
      this.validateErrorCode(messageId, errorCode)
      this.validateErrorDescription(messageId, errorDescription)
      this.validateErrorDetails(messageId, errorDetails)

      return plainToClass(OcppCallerrorDto, {
        messageTypeId,
        messageId,
        errorCode,
        errorDescription,
        errorDetails,
      })
    } else {
      throw new OcppRpcValidationError('', OcppErrorCodeEnum.RpcFrameworkError, 'Unknown Message')
    }
  }

  private validateErrorDetails(messageId: string, errorDetails: any): void {
    if (!errorDetails) {
      throw new OcppRpcValidationError(messageId, OcppErrorCodeEnum.RpcFrameworkError, 'Missing error details')
    }
  }

  private validateErrorDescription(messageId: string, errorDescription: any): void {
    if (errorDescription === null || errorDescription === undefined) {
      throw new OcppRpcValidationError(messageId, OcppErrorCodeEnum.RpcFrameworkError, 'Missing error description')
    }

    if (typeof errorDescription !== 'string') {
      throw new OcppRpcValidationError(messageId, OcppErrorCodeEnum.RpcFrameworkError, 'Error description is not a string')
    }

    if (errorDescription.length > 255) {
      throw new OcppRpcValidationError(messageId, OcppErrorCodeEnum.RpcFrameworkError, 'Error description is too long')
    }
  }

  private validateErrorCode(messageId: string, errorCode: any): void {
    if (typeof errorCode !== 'string') {
      throw new OcppRpcValidationError(messageId, OcppErrorCodeEnum.RpcFrameworkError, 'Error code is not a string')
    }

    if (!Object.values(OcppErrorCodeEnum).includes(errorCode as OcppErrorCodeEnum)) {
      throw new OcppRpcValidationError(messageId, OcppErrorCodeEnum.RpcFrameworkError, 'Unknown error code')
    }
  }

  private validateMessageId(messageId: any): void {
    if (typeof messageId !== 'string') {
      throw new OcppRpcValidationError('', OcppErrorCodeEnum.RpcFrameworkError, 'MessageId is not a string')
    }

    if (messageId.length > 36) {
      throw new OcppRpcValidationError(messageId, OcppErrorCodeEnum.RpcFrameworkError, 'MessageId is too long')
    }
  }

  private validatePayload(messageId: string, payload: any): void {
    if (!payload) {
      throw new OcppRpcValidationError(messageId, OcppErrorCodeEnum.RpcFrameworkError, 'Wrong payload')
    }
  }

  private validateAction(messageId: string, action: any): void {
    if (typeof action !== 'string') {
      throw new OcppRpcValidationError(messageId, OcppErrorCodeEnum.RpcFrameworkError, 'Action is not a string')
    }

    if (!Object.values(OcppActionEnum).includes(action as OcppActionEnum)) {
      throw new OcppRpcValidationError(messageId, OcppErrorCodeEnum.NotImplemented, action)
    }
  }
}
