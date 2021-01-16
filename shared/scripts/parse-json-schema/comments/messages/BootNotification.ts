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
    ],
  },
]
