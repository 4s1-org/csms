export enum OcppErrorCodes {
  /** Payload for Action is syntactically incorrect */
  FormatViolation,
  /** Any other error not covered by the more specific error codes in this table */
  GenericError,
  /** An internal error occurred and the receiver was not able to process the requested Action successfully */
  InternalError,
  /** A message with an Message Type Number received that is not supported by this implementation. */
  MessageTypeNotSupported,
  /** Requested Action is not known by receiver */
  NotImplemented,
  /** Requested Action is recognized but not supported by the receiver */
  NotSupported,
  /** Payload for Action is syntactically correct but at least one of the fields violates occurrence constraints */
  OccurrenceConstraintViolation,
  /** Payload is syntactically correct but at least one field contains an invalid value */
  PropertyConstraintViolation,
  /** Payload for Action is not conform the PDU structure */
  ProtocolError,
  /** Content of the call is not a valid RPC Request, for example: MessageId could not be read. */
  RpcFrameworkError,
  /** During the processing of Action a security issue occurred preventing receiver from completing the Action successfully */
  SecurityError,
  /** Payload for Action is syntactically correct but at least one of the fields violates data type constraints (e.g. "somestring": 12) */
  TypeConstraintViolation,
}
