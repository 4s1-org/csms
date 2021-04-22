import { Expose, Transform } from 'class-transformer'

export class UserModel {
  @Expose({ name: '_firstName' })
  @Transform(({ value }) => value || '', { toClassOnly: true })
  public firstName = ''

  @Expose({ name: '_lastName' })
  @Transform(({ value }) => value || '', { toClassOnly: true })
  public lastName = ''

  @Expose({ name: '_companyName' })
  @Transform(({ value }) => value || '', { toClassOnly: true })
  public CompanyName = ''

  @Expose({ name: '_rfid' })
  @Transform(({ value }) => value || '', { toClassOnly: true })
  public Rfid = ''

  @Expose({ name: '_enabled' })
  @Transform(({ value }) => value || false, { toClassOnly: true })
  public Enabled = false

  public constructor(rfid: string) {
    this.Rfid = rfid
  }
}
