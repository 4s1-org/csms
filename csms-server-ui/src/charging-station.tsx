import React from 'react'
import { ChargingStationState } from '@yellowgarbagebag/csms-lib'

interface IState {}
interface IProps {
  data: ChargingStationState
}

class ChargingStationComp extends React.Component<IProps, IState> {
  public render(): JSX.Element {
    return (
      <div>
        <b> {this.props.data.uniqueIdentifier}</b>
        <br />
        Status: {this.props.data.state}
        <br />
        Benutzername: {this.props.data.username}
      </div>
    )
  }
}

export default ChargingStationComp
