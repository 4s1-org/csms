/**
 * Result status of setting the variable.
 */
export enum SetVariableStatusEnum {
  Accepted,
  Rejected,
  UnknownComponent,
  UnknownVariable,
  NotSupportedAttributeType,
  RebootRequired,
}
