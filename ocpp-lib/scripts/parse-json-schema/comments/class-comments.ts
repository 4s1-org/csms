import { BootNotification } from './messages/BootNotification'
import { ChangeAvailability } from './messages/ChangeAvailability'
import { GetBaseReport } from './messages/GetBaseReport'
import { GetVariables } from './messages/GetVariables'
import { Heartbeat } from './messages/Heartbeat'
import { MeterValues } from './messages/MeterValues'
import { NotifyReport } from './messages/NotifyReport'
import { SetVariables } from './messages/SetVariables'
import { StatusNotification } from './messages/StatusNotification'
import { TransactionEvent } from './messages/TransactionEvent'
import { ChargingStationType } from './datatypes/ChargingStationType'
import { ComponentType } from './datatypes/ComponentType'
import { EVSEType } from './datatypes/EVSEType'
import { MeterValueType } from './datatypes/MeterValueType'
import { ModemType } from './datatypes/ModemType'
import { SampledValueType } from './datatypes/SampledValueType'
import { SetVariableDataType } from './datatypes/SetVariableDataType'
import { SetVariableResultType } from './datatypes/SetVariableResultType'
import { StatusInfoType } from './datatypes/StatusInfoType'
import { VariableType } from './datatypes/VariableType'

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
  return comments.find((x) => x.name === className || x.name === className + 'Type')
}

export function getCommentByClassField(classComment: classCommentType | undefined, fieldName: string): classCommentFieldType | undefined {
  if (!classComment) {
    return undefined
  }
  return classComment.fields.find((x) => x.fieldName === fieldName)
}

const comments: classCommentType[] = [
  // Messages
  ...BootNotification,
  ...ChangeAvailability,
  ...GetBaseReport,
  ...GetVariables,
  ...Heartbeat,
  ...MeterValues,
  ...NotifyReport,
  ...SetVariables,
  ...StatusNotification,
  ...TransactionEvent,
  // Datatypes
  ChargingStationType,
  ComponentType,
  EVSEType,
  MeterValueType,
  ModemType,
  SampledValueType,
  SetVariableDataType,
  SetVariableResultType,
  StatusInfoType,
  VariableType,
]
