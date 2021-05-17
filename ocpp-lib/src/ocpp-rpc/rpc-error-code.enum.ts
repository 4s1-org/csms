export enum RpcErrorCodeEnum {
  /** Payload for Action is syntactically incorrect */
  FormatViolation = 'FormatViolation',
  /** Any other error not covered by the more specific error codes in this table */
  GenericError = 'GenericError',
  /** An internal error occurred and the receiver was not able to process the requested Action successfully */
  InternalError = 'InternalError',
  /** A message with an Message Type Number received that is not supported by this implementation. */
  MessageTypeNotSupported = 'MessageTypeNotSupported',
  /** Requested Action is not known by receiver */
  NotImplemented = 'NotImplemented',
  /** Requested Action is recognized but not supported by the receiver */
  NotSupported = 'NotSupported',
  /** Payload for Action is syntactically correct but at least one of the fields violates occurrence constraints */
  OccurrenceConstraintViolation = 'OccurrenceConstraintViolation',
  /** Payload is syntactically correct but at least one field contains an invalid value */
  PropertyConstraintViolation = 'PropertyConstraintViolation',
  /** Payload for Action is not conform the PDU structure */
  ProtocolError = 'ProtocolError',
  /** Content of the call is not a valid RPC Request, for example: MessageId could not be read. */
  RpcFrameworkError = 'RpcFrameworkError',
  /** During the processing of Action a security issue occurred preventing receiver from completing the Action successfully */
  SecurityError = 'SecurityError',
  /** Payload for Action is syntactically correct but at least one of the fields violates data type constraints (e.g. "somestring": 12) */
  TypeConstraintViolation = 'TypeConstraintViolation',
}
