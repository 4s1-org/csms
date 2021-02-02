import { enumCommentType } from '../enum-comments'

export const AuthorizationStatusEnumType: enumCommentType = {
  name: 'AuthorizationStatusEnumType',
  description: 'Status of an authorization response.',
  values: [
    {
      value: 'Accepted',
      description: 'Identifier is allowed for charging.',
    },
    {
      value: 'Blocked',
      description: 'Identifier has been blocked. Not allowed for charging.',
    },
    {
      value: 'ConcurrentTx',
      description:
        'Identifier is already involved in another transaction and multiple transactions are not allowed. (Only relevant for the response to a transactionEventRequest(eventType=Started).)',
    },
    {
      value: 'Expired',
      description: 'Identifier has expired. Not allowed for charging.',
    },
    {
      value: 'Invalid',
      description: 'Identifier is invalid. Not allowed for charging.',
    },
    {
      value: 'NoCredit',
      description:
        'Identifier is valid, but EV Driver doesn’t have enough credit to start charging. Not allowed for charging.',
    },
    {
      value: 'NotAllowedTypeEVSE',
      description: 'Identifier is valid, but not allowed to charge at this type of EVSE.',
    },
    {
      value: 'NotAtThisLocation',
      description: 'Identifier is valid, but not allowed to charge at this location.',
    },
    {
      value: 'NotAtThisTime',
      description: 'Identifier is valid, but not allowed to charge at this location at this time.',
    },
    {
      value: 'Unknown',
      description: 'Identifier is unknown. Not allowed for charging.',
    },
  ],
}
