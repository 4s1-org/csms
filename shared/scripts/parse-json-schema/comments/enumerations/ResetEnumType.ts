import { enumCommentType } from '../enum-comments'

export const ResetEnumType: enumCommentType = {
  name: 'ResetEnumType',
  description: 'Type of reset requested.',
  values: [
    {
      value: 'Immediate',
      description: 'Immediate reset of the Charging Station.',
    },
    {
      value: 'OnIdle',
      description: 'Delay reset until no more transactions are active.',
    },
  ],
}
