import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsInt, IsPositive, IsEnum, IsString, ValidateNested, MaxLength } from "class-validator"
import { OcppErrorCode } from "./ocpp-error-code"
import { OcppMessageTypeIdEnum } from "./ocpp-message-type-id.enum"

export class OcppCallErrorDto {
  constructor(
    messageId: string,
    errorCode: OcppErrorCode,
    errorDescription?: string,
    errorDetails?: unknown,
  ) {
    this.messageTypeId = OcppMessageTypeIdEnum.Error
    this.messageId = messageId
    this.errorCode = errorCode
    this.errorDescription = errorDescription || ""
    this.errorDetails = errorDetails || {}
  }

  // ToDo: Fixer Wert setzen
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  /** This is a Message Type Number which is used to identify the type of the message */
  public messageTypeId: OcppMessageTypeIdEnum.Error

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(36)
  /** This must be the exact same id that is in the call request so that the recipient can match request and result. */
  public messageId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(OcppErrorCode)
  /** This field must contain a string from the RPC Framework Error Codes table. */
  public errorCode: OcppErrorCode

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  /** Should be filled in if possible, otherwise a clear empty string "" */
  public errorDescription: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  /** This JSON object describes error details in an undefined way. If there are no error details you MUST fill in an empty object {}. */
  public errorDetails: unknown

  public toString(): string {
    return JSON.stringify([this.messageTypeId, this.messageId, this.errorCode, this.errorDescription, this.errorDetails])
  }
}
