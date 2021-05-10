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
import { ChargingStationType } from './types/ChargingStationType'
import { ComponentType } from './types/ComponentType'
import { EVSEType } from './types/EVSEType'
import { MeterValueType } from './types/MeterValueType'
import { ModemType } from './types/ModemType'
import { SampledValueType } from './types/SampledValueType'
import { SetVariableDataType } from './types/SetVariableDataType'
import { SetVariableResultType } from './types/SetVariableResultType'
import { StatusInfoType } from './types/StatusInfoType'
import { VariableType } from './types/VariableType'

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
  // Types
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
