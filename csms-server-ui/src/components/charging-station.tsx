import React from 'react'
import { ChargingStationModel, ColorState } from '@yellowgarbagebag/csms-lib'
import './charging-station.css'
import dayjs from 'dayjs'
import EvseStateComp from './evse-state'

interface IState {}
interface IProps {
  data: ChargingStationModel
}

class ChargingStationComp extends React.Component<IProps, IState> {
  public render(): JSX.Element {
    let headerColorCss = ''
    let stateStr = 'unbekannt'
    switch (this.props.data.state || 0) {
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
    if (this.props.data.lastContact) {
      lastContectStr = `${dayjs(this.props.data.lastContact).format('DD.MM.YYYY HH:mm:ss')} Uhr`
    }

    if (!this.props.data.evse) {
      this.props.data.evse = []
    }

    return (
      <div className="card h-100">
        <h5 className={'card-header ' + headerColorCss}>{this.props.data.uniqueIdentifier}</h5>
        <div className="card-body">
          <h6 className="card-subtitle mb-2">Status: {stateStr}</h6>
          <div className="card-text">Benutzername: {this.props.data.username}</div>
          <div className="card-text">Wattstunden: {this.props.data.wattHours} kWh</div>
          <br />
          <div className="card-text">
            EVSE:
            {this.props.data.evse.map((evse) => (
              <EvseStateComp data={evse} />
            ))}
          </div>
        </div>
        <div className="card-footer">
          <small className="text-muted">Letztes Kommando: {this.props.data.lastCommand}</small>
          <br />
          <small className="text-muted">Letzter Kontakt: {lastContectStr}</small>
        </div>
      </div>
    )
  }
}

export default ChargingStationComp
