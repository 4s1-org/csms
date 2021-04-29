import { enumCommentType } from '../enum-comments'

export const TriggerReasonEnumType: enumCommentType = {
  name: 'TriggerReasonEnumType',
  description: 'Reason that triggered a transactionEventRequest.',
  values: [
    { value: 'Authorized', description: 'Charging is authorized, by any means. Might be an RFID, or other authorization means.' },
    { value: 'CablePluggedIn', description: 'Cable is plugged in and EVDetected.' },
    { value: 'ChargingRateChanged', description: 'Rate of charging changed by more than LimitChangeSignificance.' },
    { value: 'ChargingStateChanged', description: 'Charging State changed.' },
    {
      value: 'Deauthorized',
      description: 'The transaction was stopped because of the authorization status in the response to a transactionEventRequest.',
    },
    { value: 'EnergyLimitReached', description: 'Maximum energy of charging reached. For example: in a pre-paid charging solution' },
    { value: 'EVCommunicationLost', description: 'Communication with EV lost, for example: cable disconnected.' },
    { value: 'EVConnectTimeout', description: 'EV not connected before the connection is timed out.' },
    { value: 'MeterValueClock', description: 'Needed to send a clock aligned meter value' },
    { value: 'MeterValuePeriodic', description: 'Needed to send a periodic meter value' },
    { value: 'TimeLimitReached', description: 'Maximum time of charging reached. For example: in a pre-paid charging solution' },
    { value: 'Trigger', description: 'Requested by the CSMS via a TriggerMessageRequest.' },
    { value: 'UnlockCommand', description: 'CSMS sent an Unlock Connector command.' },
    { value: 'StopAuthorized', description: 'An EV Driver has been authorized to stop charging. For example: By swiping an RFID card.' },
    { value: 'EVDeparted', description: 'EV departed. For example: When a departing EV triggers a parking bay detector.' },
    { value: 'EVDetected', description: 'EV detected. For example: When an arriving EV triggers a parking bay detector.' },
    { value: 'RemoteStop', description: 'A RequestStopTransactionRequest has been sent.' },
    { value: 'RemoteStart', description: 'A RequestStartTransactionRequest has been sent.' },
    { value: 'AbnormalCondition', description: 'An Abnormal Error or Fault Condition has occurred.' },
    { value: 'SignedDataReceived', description: 'Signed data is received from the energy meter.' },
    { value: 'ResetCommand', description: 'CSMS sent a Reset Charging Station command.' },
  ],
}
