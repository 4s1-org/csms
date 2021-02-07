import { enumCommentType } from '../enum-comments'

export const SetVariableStatusEnumType: enumCommentType = {
  name: 'SetVariableStatusEnumType',
  description: '---',
  values: [
    {
      value: 'Accepted',
      description: 'Variable successfully set.',
    },
    {
      value: 'Rejected',
      description: 'Request is rejected.',
    },
    {
      value: 'UnknownComponent',
      description: 'Component is not known.',
    },
    {
      value: 'UnknownVariable',
      description: 'Variable is not known.',
    },
    {
      value: 'NotSupportedAttributeType',
      description: 'The AttributeType is not supported.',
    },
    {
      value: 'RebootRequired',
      description: 'A reboot is required.',
    },
  ],
}
