import { classCommentType } from '../class-comments'

export const GetVariables: classCommentType[] = [
  {
    name: 'GetVariablesRequest',
    description:
      'This contains the field definition of the GetVariablesRequest PDU sent by the CSMS to the Charging Station.',
    fields: [
      {
        fieldName: 'getVariableData',
        fieldType: 'GetVariableDataType',
        cardinality: '1..*',
        description: 'List of requested variables.',
        isRequired: true,
      },
    ],
  },
  {
    name: 'GetVariablesResponse',
    description:
      'This contains the field definition of the GetVariablesResponse PDU sent by the CSMS to the Charging Station in response to GetVariablesRequest.',
    fields: [
      {
        fieldName: 'getVariableResult',
        fieldType: 'GetVariableResultType',
        cardinality: '1..*',
        description: 'List of requested variables and their values.',
        isRequired: true,
      },
    ],
  },
]
