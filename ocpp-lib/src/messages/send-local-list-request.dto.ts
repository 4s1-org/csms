// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { AuthorizationDataDto } from '../datatypes/authorization-data.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { UpdateEnum } from '../enumerations/update.enum'

export class SendLocalListRequestDto extends RequestBaseDto {
  private _className: "SendLocalListRequestDto" = "SendLocalListRequestDto"

  public constructor(
    versionNumber: number,
    updateType: UpdateEnum,
  ) {
    super()
    this.versionNumber = versionNumber
    this.updateType = updateType
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @Type(() => AuthorizationDataDto)
  public localAuthorizationList!: AuthorizationDataDto[]

  /**
   * In case of a full update this is the version number of the full list. In case of a differential update it is the version number of the list after the update has been applied.
   */
  public versionNumber: number

  public updateType: UpdateEnum
}
