/**
 * Type of monitor that triggered this event, e.g. exceeding a threshold value.
 */
export enum EventTriggerEnum {
  Alerting = "Alerting",
  Delta = "Delta",
  Periodic = "Periodic",
}