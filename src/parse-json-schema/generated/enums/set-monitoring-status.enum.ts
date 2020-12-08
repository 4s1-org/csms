/**
 * Status is OK if a value could be returned. Otherwise this will indicate the reason why a value could not be returned.
 */
export enum SetMonitoringStatusEnum {
  Accepted = "Accepted",
  UnknownComponent = "UnknownComponent",
  UnknownVariable = "UnknownVariable",
  UnsupportedMonitorType = "UnsupportedMonitorType",
  Rejected = "Rejected",
  Duplicate = "Duplicate",
}