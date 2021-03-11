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

    return (
      <div className="bg-blue w-100 p-8 flex font-sans">
        <div className="rounded bg-grey-light w-64 p-2">
          <div className="flex justify-between py-1">
            <h3 className="text-sm">{this.props.data.uniqueIdentifier}</h3>
          </div>
          <div className="text-sm mt-2">
            <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
              Status: {stateStr}
            </div>
            <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
              Benutzername: {this.props.data.username}
            </div>
          </div>
          <p className="mt-3 text-grey-dark">Letztes Kommando: {this.props.data.lastCommand}</p>
          <p className="mt-3 text-grey-dark">Letzter Kontakt: {lastContectStr}</p>
        </div>
      </div>
    )
  }
}

export default ChargingStationComp
