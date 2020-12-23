import { BootReasonEnumType } from "./enumerations/BootReasonEnumType"
import { ChangeAvailabilityStatusEnumType } from "./enumerations/ChangeAvailabilityStatusEnumType"
import { ConnectorStatusEnumType } from "./enumerations/ConnectorStatusEnumType"
import { OperationalStatusEnumType } from "./enumerations/OperationalStatusEnumType"

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
  return comments.find(x => x.name === enumName || x.name === enumName + "EnumType")
}

export function getCommentByEnumValue(enumComment: enumCommentType | undefined, valueName: string): enumCommentValueType | undefined {
  if (!enumComment) {
    return undefined
  }
  return enumComment.values.find(x => x.value === valueName)
}

const comments: enumCommentType[] = [
  BootReasonEnumType,
  ChangeAvailabilityStatusEnumType,
  ConnectorStatusEnumType,
  OperationalStatusEnumType
]
