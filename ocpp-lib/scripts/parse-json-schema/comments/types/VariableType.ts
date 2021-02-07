import { classCommentType } from '../class-comments'

export const VariableType: classCommentType = {
  name: 'VariableType',
  description: 'Reference key to a component-variable.',
  fields: [
    {
      fieldName: 'name',
      fieldType: 'identifierString[0..50]',
      cardinality: '1..1',
      description:
        'Name of the variable. Name should be taken from the list of standardized variable names whenever possible. Case Insensitive. strongly advised to use Camel Case.',
      isRequired: true,
    },
    {
      fieldName: 'instance',
      fieldType: 'identifierString[0..50]',
      cardinality: '0..1',
      description:
        'Name of instance in case the variable exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.',
      isRequired: false,
    },
  ],
}
