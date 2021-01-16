import { enumCommentType } from '../enum-comments'

export const OperationalStatusEnumType: enumCommentType = {
  name: 'OperationalStatusEnumType',
  description: 'Requested availability change.',
  values: [
    {
      value: 'Inoperative',
      description: 'Charging Station is not available for charging.',
    },
    {
      value: 'Operative',
      description: 'Charging Station is available for charging.',
    },
  ],
}
