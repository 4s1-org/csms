import { ConnectorStatusEnum } from "../generated/enumerations/connector-status.enum"
import { ConnectorStatusEnumType } from "./enumerations/ConnectorStatusEnumType"
import { BootNotification } from "./messages/BootNotification"
import { Heartbeat } from "./messages/Heartbeat"
import { StatusNotification } from "./messages/StatusNotification"
import { StatusInfoType } from "./types/StatusInfoType"

export type classCommentFieldType = {
  fieldName: string
  fieldType: string
  cardinality: string
  description: string
  isRequired: boolean
}

export type classCommentType = {
  name: string
  description: string
  fields: classCommentFieldType[]
}

export function getCommentByClass(className: string): classCommentType | undefined {
  return comments.find(x => x.name === className || x.name === className + "Type")
}

export function getCommentByClassField(classComment: classCommentType | undefined, fieldName: string): classCommentFieldType | undefined {
  if (!classComment) {
    return undefined
  }
  return classComment.fields.find(x => x.fieldName === fieldName)
}

const comments: classCommentType[] = [
  ...BootNotification,
  ...StatusNotification,
  ...Heartbeat,
  StatusInfoType
]
