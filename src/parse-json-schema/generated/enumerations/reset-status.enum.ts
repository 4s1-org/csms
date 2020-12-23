// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

/**
 * Result of ResetRequest.
 */
export enum ResetStatusEnum {
  /** Command will be executed. */
  Accepted = "Accepted",
  /** Command will not be executed. */
  Rejected = "Rejected",
  /** Reset command is scheduled, Charging Station is busy with a process that cannot be interrupted at the moment. Reset will be executed when process is finished. */
  Scheduled = "Scheduled",
}