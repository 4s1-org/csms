import { enumCommentType } from '../enum-comments'

export const IdTokenEnumType: enumCommentType = {
  name: 'IdTokenEnumType',
  description: 'Allowable values of the IdTokenType field.',
  values: [
    {
      value: 'Central',
      description:
        'A centrally, in the CSMS (or other server) generated id (for example used for a remotely started transaction that is activated by SMS). No format defined, might be a UUID.',
    },
    {
      value: 'eMAID',
      description: 'Electro-mobility account id as defined in ISO 15118',
    },
    {
      value: 'ISO14443',
      description:
        'ISO 14443 UID of RFID card. It is represented as an array of 4 or 7 bytes in hexadecimal representation.',
    },
    {
      value: 'ISO15693',
      description:
        'ISO 15693 UID of RFID card. It is represented as an array of 8 bytes in hexadecimal representation.',
    },
    {
      value: 'KeyCode',
      description: 'User use a private key-code to authorize a charging transaction. For example: Pin-code.',
    },
    {
      value: 'Local',
      description:
        'A locally generated id (e.g. internal id created by the Charging Station). No format defined, might be a UUID',
    },
    {
      value: 'MacAddress',
      description: '---',
    },
    {
      value: 'NoAuthorization',
      description:
        'Transaction is started and no authorization possible. Charging Station only has a start button or mechanical key etc. IdToken field SHALL be left empty.',
    },
  ],
}
