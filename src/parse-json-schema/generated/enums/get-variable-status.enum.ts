/**
 * Result status of getting the variable.
 */
export enum GetVariableStatusEnum {
  Accepted = "Accepted",
  Rejected = "Rejected",
  UnknownComponent = "UnknownComponent",
  UnknownVariable = "UnknownVariable",
  NotSupportedAttributeType = "NotSupportedAttributeType",
}