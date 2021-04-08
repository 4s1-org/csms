// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

/**
 * ---
 */
export enum MeasurandEnum {
  /** Instantaneous current flow from EV */
  "Current.Export" = "Current.Export",
  /** Instantaneous current flow to EV */
  "Current.Import" = "Current.Import",
  /** Maximum current offered to EV */
  "Current.Offered" = "Current.Offered",
  /** Numerical value read from the "active electrical energy" (Wh or kWh) register of the (most authoritative) electrical meter measuring energy exported (to the grid). */
  "Energy.Active.Export.Register" = "Energy.Active.Export.Register",
  /** Numerical value read from the "active electrical energy" (Wh or kWh) register of the (most authoritative) electrical meter measuring energy imported (from the grid supply). */
  "Energy.Active.Import.Register" = "Energy.Active.Import.Register", // DEFAULT
  /** Numerical value read from the "reactive electrical energy" (varh or kvarh) register of the (most authoritative) electrical meter measuring energy exported (to the grid). */
  "Energy.Reactive.Export.Register" = "Energy.Reactive.Export.Register",
  /** Numerical value read from the "reactive electrical energy" (varh or kvarh) register of the (most authoritative) electrical meter measuring energy imported (from the grid supply). */
  "Energy.Reactive.Import.Register" = "Energy.Reactive.Import.Register",
  /** Absolute amount of "active electrical energy" (Wh or kWh) exported (to the grid) during an associated time "interval", specified by a Metervalues ReadingContext, and applicable interval duration configuration values (in seconds) for ClockAlignedDataInterval and TxnMeterValueSampleInterval. */
  "Energy.Active.Export.Interval" = "Energy.Active.Export.Interval",
  /** Absolute amount of "active electrical energy" (Wh or kWh) imported (from the grid supply) during an associated time "interval", specified by a Metervalues ReadingContext, and applicable interval duration configuration values (in seconds) for ClockAlignedDataInterval and TxnMeterValueSampleInterval. */
  "Energy.Active.Import.Interval" = "Energy.Active.Import.Interval",
  /** Numerical value read from the “net active electrical energy" (Wh or kWh) register. */
  "Energy.Active.Net" = "Energy.Active.Net",
  /** Absolute amount of "reactive electrical energy" (varh or kvarh) exported (to the grid) during an associated time "interval", specified by a Metervalues ReadingContext, and applicable interval duration configuration values (in seconds) for ClockAlignedDataInterval and TxnMeterValueSampleInterval. */
  "Energy.Reactive.Export.Interval" = "Energy.Reactive.Export.Interval",
  /** Absolute amount of "reactive electrical energy" (varh or kvarh) imported (from the grid supply) during an associated time "interval", specified by a Metervalues ReadingContext, and applicable interval duration configuration values (in seconds) for ClockAlignedDataInterval and TxnMeterValueSampleInterval. */
  "Energy.Reactive.Import.Interval" = "Energy.Reactive.Import.Interval",
  /** Numerical value read from the “net reactive electrical energy" (varh or kvarh) register. */
  "Energy.Reactive.Net" = "Energy.Reactive.Net",
  /** Numerical value read from the "apparent electrical energy" (VAh or kVAh) register. */
  "Energy.Apparent.Net" = "Energy.Apparent.Net",
  /** Numerical value read from the "apparent electrical import energy" (VAh or kVAh) register. */
  "Energy.Apparent.Import" = "Energy.Apparent.Import",
  /** Numerical value read from the "apparent electrical export energy" (VAh or kVAh) register. */
  "Energy.Apparent.Export" = "Energy.Apparent.Export",
  /** Instantaneous reading of powerline frequency */
  Frequency = "Frequency",
  /** Instantaneous active power exported by EV. (W or kW) */
  "Power.Active.Export" = "Power.Active.Export",
  /** Instantaneous active power imported by EV. (W or kW) */
  "Power.Active.Import" = "Power.Active.Import",
  /** Instantaneous power factor of total energy flow */
  "Power.Factor" = "Power.Factor",
  /** Maximum power offered to EV */
  "Power.Offered" = "Power.Offered",
  /** Instantaneous reactive power exported by EV. (var or kvar) */
  "Power.Reactive.Export" = "Power.Reactive.Export",
  /** Instantaneous reactive power imported by EV. (var or kvar) */
  "Power.Reactive.Import" = "Power.Reactive.Import",
  /** State of charge of charging vehicle in percentage */
  SoC = "SoC",
  /** Instantaneous DC or AC RMS supply voltage */
  Voltage = "Voltage",
}