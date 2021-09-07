import React from 'react'
import { ChargingStation } from '@4s1/css-lib'
import Scenario1Comp from './scenario/scenario1'
import DebugComp from './scenario/debug'

interface IState {}

interface IProps {
  cs: ChargingStation | undefined
}

class ChargingStationComp extends React.Component<IProps, IState> {
  public render(): JSX.Element {
    return (
      <div>
        {this.props.cs && <DebugComp cs={this.props.cs}></DebugComp>}
        <br></br>
        {this.props.cs && <Scenario1Comp cs={this.props.cs}></Scenario1Comp>}
      </div>
    )
  }
}

export default ChargingStationComp
