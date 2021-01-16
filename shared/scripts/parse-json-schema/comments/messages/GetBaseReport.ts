import { classCommentType } from '../class-comments'

export const GetBaseReport: classCommentType[] = [
  {
    name: 'GetBaseReportRequest',
    description:
      'This contains the field definition of the GetBaseReportRequest PDU sent by the CSMS to the Charging Station.',
    fields: [
      {
        fieldName: 'requestId',
        fieldType: 'integer',
        cardinality: '1..1',
        description: 'The Id of the request.',
        isRequired: true,
      },
      {
        fieldName: 'reportBase',
        fieldType: 'ReportBaseEnumType',
        cardinality: '1..1',
        description: 'This field specifies the report base.',
        isRequired: true,
      },
    ],
  },
  {
    name: 'GetBaseReportResponse',
    description:
      'This contains the field definition of the GetBaseReportResponse PDU sent by the Charging Station to the CSMS.',
    fields: [
      {
        fieldName: 'status',
        fieldType: 'GenericDeviceModelStatusEnumType',
        cardinality: '1..1',
        description: 'This indicates whether the Charging Station is able to accept this request.',
        isRequired: true,
      },
      {
        fieldName: 'statusInfo',
        fieldType: 'StatusInfoType',
        cardinality: '0..1',
        description: 'Detailed status information.',
        isRequired: false,
      },
    ],
  },
]
