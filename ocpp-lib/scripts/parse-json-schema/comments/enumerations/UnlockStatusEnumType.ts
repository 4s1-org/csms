import { enumCommentType } from '../enum-comments'

export const UnlockStatusEnumType: enumCommentType = {
  name: 'UnlockStatusEnumType',
  description: 'Status in response to UnlockConnectorRequest.',
  values: [
    { value: 'Unlocked', description: 'Connector has successfully been unlocked.' },
    { value: 'UnlockFailed', description: 'Failed to unlock the connector.' },
    {
      value: 'OngoingAuthorizedTransaction',
      description: 'The connector is not unlocked, because there is still an authorized transaction ongoing.',
    },
    { value: 'UnknownConnector', description: 'The specified connector is not known by the Charging Station.' },
  ],
}
