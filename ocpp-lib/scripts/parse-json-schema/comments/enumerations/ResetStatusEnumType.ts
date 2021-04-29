import { enumCommentType } from '../enum-comments'

export const ResetStatusEnumType: enumCommentType = {
  name: 'ResetStatusEnumType',
  description: 'Result of ResetRequest.',
  values: [
    { value: 'Accepted', description: 'Command will be executed.' },
    { value: 'Rejected', description: 'Command will not be executed.' },
    {
      value: 'Scheduled',
      description:
        'Reset command is scheduled, Charging Station is busy with a process that cannot be interrupted at the moment. Reset will be executed when process is finished.',
    },
  ],
}
