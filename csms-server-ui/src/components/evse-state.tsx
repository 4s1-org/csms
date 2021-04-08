import React from 'react'
import { ColorState, Evse } from '@yellowgarbagebag/csms-lib'

interface IState {}

interface IProps {
  data: Evse
}

class EvseStateComp extends React.Component<IProps, IState> {
  public render(): JSX.Element {
    let ccsClass = ''
    switch (this.props.data.state) {
      case ColorState.Yellow:
        ccsClass = 'bg-warning text-white'
        break
      case ColorState.Green:
        ccsClass = 'bg-success text-white'
        break
      case ColorState.Red:
      case ColorState.Unknown:
      default:
        ccsClass = 'bg-danger text-white'
        break
    }

    return (
      <div key={this.props.data.id} className={'d-inline p-2 m-1 ' + ccsClass}>
        {this.props.data.id}: {this.props.data.currentUser} ({this.props.data.wattHours} kWh)
      </div>
    )
  }
}

export default EvseStateComp
