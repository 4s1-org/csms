import { classCommentType } from '../class-comments'

export const ModemType: classCommentType = {
  name: 'ModemType',
  description: 'Defines parameters required for initiating and maintaining wireless communication with other devices.',
  fields: [
    {
      fieldName: 'iccid',
      fieldType: 'identifierString[0..20]',
      cardinality: '0..1',
      description: 'This contains the ICCID of the modem’s SIM card.',
      isRequired: false,
    },
    {
      fieldName: 'imsi',
      fieldType: 'identifierString[0..20]',
      cardinality: '0..1',
      description: 'This contains the IMSI of the modem’s SIM card.',
      isRequired: false,
    },
  ],
}
