import { RpcMessageTypeIdEnum } from '../rpc-message-type-id.enum'

export abstract class RpcBaseDto {
  constructor(messageTypeId: RpcMessageTypeIdEnum, messageId: string) {
    this.messageTypeId = messageTypeId
    this.messageId = messageId
  }

  /** This is a Message Type Number which is used to identify the type of the message. */
  public readonly messageTypeId: RpcMessageTypeIdEnum

  /** This is a unique identifier that will be used to match request and result */
  public readonly messageId: string

  public abstract toMessageString(): string
}
