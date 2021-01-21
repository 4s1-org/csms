import { classCommentType } from '../class-comments'

export const TransactionEvent: classCommentType[] = [
  {
    name: 'TransactionEventRequest',
    description:
      'This section contains the field definition of the TransactionEventRequest PDU sent by the Charging Station to the CSMS. For each of the eventTypes; Started, Updated and Ended, the corresponding cardinality is specified.',
    fields: [
      {
        fieldName: 'eventType',
        fieldType: 'TransactionEventEnumType',
        cardinality: '1..1',
        description:
          'This contains the type of this event. The first TransactionEvent of a transaction SHALL contain: "Started" The last TransactionEvent of a transaction SHALL contain: "Ended" All others SHALL contain: "Updated"',
        isRequired: true,
      },
      {
        fieldName: 'timestamp',
        fieldType: 'dateTime',
        cardinality: '1..1',
        description: 'The date and time at which this transaction event occurred.',
        isRequired: true,
      },
      {
        fieldName: 'triggerReason',
        fieldType: 'TriggerReasonEnumType',
        cardinality: '1..1',
        description: 'Reason the Charging Station sends this message to the CSMS',
        isRequired: true,
      },
      {
        fieldName: 'seqNo',
        fieldType: 'integer',
        cardinality: '1..1',
        description:
          'Incremental sequence number, helps with determining if all messages of a transaction have been received.',
        isRequired: true,
      },
      {
        fieldName: 'offline',
        fieldType: 'boolean',
        cardinality: '0..1',
        description:
          'Indication that this transaction event happened when the Charging Station was offline. Default = false, meaning: the event occurred when the Charging Station was online.',
        isRequired: false,
      },
      {
        fieldName: 'numberOfPhasesUsed',
        fieldType: 'integer',
        cardinality: '0..1',
        description:
          'If the Charging Station is able to report the number of phases used, then it SHALL provide it. When omitted the CSMS may be able to determine the number of phases used via device management.',
        isRequired: false,
      },
      {
        fieldName: 'cableMaxCurrent',
        fieldType: 'integer',
        cardinality: '0..1',
        description: 'The maximum current of the connected cable in Ampere (A).',
        isRequired: false,
      },
      {
        fieldName: 'reservationId',
        fieldType: 'integer',
        cardinality: '0..1',
        description: 'This contains the Id of the reservation that terminates as a result of this transaction.',
        isRequired: false,
      },
      {
        fieldName: 'transactionInfo',
        fieldType: 'TransactionType',
        cardinality: '1..1',
        description: 'Contains transaction specific information.',
        isRequired: true,
      },
      {
        fieldName: 'idToken',
        fieldType: 'IdTokenType',
        cardinality: '0..1',
        description:
          'This contains the identifier for which a transaction has to be/was started. Is required when the EV Driver becomes authorized for this transaction. The IdToken should only be send once in a TransactionEventRequest for every authorization done for this transaction.',
        isRequired: false,
      },
      {
        fieldName: 'evse',
        fieldType: 'EVSEType',
        cardinality: '0..1',
        description: 'This identifies which evse (and connector) of the Charging Station is used.',
        isRequired: false,
      },
      {
        fieldName: 'meterValue',
        fieldType: 'MeterValueType',
        cardinality: '0..*',
        description:
          'This contains the relevant meter values. Depending on the EventType of this TransactionEvent the following Configuration Variable is used to configure the content: Started: SampledDataTxStartedMeasurands, Updated: SampledDataTxUpdatedMeasurands, Ended: SampledDataTxEndedMeasurands & AlignedDataTxEndedMeasurands',
        isRequired: false,
      },
    ],
  },
  {
    name: 'TransactionEventResponse',
    description:
      'This contains the field definition of the TransactionEventResponse PDU sent by the CSMS to the Charging Station in response to a TransactionEventRequest.',
    fields: [
      {
        fieldName: 'totalCost',
        fieldType: 'decimal',
        cardinality: '0..1',
        description:
          'SHALL only be sent when charging has ended. Final total cost of this transaction, including taxes. In the currency configured with the Configuration Variable: Currency. When omitted, the transaction was NOT free. To indicate a free transaction, the CSMS SHALL send 0.00.',
        isRequired: false,
      },
      {
        fieldName: 'chargingPriority',
        fieldType: 'integer',
        cardinality: '0..1',
        description:
          'Priority from a business point of view. Default priority is 0, The range is from -9 to 9. Higher values indicate a higher priority. The chargingPriority in TransactionEventResponse is temporarily, so it may not be set in the IdTokenInfoType afterwards. Also the chargingPriority in TransactionEventResponse overrules the one in IdTokenInfoType.',
        isRequired: false,
      },
      {
        fieldName: 'idTokenInfo',
        fieldType: 'IdTokenInfoType',
        cardinality: '0..1',
        description:
          'This contains information about authorization status, expiry and group id. Is required when the transactionEventRequest contained an idToken.',
        isRequired: false,
      },
      {
        fieldName: 'updatedPersonalMessage',
        fieldType: 'MessageContentType',
        cardinality: '0..1',
        description:
          'This can contain updated personal message that can be shown to the EV Driver. This can be used to provide updated tariff information.',
        isRequired: false,
      },
    ],
  },
]
