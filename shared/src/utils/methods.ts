import { validateSync } from "class-validator"
import { OcppBaseDto } from "src/custom/ocpp-base.dto"
import { OcppCallErrorDto } from "src/custom/ocpp-call-error.dto"
import { OcppErrorCode } from "src/custom/ocpp-error-code"
import { RequestBaseDto } from "src/generated/request-base.dto"
import { ResponseBaseDto } from "src/generated/response-base.dto"

export function validateData(data: OcppBaseDto | RequestBaseDto | ResponseBaseDto, messageId: string): void {
  const errors = validateSync(data)
  if (errors.length > 0) {
    if (data instanceof OcppBaseDto) {
      throw new OcppCallErrorDto(messageId, OcppErrorCode.RpcFrameworkError, 'Message is invalid', errors)
    } else if (data instanceof RequestBaseDto || data instanceof ResponseBaseDto) {
      throw new OcppCallErrorDto(messageId, OcppErrorCode.FormatViolation, 'Validation failed', errors)
    } else {
      throw new OcppCallErrorDto(messageId, OcppErrorCode.InternalError, 'Unknown type to validate', errors)
    }
  }
}
