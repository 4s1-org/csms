import { Validator } from 'jsonschema'
import fs from 'fs'
import path from 'path'
import { OcppErrorCodeEnum } from '../ocpp-messages/ocpp-error-code.enum'
import { CsmsError } from '../utils/csms-error'
import { OcppActionEnum } from '../generated/ocpp-action.enum'
import { OcppRequestMessageDto } from '../ocpp-messages/ocpp-request-message.dto'
import { OcppResponseMessageDto } from '../ocpp-messages/ocpp-response-message.dto'

export class PayloadValidator {
  private static _instance: PayloadValidator
  private _validator: Validator
  private _schemas: { [key: string]: any } = {}

  private constructor() {
    this._validator = new Validator()
  }

  public static get instance(): PayloadValidator {
    if (!this._instance) {
      this._instance = new PayloadValidator()
      this._instance.init()
    }
    return this._instance
  }

  private init(): void {
    const dir = path.join(__dirname, '..', '..', '..', 'third-party', 'ocpp', '2.0.1')
    if (!fs.existsSync(dir)) {
      throw new Error('Path to schema files not exists')
    }
    const files = fs.readdirSync(dir)

    for (const file of files) {
      const schema: any = JSON.parse(fs.readFileSync(path.join(dir, file)).toString())
      const fileNameWithoutExt = file.substr(0, file.length - 5)
      this._schemas[fileNameWithoutExt] = schema
    }
  }

  public validateRequest(call: OcppRequestMessageDto): any {
    this.validate(call.payload, this._schemas[call.action + 'Request'])
  }

  public validateResponse(call: OcppResponseMessageDto, action: OcppActionEnum): any {
    this.validate(call.payload, this._schemas[action + 'Response'])
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
