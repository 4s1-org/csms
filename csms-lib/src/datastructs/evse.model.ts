import { ColorStateEnum } from './color-state.enum'
import { UserModel } from './user.model'

export class EvseModel {
  public wattHours = 0
  public state = ColorStateEnum.Unknown
  public currentUser: UserModel | undefined
  public id = 0
}
