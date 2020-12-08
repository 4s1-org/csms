/**
 * Returns whether the CSMS has been able to process the message successfully. It does not imply that the evChargingNeeds can be met with the current charging profile.
 */
export enum NotifyEVChargingNeedsStatusEnum {
  Accepted = "Accepted",
  Rejected = "Rejected",
  Processing = "Processing",
}