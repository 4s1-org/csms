import { classCommentType } from '../class-comments'

export const SetVariableResultType: classCommentType = {
  name: 'SetVariableResultType',
  description: 'SetVariableResultType is used by: SetVariablesResponse',
  fields: [
    {
      fieldName: 'attributeType',
      fieldType: 'AttributeEnumType',
      cardinality: '0..1',
      description: 'Type of attribute: Actual, Target, MinSet, MaxSet. Default is Actual when omitted.',
      isRequired: false,
    },
    {
      fieldName: 'attributeStatus',
      fieldType: 'SetVariableStatusEnumType',
      cardinality: '1..1',
      description: 'Result status of setting the variable.',
      isRequired: true,
    },
    {
      fieldName: 'component',
      fieldType: 'ComponentType',
      cardinality: '1..1',
      description: 'The component for which result is returned.',
      isRequired: true,
    },
    {
      fieldName: 'variable',
      fieldType: 'VariableType',
      cardinality: '1..1',
      description: 'The variable for which the result is returned.',
      isRequired: true,
    },
    {
      fieldName: 'attributeStatusInfo',
      fieldType: 'StatusInfoType',
      cardinality: '0..1',
      description: 'Detailed attribute status information.',
      isRequired: false,
    },
  ],
}
