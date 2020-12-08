/**
 * Sampled_ Value. Context. Reading_ Context_ Code
urn:x-oca:ocpp:uid:1:569261
Type of detail value: start, end or sample. Default = "Sample.Periodic"
 */
export enum ReadingContextEnum {
  Interruption.Begin,
  Interruption.End,
  Other,
  Sample.Clock,
  Sample.Periodic,
  Transaction.Begin,
  Transaction.End,
  Trigger,
}
