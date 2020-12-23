import { ConnectorStatusEnumType } from "./enumerations/ConnectorStatusEnumType"

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
  ConnectorStatusEnumType
]
