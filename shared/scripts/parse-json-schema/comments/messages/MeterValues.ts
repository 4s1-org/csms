import { classCommentType } from '../class-comments'

export const MeterValues: classCommentType[] = [
  {
    name: 'MeterValuesRequest',
    description: '---',
    fields: [
      {
        fieldName: 'evseId',
        fieldType: 'integer',
        cardinality: '1..1',
        description:
          'This contains a number (>0) designating an EVSE of the Charging Station. ‘0’ (zero) is used to designate the main power meter.',
        isRequired: true,
      },
      {
        fieldName: 'meterValue',
        fieldType: 'MeterValueType',
        cardinality: '1..*',
        description: 'The sampled meter values with timestamps.',
        isRequired: true,
      },
    ],
  },
  {
    name: 'MeterValuesResponse',
    description:
      'This contains the field definition of the MeterValuesResponse PDU sent by the CSMS to the Charging Station in response to a MeterValuesRequest PDU. This message is deprecated. This message might be removed in a future version of OCPP. It will be replaced by Device Management Monitoring events.',
    fields: [],
  },
]
