import { classCommentType } from '../class-comments'

export const MeterValueType: classCommentType = {
  name: 'MeterValueType',
  description:
    'Collection of one or more sampled values in MeterValuesRequest and TransactionEvent. All sampled values in a MeterValue are sampled at the same point in time.',
  fields: [
    {
      fieldName: 'timestamp',
      fieldType: 'dateTime',
      cardinality: '1..1',
      description: 'Timestamp for measured value(s).',
      isRequired: true,
    },
    {
      fieldName: 'sampledValue',
      fieldType: 'SampledValueType',
      cardinality: '1..*',
      description: 'One or more measured values',
      isRequired: true,
    },
  ],
}
