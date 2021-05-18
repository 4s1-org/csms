import React from 'react'
import { ColorStateEnum, EvseModel } from '@yellowgarbagebag/csms-lib'

interface IState {}

interface IProps {
  model: EvseModel
}

class EvseStateComp extends React.Component<IProps, IState> {
  public render(): JSX.Element {
    let ccsClass = ''
    switch (this.props.model.state) {
      case ColorStateEnum.Yellow:
        ccsClass = 'bg-warning text-white'
        break
      case ColorStateEnum.Green:
        ccsClass = 'bg-success text-white'
        break
      case ColorStateEnum.Red:
      case ColorStateEnum.Unknown:
      default:
        ccsClass = 'bg-danger text-white'
        break
    }

    let name = ''
    if (this.props.model.currentUser) {
      name = this.props.model.currentUser.description || this.props.model.currentUser.rfid
    }

    return (
      <div className={'d-inline-block p-2 m-1 ' + ccsClass}>
        {this.props.model.id}: {name} [{this.props.model.wattHours} kWh]
      </div>
    )
  }
}

export default EvseStateComp
