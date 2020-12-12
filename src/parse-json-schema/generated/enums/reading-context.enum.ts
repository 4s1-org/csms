/**
 * Sampled_ Value. Context. Reading_ Context_ Code
urn:x-oca:ocpp:uid:1:569261
Type of detail value: start, end or sample. Default = "Sample.Periodic"
 */
export enum ReadingContextEnum {
  "Interruption.Begin" = "Interruption.Begin",
  "Interruption.End" = "Interruption.End",
  Other = "Other",
  "Sample.Clock" = "Sample.Clock",
  "Sample.Periodic" = "Sample.Periodic",
  "Transaction.Begin" = "Transaction.Begin",
  "Transaction.End" = "Transaction.End",
  Trigger = "Trigger",
}