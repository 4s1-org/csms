import React from 'react'
import { ChargingStationModel, ColorState } from '@yellowgarbagebag/csms-lib'
import './charging-station.css'
import dayjs from 'dayjs'
import EvseStateComp from './evse-state'

interface IState {}
interface IProps {
  model: ChargingStationModel
}

class ChargingStationComp extends React.Component<IProps, IState> {
  public render(): JSX.Element {
    let headerColorCss = ''
    let stateStr = 'unbekannt'
    switch (this.props.model.state || 0) {
      case ColorState.Yellow:
        headerColorCss = 'bg-warning'
        stateStr = '(noch) nicht betriebsbereit'
        break
      case ColorState.Green:
        headerColorCss = 'bg-success text-white'
        stateStr = 'online'
        break
      default:
        headerColorCss = 'bg-danger text-white'
        stateStr = 'offline'
        break
    }

    let lastContectStr = 'unbekannt'
    if (this.props.model.lastContact) {
      lastContectStr = `${dayjs(this.props.model.lastContact).format('DD.MM.YYYY HH:mm:ss')} Uhr`
    }

    return (
      <div className="card h-100">
        <h5 className={'card-header ' + headerColorCss}>{this.props.model.uniqueIdentifier}</h5>
        <div className="card-body">
          <h6 className="card-subtitle mb-2">State: {stateStr}</h6>
          <div className="card-text">Username: {this.props.model.username}</div>
          <div className="card-text">
            {this.props.model.evseList.map((evse) => (
              <EvseStateComp key={evse.id} data={evse} />
            ))}
          </div>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last command: {this.props.model.lastCommand}</small>
          <br />
          <small className="text-muted">Last contact: {lastContectStr}</small>
        </div>
      </div>
    )
  }
}

export default ChargingStationComp
