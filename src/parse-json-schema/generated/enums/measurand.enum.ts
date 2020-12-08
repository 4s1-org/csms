/**
 * Sampled_ Value. Measurand. Measurand_ Code
urn:x-oca:ocpp:uid:1:569263
Type of measurement. Default = "Energy.Active.Import.Register"
 */
export enum MeasurandEnum {
  Current.Export,
  Current.Import,
  Current.Offered,
  Energy.Active.Export.Register,
  Energy.Active.Import.Register,
  Energy.Reactive.Export.Register,
  Energy.Reactive.Import.Register,
  Energy.Active.Export.Interval,
  Energy.Active.Import.Interval,
  Energy.Active.Net,
  Energy.Reactive.Export.Interval,
  Energy.Reactive.Import.Interval,
  Energy.Reactive.Net,
  Energy.Apparent.Net,
  Energy.Apparent.Import,
  Energy.Apparent.Export,
  Frequency,
  Power.Active.Export,
  Power.Active.Import,
  Power.Factor,
  Power.Offered,
  Power.Reactive.Export,
  Power.Reactive.Import,
  SoC,
  Voltage,
}
