import { ChargingStationModel } from '@4s1/csms-lib'
import React from 'react'
import ChargingStationComp from './charging-station'

interface IState {}
interface IProps {
  models: ChargingStationModel[]
}

class MainOverview extends React.Component<IProps, IState> {
  public render(): JSX.Element {
    return (
      <div className="container-fluid">
        <div className="row">
          {this.props.models.map((model) => (
            <ChargingStationComp key={model.uniqueIdentifier} model={model}></ChargingStationComp>
          ))}
        </div>
      </div>
    )
  }
}

export default MainOverview
