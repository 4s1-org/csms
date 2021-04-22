import { ColorStateEnum } from './color-state.enum'
import { UserModel } from './user.model'

export class EvseModel {
  public wattHours = 0
  public state = ColorStateEnum.Unknown
  public currentUser: UserModel | undefined

  public constructor(public readonly id: number) {
    // nothing to do
  }
}
