import { plainToClass } from 'class-transformer'
import { OcppErrorCodeEnum } from '../ocpp-messages/ocpp-error-code.enum'
import { OcppRequestMessageDto } from '../ocpp-messages/ocpp-request-message.dto'
import { OcppResponseMessageDto } from '../ocpp-messages/ocpp-response-message.dto'
import { OcppActionEnum } from '../generated/ocpp-action.enum'
import { CsmsError } from '../utils/csms-error'
import { actionRequestDtoMapping } from '../generated/action-request-dto-mapping'
import { actionResponseDtoMapping } from '../generated/action-response-dto-mapping'

export class PayloadConverter {
  private static _instance: PayloadConverter

  private constructor() {
    // nothing to do
  }

  public static get instance(): PayloadConverter {
    if (!this._instance) {
      this._instance = new PayloadConverter()
    }
    return this._instance
  }

  public convertRequest(msg: OcppRequestMessageDto): void {
    const requestDto = actionRequestDtoMapping[msg.action]
    if (!requestDto) {
      throw new CsmsError(OcppErrorCodeEnum.NotSupported, msg.action)
    }
    msg.payload = plainToClass(requestDto, msg.payload)
  }

  public convertResponse(msg: OcppResponseMessageDto, action: OcppActionEnum): void {
    const responseDto = actionResponseDtoMapping[action]
    if (!responseDto) {
      throw new CsmsError(OcppErrorCodeEnum.NotSupported, action)
    }
    msg.payload = plainToClass(responseDto, msg.payload)
  }
}
