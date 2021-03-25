import React from 'react'
import { ChargingStationModel, ChargingStationState } from '@yellowgarbagebag/csms-lib'
import './charging-station.css'
import dayjs from 'dayjs'

interface IState {}
interface IProps {
  data: ChargingStationModel
}

class ChargingStationComp extends React.Component<IProps, IState> {
  public render(): JSX.Element {
    let headerColorCss = ''
    let stateStr = 'unbekannt'
    switch (this.props.data.state || 0) {
      case ChargingStationState.Offline:
        headerColorCss = 'bg-danger text-white'
        stateStr = 'offline'
        break
      case ChargingStationState.Connecting:
        headerColorCss = 'bg-warning'
        stateStr = '(noch) nicht betriebsbereit'
        break
      case ChargingStationState.Online:
        headerColorCss = 'bg-success text-white'
        stateStr = 'online'
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
          <p className="card-text">Benutzername: {this.props.data.username}</p>
          <div className="card-text">
            EVSE:
            {this.props.data.evse.length === 0 && <div className="d-inline p-2 m-1 bg-dark text-white">-?-</div>}
            {this.props.data.evse.map((evse) => (
              <div key={evse.evseId} className="d-inline p-2 m-1 bg-success text-white">
                {evse.user}
              </div>
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
