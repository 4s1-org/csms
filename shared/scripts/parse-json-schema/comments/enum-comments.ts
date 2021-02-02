import { AuthorizationStatusEnumType } from './enumerations/AuthorizationStatusEnumType'
import { BootReasonEnumType } from './enumerations/BootReasonEnumType'
import { ChangeAvailabilityStatusEnumType } from './enumerations/ChangeAvailabilityStatusEnumType'
import { ConnectorStatusEnumType } from './enumerations/ConnectorStatusEnumType'
import { IdTokenEnumType } from './enumerations/IdTokenEnumType'
import { OperationalStatusEnumType } from './enumerations/OperationalStatusEnumType'
import { ResetEnumType } from './enumerations/ResetEnumType'
import { ResetStatusEnumType } from './enumerations/ResetStatusEnumType'
import { SetVariableStatusEnumType } from './enumerations/SetVariableStatusEnumType'

export type enumCommentValueType = {
  value: string
  description: string
}

export type enumCommentType = {
  name: string
  description: string
  values: enumCommentValueType[]
}

export function getCommentByEnum(enumName: string): enumCommentType | undefined {
  return comments.find((x) => x.name === enumName || x.name === enumName + 'EnumType')
}

export function getCommentByEnumValue(
  enumComment: enumCommentType | undefined,
  valueName: string,
): enumCommentValueType | undefined {
  if (!enumComment) {
    return undefined
  }
  return enumComment.values.find((x) => x.value === valueName)
}

const comments: enumCommentType[] = [
  AuthorizationStatusEnumType,
  BootReasonEnumType,
  ChangeAvailabilityStatusEnumType,
  ConnectorStatusEnumType,
  IdTokenEnumType,
  OperationalStatusEnumType,
  ResetEnumType,
  ResetStatusEnumType,
  SetVariableStatusEnumType,
]
