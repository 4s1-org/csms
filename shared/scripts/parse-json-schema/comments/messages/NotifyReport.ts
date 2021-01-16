import { classCommentType } from '../class-comments'

export const NotifyReport: classCommentType[] = [
  {
    name: 'NotifyReportRequest',
    description:
      'This contains the field definition of the NotifyReportRequest PDU sent by the Charging Station to the CSMS.',
    fields: [
      {
        fieldName: 'requestId',
        fieldType: 'integer',
        cardinality: '1..1',
        description: 'The id of the GetReportRequest or GetBaseReportRequest that requested this report',
        isRequired: true,
      },
      {
        fieldName: 'generatedAt',
        fieldType: 'dateTime',
        cardinality: '1..1',
        description: 'Timestamp of the moment this message was generated at the Charging Station.',
        isRequired: true,
      },
      {
        fieldName: 'tbc',
        fieldType: 'boolean',
        cardinality: '0..1',
        description:
          '"to be continued" indicator. Indicates whether another part of the report follows in an upcoming notifyReportRequest message. Default value when omitted is false.',
        isRequired: false,
      },
      {
        fieldName: 'seqNo',
        fieldType: 'integer',
        cardinality: '1..1',
        description: 'Sequence number of this message. First message starts at 0.',
        isRequired: true,
      },
      {
        fieldName: 'reportData',
        fieldType: 'ReportDataType',
        cardinality: '0..*',
        description: 'List of ReportData.',
        isRequired: false,
      },
    ],
  },
  {
    name: 'yyyyyyyyyyyyResponse',
    description: 'xxxxxxxxxxx',
    fields: [
      {
        fieldName: 'xxxxxxxxxxx',
        fieldType: 'xxxxxxxxxxx',
        cardinality: '1..1',
        description: 'xxxxxxxxxxx',
        isRequired: true,
      },
      {
        fieldName: 'xxxxxxxxxxx',
        fieldType: 'xxxxxxxxxxx',
        cardinality: '1..1',
        description: 'xxxxxxxxxxx',
        isRequired: true,
      },
      {
        fieldName: 'xxxxxxxxxxx',
        fieldType: 'xxxxxxxxxxx',
        cardinality: '1..1',
        description: 'xxxxxxxxxxx',
        isRequired: true,
      },
      {
        fieldName: 'xxxxxxxxxxx',
        fieldType: 'xxxxxxxxxxx',
        cardinality: '1..1',
        description: 'xxxxxxxxxxx',
        isRequired: true,
      },
    ],
  },
]
