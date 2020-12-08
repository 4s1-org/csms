/**
 * Result status of setting the variable.
 */
export enum SetVariableStatusEnum {
  Accepted = "Accepted",
  Rejected = "Rejected",
  UnknownComponent = "UnknownComponent",
  UnknownVariable = "UnknownVariable",
  NotSupportedAttributeType = "NotSupportedAttributeType",
  RebootRequired = "RebootRequired",
}