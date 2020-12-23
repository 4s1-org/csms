import { BootNotification } from "./class-items/BootNotification"
import { StatusNotification } from "./class-items/StatusNotification"

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
  toCsms: boolean | undefined
  fields: classCommentFieldType[]
}

export function getCommentByClass(classname: string): classCommentType | undefined {
  return comments.find(x => x.name === classname)
}

export function getCommentByClassField(classComment: classCommentType | undefined, fieldName: string): classCommentFieldType | undefined {
  if (!classComment) {
    return undefined
  }
  return classComment.fields.find(x => x.fieldName === fieldName)
}

const comments: classCommentType[] = [
  ...BootNotification,
  ...StatusNotification
]
