/**
 * Status is OK if a value could be returned. Otherwise this will indicate the reason why a value could not be returned.
 */
export enum SetMonitoringStatusEnum {
  Accepted,
  UnknownComponent,
  UnknownVariable,
  UnsupportedMonitorType,
  Rejected,
  Duplicate,
}
