import { classCommentType } from '../class-comments'

export const SampledValueType: classCommentType = {
  name: 'SampledValueType',
  description:
    'Single sampled value in MeterValues. Each value can be accompanied by optional fields. To save on mobile data usage, default values of all of the optional fields are such that. The value without any additional fields will be interpreted, as a register reading of active import energy in Wh (Watt-hour) units.',
  fields: [
    {
      fieldName: 'value',
      fieldType: 'decimal',
      cardinality: '1..1',
      description: 'Indicates the measured value.',
      isRequired: true,
    },
    {
      fieldName: 'context',
      fieldType: 'ReadingContextEnumType',
      cardinality: '0..1',
      description: 'Type of detail value: start, end or sample. Default = "Sample.Periodic"',
      isRequired: false,
    },
    {
      fieldName: 'measurand',
      fieldType: 'MeasurandEnumType',
      cardinality: '0..1',
      description: 'Type of measurement. Default = "Energy.Active.Import.Register"',
      isRequired: false,
    },
    {
      fieldName: 'phase',
      fieldType: 'PhaseEnumType',
      cardinality: '0..1',
      description:
        'Indicates how the measured value is to be interpreted. For instance between L1 and neutral (L1-N) Please note that not all values of phase are applicable to all Measurands. When phase is absent, the measured value is interpreted as an overall value.',
      isRequired: false,
    },
    {
      fieldName: 'location',
      fieldType: 'LocationEnumType',
      cardinality: '0..1',
      description: 'Indicates where the measured value has been sampled. Default = "Outlet"',
      isRequired: false,
    },
    {
      fieldName: 'signedMeterValue',
      fieldType: 'SignedMeterValueType',
      cardinality: '0..1',
      description: 'Contains the MeterValueSignature with sign/encoding method information.',
      isRequired: false,
    },
    {
      fieldName: 'xxxxxxxxxxx',
      fieldType: 'xxxxxxxxxxx',
      cardinality: '0..1',
      description: 'xxxxxxxxxxx',
      isRequired: false,
    },
    {
      fieldName: 'unitOfMeasure',
      fieldType: 'UnitOfMeasureType',
      cardinality: '0..1',
      description: 'Represents a UnitOfMeasure including a multiplier',
      isRequired: false,
    },
  ],
}
