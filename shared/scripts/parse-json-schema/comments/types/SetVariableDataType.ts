import { classCommentType } from '../class-comments'

export const SetVariableDataType: classCommentType = {
  name: 'SetVariableDataType',
  description: 'SetVariableDataType is used by: SetVariablesRequest',
  fields: [
    {
      fieldName: 'attributeType',
      fieldType: 'AttributeEnumType',
      cardinality: '0..1',
      description: 'Type of attribute: Actual, Target, MinSet, MaxSet. Default is Actual when omitted.',
      isRequired: false,
    },
    {
      fieldName: 'attributeValue',
      fieldType: 'string[0..1000]',
      cardinality: '1..1',
      description:
        'Value to be assigned to attribute of variable. The Configuration Variable ConfigurationValueSize can be used to limit SetVariableData.attributeValue and VariableCharacteristics.valueList. The max size of these values will always remain equal.',
      isRequired: true,
    },
    {
      fieldName: 'component',
      fieldType: 'ComponentType',
      cardinality: '1..1',
      description: 'The component for which the variable data is set.',
      isRequired: true,
    },
    {
      fieldName: 'variable',
      fieldType: 'VariableType',
      cardinality: '1..1',
      description: 'Specifies the that needs to be set.',
      isRequired: true,
    },
  ],
}
