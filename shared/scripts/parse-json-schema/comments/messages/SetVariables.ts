import { classCommentType } from '../class-comments'

export const SetVariables: classCommentType[] = [
  {
    name: 'SetVariablesRequest',
    description:
      'This contains the field definition of the SetVariablesRequest PDU sent by the CSMS to the Charging Station.',
    fields: [
      {
        fieldName: 'setVariableData',
        fieldType: 'SetVariableDataType',
        cardinality: '1..*',
        description: 'List of Component-Variable pairs and attribute values to set.',
        isRequired: true,
      },
    ],
  },
  {
    name: 'SetVariablesResponse',
    description:
      'This contains the field definition of the SetVariablesResponse PDU sent by the Charging Station to the CSMS in response to a SetVariablesRequest.',
    fields: [
      {
        fieldName: 'setVariableResult',
        fieldType: 'SetVariableResultType',
        cardinality: '1..*',
        description: 'List of result statuses per Component-Variable.',
        isRequired: true,
      },
    ],
  },
]
