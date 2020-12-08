/**
 * The type of this monitor, e.g. a threshold, delta or periodic monitor.
 */
export enum MonitorEnum {
  UpperThreshold,
  LowerThreshold,
  Delta,
  Periodic,
  PeriodicClockAligned,
}
