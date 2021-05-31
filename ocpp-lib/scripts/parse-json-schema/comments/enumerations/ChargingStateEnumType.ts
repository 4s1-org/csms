import { enumCommentType } from '../enum-comments'

export const ChargingStateEnumType: enumCommentType = {
  name: 'ChargingStateEnumType',
  description: 'The state of the charging process.',
  values: [
    { value: 'Charging', description: 'The contactor of the Connector is closed and energy is flowing to between EVSE and EV.' },
    {
      value: 'EVConnected',
      description:
        'There is a connection between EV and EVSE, in case the protocol used between EV and the Charging Station can detect a connection, the protocol needs to detect this for the state to become active. The connection can either be wired or wireless.',
    },
    {
      value: 'SuspendedEV',
      description: 'When the EV is connected to the EVSE and the EVSE is offering energy but the EV is not taking any energy.',
    },
    {
      value: 'SuspendedEVSE',
      description:
        'When the EV is connected to the EVSE but the EVSE is not offering energy to the EV, e.g. due to a smart charging restriction, local supply power constraints, or when charging has stopped because of the authorization status in the response to a transactionEventRequest indicating that charging is not allowed etc.',
    },
    { value: 'Idle', description: 'There is no connection between EV and EVSE.' },
  ],
}
