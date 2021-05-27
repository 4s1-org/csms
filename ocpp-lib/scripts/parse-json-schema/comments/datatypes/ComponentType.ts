import { classCommentType } from '../class-comments'

export const ComponentType: classCommentType = {
  name: 'ComponentType',
  description: 'A physical or logical component',
  fields: [
    {
      fieldName: 'name',
      fieldType: 'identifierString[0..50]',
      cardinality: '1..1',
      description:
        'Name of the component. Name should be taken from the list of standardized component names whenever possible. Case Insensitive. strongly advised to use Camel Case.',
      isRequired: true,
    },
    {
      fieldName: 'instance',
      fieldType: 'identifierString[0..50]',
      cardinality: '0..1',
      description:
        'Name of instance in case the component exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.',
      isRequired: false,
    },
    {
      fieldName: 'evse',
      fieldType: 'EVSEType',
      cardinality: '0..1',
      description:
        'Specifies the EVSE when component is located at EVSE level, also specifies the connector when component is located at Connector level.',
      isRequired: false,
    },
  ],
}
