import { classCommentType } from '../class-comments'

export const BootNotification: classCommentType[] = [
  {
    name: 'BootNotificationRequest',
    description:
      'This contains the field definition of the BootNotificationRequest PDU sent by the Charging Station to the CSMS.',
    fields: [
      {
        fieldName: 'reason',
        fieldType: 'BootReasonEnumType',
        cardinality: '1..1',
        description: 'This contains the reason for sending this message to the CSMS.',
        isRequired: true,
      },
      {
        fieldName: 'chargingStation',
        fieldType: 'ChargingStationType',
        cardinality: '1..1',
        description: 'Identifies the Charging Station',
        isRequired: true,
      },
    ],
  },
  {
    name: 'BootNotificationResponse',
    description:
      'This contains the field definition of the BootNotificationResponse PDU sent by the CSMS to the Charging Station in response to a BootNotificationRequest.',
    fields: [
      {
        fieldName: 'currentTime',
        fieldType: 'dateTime',
        cardinality: '1..1',
        description: 'This contains the CSMS’s current time.',
        isRequired: true,
      },
      {
        fieldName: 'interval',
        fieldType: 'integer',
        cardinality: '1..1',
        description:
          'When Status is Accepted, this contains the heartbeat interval in seconds. If the CSMS returns something other than Accepted, the value of the interval field indicates the minimum wait time before sending a next BootNotification request.',
        isRequired: true,
      },
      {
        fieldName: 'status',
        fieldType: 'RegistrationStatusEnumType',
        cardinality: '1..1',
        description: 'This contains whether the Charging Station has been registered within the CSMS.',
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
