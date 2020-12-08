/**
 * This contains the type of this event.
The first TransactionEvent of a transaction SHALL contain: "Started" The last TransactionEvent of a transaction SHALL contain: "Ended" All others SHALL contain: "Updated"
 */
export enum TransactionEventEnum {
  Ended = "Ended",
  Started = "Started",
  Updated = "Updated",
}