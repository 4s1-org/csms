import { ChargingStationModel } from '@yellowgarbagebag/csms-lib'
import React from 'react'

interface IState {}
interface IProps {
  models: ChargingStationModel[]
}

class MainChargingStations extends React.Component<IProps, IState> {
  public render(): JSX.Element {
    return <div>MainStations</div>
  }
}

export default MainChargingStations
