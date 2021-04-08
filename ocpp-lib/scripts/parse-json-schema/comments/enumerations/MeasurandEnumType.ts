import { enumCommentType } from '../enum-comments'

export const MeasurandEnumType: enumCommentType = {
  name: 'MeasurandEnumType',
  description: '---',
  values: [
    {
      value: 'Current.Export',
      description: 'Instantaneous current flow from EV',
    },
    {
      value: 'Current.Import',
      description: 'Instantaneous current flow to EV',
    },
    {
      value: 'Current.Offered',
      description: 'Maximum current offered to EV',
    },
    {
      value: 'Energy.Active.Export.Register',
      description:
        'Numerical value read from the "active electrical energy" (Wh or kWh) register of the (most authoritative) electrical meter measuring energy exported (to the grid).',
    },
    {
      value: 'Energy.Active.Import.Register',
      description:
        'Numerical value read from the "active electrical energy" (Wh or kWh) register of the (most authoritative) electrical meter measuring energy imported (from the grid supply).',
    },
    {
      value: 'Energy.Reactive.Export.Register',
      description:
        'Numerical value read from the "reactive electrical energy" (varh or kvarh) register of the (most authoritative) electrical meter measuring energy exported (to the grid).',
    },
    {
      value: 'Energy.Reactive.Import.Register',
      description:
        'Numerical value read from the "reactive electrical energy" (varh or kvarh) register of the (most authoritative) electrical meter measuring energy imported (from the grid supply).',
    },
    {
      value: 'Energy.Active.Export.Interval',
      description:
        'Absolute amount of "active electrical energy" (Wh or kWh) exported (to the grid) during an associated time "interval", specified by a Metervalues ReadingContext, and applicable interval duration configuration values (in seconds) for ClockAlignedDataInterval and TxnMeterValueSampleInterval.',
    },
    {
      value: 'Energy.Active.Import.Interval',
      description:
        'Absolute amount of "active electrical energy" (Wh or kWh) imported (from the grid supply) during an associated time "interval", specified by a Metervalues ReadingContext, and applicable interval duration configuration values (in seconds) for ClockAlignedDataInterval and TxnMeterValueSampleInterval.',
    },
    {
      value: 'Energy.Active.Net',
      description: 'Numerical value read from the “net active electrical energy" (Wh or kWh) register.',
    },
    {
      value: 'Energy.Reactive.Export.Interval',
      description:
        'Absolute amount of "reactive electrical energy" (varh or kvarh) exported (to the grid) during an associated time "interval", specified by a Metervalues ReadingContext, and applicable interval duration configuration values (in seconds) for ClockAlignedDataInterval and TxnMeterValueSampleInterval.',
    },
    {
      value: 'Energy.Reactive.Import.Interval',
      description:
        'Absolute amount of "reactive electrical energy" (varh or kvarh) imported (from the grid supply) during an associated time "interval", specified by a Metervalues ReadingContext, and applicable interval duration configuration values (in seconds) for ClockAlignedDataInterval and TxnMeterValueSampleInterval.',
    },
    {
      value: 'Energy.Reactive.Net',
      description: 'Numerical value read from the “net reactive electrical energy" (varh or kvarh) register.',
    },
    {
      value: 'Energy.Apparent.Net',
      description: 'Numerical value read from the "apparent electrical energy" (VAh or kVAh) register.',
    },
    {
      value: 'Energy.Apparent.Import',
      description: 'Numerical value read from the "apparent electrical import energy" (VAh or kVAh) register.',
    },
    {
      value: 'Energy.Apparent.Export',
      description: 'Numerical value read from the "apparent electrical export energy" (VAh or kVAh) register.',
    },
    {
      value: 'Frequency',
      description: 'Instantaneous reading of powerline frequency',
    },
    {
      value: 'Power.Active.Export',
      description: 'Instantaneous active power exported by EV. (W or kW)',
    },
    {
      value: 'Power.Active.Import',
      description: 'Instantaneous active power imported by EV. (W or kW)',
    },
    {
      value: 'Power.Factor',
      description: 'Instantaneous power factor of total energy flow',
    },
    {
      value: 'Power.Offered',
      description: 'Maximum power offered to EV',
    },
    {
      value: 'Power.Reactive.Export',
      description: 'Instantaneous reactive power exported by EV. (var or kvar)',
    },
    {
      value: 'Power.Reactive.Import',
      description: 'Instantaneous reactive power imported by EV. (var or kvar)',
    },
    {
      value: 'SoC',
      description: 'State of charge of charging vehicle in percentage',
    },
    {
      value: 'Voltage',
      description: 'Instantaneous DC or AC RMS supply voltage',
    },
  ],
}
