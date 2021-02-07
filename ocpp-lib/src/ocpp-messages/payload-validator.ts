import { Validator } from 'jsonschema'
import { OcppErrorCodeEnum } from '../ocpp-messages/ocpp-error-code.enum'
import { CsmsError } from '../utils/csms-error'
import { OcppActionEnum } from '../generated/ocpp-action.enum'
import { OcppRequestMessageDto } from '../ocpp-messages/ocpp-request-message.dto'
import { OcppResponseMessageDto } from '../ocpp-messages/ocpp-response-message.dto'
import { jsonSchemas } from '../generated/json-schema-imports'

export class PayloadValidator {
  private static _instance: PayloadValidator
  private _validator: Validator

  private constructor() {
    this._validator = new Validator()
  }

  public static get instance(): PayloadValidator {
    if (!this._instance) {
      this._instance = new PayloadValidator()
    }
    return this._instance
  }

  public validateRequest(call: OcppRequestMessageDto): any {
    this.validate(call.payload, jsonSchemas[call.action + 'Request'])
  }

  public validateResponse(call: OcppResponseMessageDto, action: OcppActionEnum): any {
    this.validate(call.payload, jsonSchemas[action + 'Response'])
  }

  private validate(data: any, schema: any): void {
    const validation = this._validator.validate(data, schema, {
      allowUnknownAttributes: false,
      skipAttributes: ['$id', 'comment', 'definitions', 'javaType'],
    })

    if (!validation.valid) {
      const errMessage = validation.errors.map((x) => x.toString()).join('\n')
      throw new CsmsError(OcppErrorCodeEnum.FormatViolation, errMessage)
    }
  }
}
