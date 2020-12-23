// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

/**
 * Status returned in response to ChangeAvailabilityRequest.
 */
export enum ChangeAvailabilityStatusEnum {
  /** Request has been accepted and will be executed. */
  Accepted = "Accepted",
  /** Request has not been accepted and will not be executed. */
  Rejected = "Rejected",
  /** Request has been accepted and will be executed when transaction(s) in progress have finished. */
  Scheduled = "Scheduled",
}