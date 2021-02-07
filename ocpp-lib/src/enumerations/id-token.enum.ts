// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

/**
 * Allowable values of the IdTokenType field.
 */
export enum IdTokenEnum {
  /** A centrally, in the CSMS (or other server) generated id (for example used for a remotely started transaction that is activated by SMS). No format defined, might be a UUID. */
  Central = "Central",
  /** Electro-mobility account id as defined in ISO 15118 */
  eMAID = "eMAID",
  /** ISO 14443 UID of RFID card. It is represented as an array of 4 or 7 bytes in hexadecimal representation. */
  ISO14443 = "ISO14443",
  /** ISO 15693 UID of RFID card. It is represented as an array of 8 bytes in hexadecimal representation. */
  ISO15693 = "ISO15693",
  /** User use a private key-code to authorize a charging transaction. For example: Pin-code. */
  KeyCode = "KeyCode",
  /** A locally generated id (e.g. internal id created by the Charging Station). No format defined, might be a UUID */
  Local = "Local",
  /** --- */
  MacAddress = "MacAddress",
  /** Transaction is started and no authorization possible. Charging Station only has a start button or mechanical key etc. IdToken field SHALL be left empty. */
  NoAuthorization = "NoAuthorization",
}