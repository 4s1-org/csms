export class UserModel {
  public firstName = ''
  public lastName = ''
  public companyName = ''
  public enabled = false

  public constructor(public readonly rfid: string) {
    // nothing to do
  }
}
